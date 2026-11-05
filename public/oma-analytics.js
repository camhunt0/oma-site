/* Loaded only after analytics consent, on the production domain. */
(function () {
  if (window.omaAnalyticsStarted) return;
  window.omaAnalyticsStarted = true;
  var id = 'G-FWW3R9BXYD';
  window.dataLayer = window.dataLayer || [];
  window.gtag = window.gtag || function () { window.dataLayer.push(arguments); };
  window.gtag('consent', 'default', {
    analytics_storage: 'granted', ad_storage: 'denied',
    ad_user_data: 'denied', ad_personalization: 'denied'
  });
  window.gtag('js', new Date());
  // GA4 enhanced measurement owns page views, including browser-history changes.
  // Do not also send manual page_view events from React route effects.
  window.gtag('config', id, {
    allow_google_signals: false,
    allow_ad_personalization_signals: false
  });
  var tag = document.createElement('script');
  tag.async = true;
  tag.src = 'https://www.googletagmanager.com/gtag/js?id=' + id;
  document.head.appendChild(tag);

  function track(name, placement) {
    if (window['ga-disable-' + id]) return;
    window.gtag('event', name, {
      send_to: id,
      page_path: window.location.pathname,
      cta_location: placement
    });
  }

  document.addEventListener('click', function (event) {
    var link = event.target instanceof Element ? event.target.closest('a[href]') : null;
    if (!link) return;
    var href = link.getAttribute('href');
    var name;
    if (href.indexOf('tel:') === 0) name = 'phone_click';
    else if (href.indexOf('sms:') === 0) name = 'sms_click';
    else {
      var url = new URL(href, window.location.href);
      if (url.origin === window.location.origin && url.hash === '#booking') name = 'booking_cta_click';
    }
    if (!name) return;
    var section = link.closest('section');
    var placement = link.getAttribute('data-analytics-location') ||
      (link.closest('nav') ? 'navigation' :
        link.closest('#mobile-menu') ? 'mobile_navigation' :
          link.closest('footer') ? 'footer' :
            section && section.id ? section.id : 'page_content');
    track(name, placement);
  }, true);

  // Observe the actual scheduling card, not the entire tall booking section.
  // Next.js swaps this element on client navigation; observe new instances too.
  if ('IntersectionObserver' in window) {
    var seen = new WeakSet();
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting && entry.intersectionRatio >= 0.25) {
          track('booking_section_view', 'booking');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.25 });
    function observeBooking() {
      var card = document.querySelector('[data-analytics-booking]');
      if (card && !seen.has(card)) { seen.add(card); observer.observe(card); }
    }
    observeBooking();
    new MutationObserver(observeBooking).observe(document.body, { childList: true, subtree: true });
  }
})();
