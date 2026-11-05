# OMA Google Analytics

Property measurement ID: `G-FWW3R9BXYD`.

GA4 loads by default only on `www.ohiomuscleactivation.com`, unless the visitor
has opted out. There is no consent popup. The footer discloses Analytics use and
provides an on/off control. Previous declines are honored. Turning analytics off
stops tracking, removes GA cookies, and reloads without the Google tag. Preview domains and localhost
do not send GA4 traffic. Existing Vercel Analytics is unchanged.

Google signals and advertising personalization are disabled. Custom events send
only the page path and a fixed placement label; no phone numbers, form contents,
Square customer records, or booking details are included in these custom events.
Google's standard tag also collects page URLs, referrers, and device information.
Never put personal information into campaign parameters or website URLs.

## Events

| Event | Meaning |
| --- | --- |
| `page_view` | Standard GA4 page view, including client navigation when enhanced history measurement is enabled. |
| `booking_cta_click` | Click on a link to the booking section; not a completed booking. |
| `phone_click` | Click on a telephone link; not a connected call. |
| `sms_click` | Click on a text link; not a sent message. |
| `booking_section_view` | At least 25% of the scheduling card became visible. Once per mounted card while analytics is enabled. |

Custom events include `page_path` and `cta_location`. Condition-page booking
placements distinguish the hero, details, and bottom CTA; navigation, mobile
navigation, footer, and named sections are also distinguished. Generic content
uses `page_content` where no specific placement exists.

## Google Analytics admin follow-up

The Measurement ID permits sending events, not accessing or changing the account.
Account-side settings and reports require an authorized Analytics login.

1. Confirm this web stream belongs to OMA and its website URL is the www domain.
2. Under Enhanced measurement, keep Page views and browser-history changes
   enabled. This integration relies on that mechanism for Next.js client
   navigation; it deliberately does not send a second set of manual page views.
   Review other enhanced measurement options; disable form interactions and site
   search if unnecessary, and do not configure collection of personal data.
3. In Realtime, visit the website, ensure analytics is enabled, navigate to a condition page,
   click a booking CTA, and view the scheduling card. Verify the events arrive.
   A phone or text click opens the device handler; it does not send a message.
4. Register event-scoped custom dimensions for `cta_location` and `page_path`
   if needed for custom event reports.
5. Optionally mark booking, phone, and text clicks as key events, clearly labeled
   as contact intent. Do not treat booking-section views as leads or clicks as
   confirmed appointments. Review testing/internal traffic filters before
   activating any exclusion.
6. Connect Search Console with an authorized login for search-query reporting.

Start with traffic acquisition, landing pages, device category, and sessions
with contact-intent events. Compare with actual new and attended appointments
from Square separately. Opt-outs, blockers, and attribution limitations
mean Analytics counts are not a census of visitors or bookings.

## Checks

Run `node --test tests/analytics.test.cjs`, TypeScript, and the Next.js production
build. Tests cover property initialization, duplicate initialization protection,
advertising settings, intended click targets and placement, opt-out suppression,
booking visibility thresholds, and observing new cards after client navigation.
They do not prove receipt in the Google Analytics property; verify Realtime with
an authorized account.
