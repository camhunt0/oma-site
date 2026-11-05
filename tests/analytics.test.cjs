const { test } = require('node:test');
const assert = require('node:assert/strict');
const { readFileSync } = require('node:fs');
const vm = require('node:vm');
const source = readFileSync('public/oma-analytics.js', 'utf8');

function setup() {
  const listeners = {}, scripts = [], observed = [], unobserved = [];
  let visibility, mutation;
  let card = {};
  class Element {
    constructor(href, placement) { this.href = href; this.placement = placement; }
    closest(selector) { return selector === 'a[href]' ? this : null; }
    getAttribute(name) { return name === 'href' ? this.href : this.placement; }
  }
  class IntersectionObserver {
    constructor(callback) { visibility = callback; }
    observe(target) { observed.push(target); }
    unobserve(target) { unobserved.push(target); }
  }
  class MutationObserver {
    constructor(callback) { mutation = callback; }
    observe() {}
  }
  const window = { location: { pathname: '/conditions/hip-pain', href: 'https://www.ohiomuscleactivation.com/conditions/hip-pain', origin: 'https://www.ohiomuscleactivation.com' }, IntersectionObserver };
  const document = { head: { appendChild: s => scripts.push(s) }, createElement: () => ({}), addEventListener: (n, f) => listeners[n] = f, querySelector: () => card, body: {} };
  const context = vm.createContext({ window, document, Element, IntersectionObserver, MutationObserver, URL, WeakSet });
  vm.runInContext(source, context);
  return { window, scripts, observed, unobserved, context,
    events: () => Array.from(window.dataLayer, args => Array.from(args)).filter(args => args[0] === 'event'),
    click: (href, placement) => listeners.click({ target: new Element(href, placement) }),
    visible: ratio => visibility([{target: card, isIntersecting: ratio > 0, intersectionRatio: ratio}]),
    remount: () => { card = {}; mutation(); }, mutation: () => mutation() };
}

test('initializes the correct property once and disables advertising', () => {
  const s = setup(); vm.runInContext(source, s.context);
  assert.equal(s.scripts.length, 1);
  assert.equal(s.scripts[0].src, 'https://www.googletagmanager.com/gtag/js?id=G-FWW3R9BXYD');
  const config = s.window.dataLayer.find(args => args[0] === 'config');
  assert.equal(config[1], 'G-FWW3R9BXYD');
  assert.equal(config[2].allow_google_signals, false);
  assert.equal(config[2].allow_ad_personalization_signals, false);
  assert.equal(s.events().length, 0); // No competing manual page_view.
});

test('tracks only intended links, with source page and placement but no phone number', () => {
  const s = setup();
  s.click('/#booking', 'condition_hero');
  s.click('tel:+16149469071', 'footer');
  s.click('sms:+16149469071', 'navigation');
  s.click('/#about'); s.click('https://example.com/#booking');
  assert.deepEqual(s.events().map(e => e[1]), ['booking_cta_click', 'phone_click', 'sms_click']);
  assert.equal(s.events()[0][2].page_path, '/conditions/hip-pain');
  assert.equal(s.events()[0][2].cta_location, 'condition_hero');
  assert.ok(!JSON.stringify(s.events()).includes('6149469071'));
  s.window['ga-disable-G-FWW3R9BXYD'] = true;
  s.click('/#booking'); assert.equal(s.events().length, 3);
});

test('booking visibility requires 25 percent and handles client navigation', () => {
  const s = setup();
  s.visible(0); s.visible(0.1); assert.equal(s.events().length, 0);
  s.visible(0.3); assert.equal(s.events()[0][1], 'booking_section_view');
  assert.equal(s.unobserved.length, 1);
  s.mutation(); assert.equal(s.observed.length, 1);
  s.remount(); assert.equal(s.observed.length, 2);
});
