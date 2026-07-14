export interface Pattern {
  title: string;
  body: string;
}

export interface Step {
  num: string;
  title: string;
  body: string;
}

export interface Faq {
  q: string;
  a: string;
}

export interface RelatedCondition {
  title: string;
  desc: string;
  href: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
}

export interface WhySection {
  kicker: string;
  heading: string;
  paragraphs: string[];
  /** Overrides marginBottom on the LAST paragraph (28 or 0). Omit to keep the default bodyText margin (16). */
  lastParagraphMarginBottom?: number;
  /** Inline quote box (red-dim background) shown after the paragraphs. */
  quote?: { text: string; attribution: string };
  /** Labeled callout box (bg surface, marginTop 8) shown after the paragraphs. */
  callout?: { label: string; text: string };
}

/**
 * The optional grid-2 section between the steps and the FAQ.
 * - "standard" (golf-performance, hip-pain, strength-performance): a card on the
 *   left (either a testimonial or a labeled callout) and kicker/heading/paragraphs
 *   plus a "Book a Diagnostic" link on the right.
 * - "careTeam" (post-surgical-recovery): a kicker + testimonial card on the left
 *   and a bordered box with kicker + two paragraphs on the right.
 */
export type ExpectSection =
  | {
      variant: "standard";
      alignItems: "start" | "center";
      card:
        | { type: "testimonial"; testimonial: Testimonial }
        | { type: "callout"; label: string; paragraphs: [string, string] };
      kicker: string;
      heading: string;
      paragraphs: [string, string];
    }
  | {
      variant: "careTeam";
      leftKicker: string;
      testimonial: Testimonial;
      rightKicker: string;
      rightParagraphs: [string, string];
    };

export interface ConditionData {
  metaTitle: string;
  metaDescription: string;
  ogTitle: string;
  ogDescription: string;
  heroKicker: string;
  h1: string;
  heroIntro: string;
  why: WhySection;
  patterns: Pattern[];
  how: { heading: string; paragraph: string };
  steps: Step[];
  expect?: ExpectSection;
  faqs: Faq[];
  related: RelatedCondition[];
  cta: { kicker: string; heading: string; paragraph: string };
}

export const conditions: Record<string, ConditionData> = {
  "chronic-pain": {
    metaTitle: "Chronic Pain Relief | Muscle Activation Powell, OH",
    metaDescription: "Address the root cause of chronic pain through Muscle Activation Techniques. Personalized, drug-free care in Powell, serving greater Columbus, OH.",
    ogTitle: "Chronic Pain | Ohio Muscle Activation",
    ogDescription: "Clean imaging does not mean the nervous system is working properly. MAT evaluates the whole body, restores function, and builds the system's tolerance to daily stress over time.",
    heroKicker: "Condition",
    h1: "Chronic Pain",
    heroIntro: "If your imaging is clean but you are still in pain, you are not imagining it. You have a neurological problem that imaging cannot detect. MAT evaluates the entire neuromuscular system, not just where it hurts, to find where the breakdown actually occurred.",
    why: {
      kicker: "A Different Approach",
      heading: "Most providers treat where it hurts. MAT evaluates where the system broke down.",
      paragraphs: [
        "Chronic pain rarely originates at the site of pain. The area that hurts is usually compensating for a muscle that lost its signal somewhere else in the body. Treating the compensation site gives temporary relief. The source remains unaddressed.",
        "MAT takes a comprehensive whole-body approach. Every assessment evaluates the full neuromuscular system, not just the complaint area. A shoulder problem may trace to an inhibited hip. A low back issue may trace to a dormant glute. The connection is not always obvious, which is why it gets missed.",
        "Stress, trauma, and overuse all create neuromuscular dysfunction by pushing the system past its tolerance threshold. Physical injury, repetitive movement patterns, and accumulated life stress all affect the same nervous system. MAT restores function at the root and, over time, raises the threshold at which dysfunction occurs.",
      ],
      callout: {
        label: "The Stress Threshold",
        text: "The neuromuscular system has a capacity for stress. When accumulated stress exceeds that capacity, muscles inhibit. MAT does not just address the current inhibition. Over time, consistent sessions raise the set-point itself. The system becomes more resilient. Flare-ups become less frequent. The changes hold longer between sessions.",
      },
    },
    patterns: [
      { title: "Clean Imaging, Real Pain", body: "An MRI shows structure. It does not show whether a muscle is receiving its neurological signal. A muscle can look completely normal on imaging and still not contract properly. This is one of the most common and most misunderstood causes of chronic pain." },
      { title: "Recurring Patterns", body: "Pain that responds to treatment and then returns is almost always a sign that the source was never addressed. The treatment relieved the compensating area, but the muscle that triggered the compensation is still offline. The pattern rebuilds." },
      { title: "Multiple Pain Sites", body: "When pain moves around or exists in several areas simultaneously, it often reflects a systemic neuromuscular issue. The body is compensating on multiple fronts. MAT evaluates the full system to find where the original breakdown occurred." },
      { title: "Stress and Trauma", body: "Physical stress, injury, and emotional trauma all affect the nervous system's ability to maintain muscle function. When accumulated stress exceeds the system's tolerance threshold, muscles begin to inhibit. MAT identifies where that shutdown occurred and restores it." },
    ],
    how: {
      heading: "Find the origin. Restore the signal. Build the capacity.",
      paragraph: "The three-step process goes deeper than symptom management. It identifies the source of the dysfunction, restores neurological communication, and over time builds a more resilient system that is better equipped to handle the demands placed on it.",
    },
    steps: [
      { num: "01", title: "Assess the Whole System", body: "Unlike approaches that treat where it hurts, MAT evaluates the entire neuromuscular system. A shoulder problem may trace to an inhibited hip. A low back issue may trace to a dormant glute. We find the origin, not just the site." },
      { num: "02", title: "Restore the Signal", body: "Targeted hands-on input restores neurological communication to the inhibited muscles. When the source muscles come back online, the compensators decompress and the pain pattern begins to resolve." },
      { num: "03", title: "Build the Threshold", body: "Over time, consistent MAT raises the neuromuscular system's capacity to tolerate stress. Each session builds on the last. The system becomes more resilient, and the set-point for dysfunction gets higher." },
    ],
    faqs: [
      { q: "Why does my pain move around?", a: "Pain that moves between sites often reflects a shifting compensation pattern. As one area gets overloaded and the body tries to protect it, other muscles take over. The original inhibited muscle is driving the whole sequence. MAT identifies the origin of the cascade rather than chasing the symptoms." },
      { q: "Can stress cause muscle inhibition?", a: "Yes. The nervous system does not distinguish between physical stress, emotional stress, and overuse. They all draw from the same capacity. When accumulated stress exceeds the system's tolerance threshold, muscles begin to inhibit as a protective response. This is why many people notice that chronic pain worsens during stressful periods." },
      { q: "Will this actually hold, or will I need constant treatment?", a: "MAT is designed to produce lasting change, not ongoing dependency. In the early phase, more frequent sessions build the foundation. Over time, the neuromuscular system's tolerance increases, sessions become less frequent, and the changes hold longer. The goal is a body that functions better on its own, not one that requires constant maintenance." },
      { q: "I have tried everything. Why would MAT be different?", a: "Most chronic pain treatment addresses symptoms at the site of pain. MAT addresses the neurological source, evaluates the full system, and restores function at the root. The comprehensive whole-body approach finds things that localized treatment misses. It is not uncommon for clients to experience meaningful change in the first session after years of unsuccessful treatment elsewhere." },
    ],
    related: [
      { title: "Post-Surgical Recovery", desc: "Muscles that shut down after surgery and have not come back online despite PT and rehabilitation.", href: "/conditions/post-surgical-recovery" },
      { title: "Hip Pain", desc: "Chronic hip pain in golfers, runners, and active adults that has not responded to stretching or therapy.", href: "/conditions/hip-pain" },
      { title: "Neck and Shoulder Tension", desc: "Recurring tension that returns despite massage, chiropractic, or postural corrections.", href: "/conditions/neck-shoulder-tension" },
    ],
    cta: {
      kicker: "Ready for a Real Answer",
      heading: "Find out where the system broke down and what it will take to fix it.",
      paragraph: "A comprehensive 1-on-1 evaluation that looks at the full neuromuscular system, not just where it hurts.",
    },
  },

  "golf-performance": {
    metaTitle: "Golf Performance Training | MAT Powell, OH",
    metaDescription: "Add distance and consistency to your game. Muscle Activation Techniques improves golf mobility and power for players near Powell & Columbus, OH.",
    ogTitle: "Golf Performance | Ohio Muscle Activation",
    ogDescription: "Your swing ceiling is neurological. MAT has repeatedly increased yardage and range of motion for golfers by restoring the muscles that drive rotation and power.",
    heroKicker: "Condition",
    h1: "Golf Performance",
    heroIntro: "Most swing limitations are not technique problems. They are neuromuscular ones. When the muscles that drive rotation, sequencing, and stability have lost their signal, no amount of instruction or practice will unlock the movement your body is neurologically incapable of producing.",
    why: {
      kicker: "The Neuromuscular Ceiling",
      heading: "Your swing is limited by muscles that have gone offline, not by your technique.",
      paragraphs: [
        "The golf swing is one of the most demanding rotational movements in sport. It requires precise neuromuscular sequencing across the hips, thorax, and shoulders. When key muscles in that chain lose their signal, the body compensates with whatever it has available.",
        "Those compensations become the swing. Instruction can refine the pattern, but it cannot fix a neurological gap. The movement the body produces under load will always default to the compensated version until the missing signals are restored.",
        "MAT has repeatedly increased yardage and range of motion for golfers at every level. When inhibited muscles come back online, the rotation, sequencing, and power that were always there finally become accessible.",
      ],
      lastParagraphMarginBottom: 28,
      quote: {
        text: "\"I had been dealing with hip pain for over 3 years that seriously limited my golf game. After just one session of Muscle Activation Techniques, I was able to hinge my hips again without that constant burning in my hamstrings and low back. This was the first time I felt like someone actually fixed the root of the problem, not just treated the symptoms.\"",
        attribution: "Kyle G. · Collegiate Golfer",
      },
    },
    patterns: [
      { title: "Hip Rotation Restriction", body: "Inhibited glutes and hip rotators limit backswing and prevent full hip clearing through impact. Most golfers accept this as a flexibility problem. It is frequently a neuromuscular one that responds quickly to MAT." },
      { title: "Limited Shoulder Turn", body: "Restricted shoulder turn and thoracic rotation often trace back to inhibited muscles in the posterior shoulder and mid-back. Releasing the restriction without restoring the signal produces limited lasting change." },
      { title: "Trail Leg Instability", body: "Lack of trail leg stability during the backswing forces compensations throughout the swing. The root cause is often inhibited hip and knee stabilizers on that side that are not contributing as they should." },
      { title: "Post-Injury Return", body: "Golfers returning from back, hip, shoulder, or wrist injuries often find that healed tissue does not mean fully functioning muscles. MAT restores the neurological signal to muscles that shut down during injury and never fully came back." },
    ],
    how: {
      heading: "Restore the signal. Unlock the swing.",
      paragraph: "The process is systematic. Manual muscle testing identifies which muscles in the kinematic chain have lost their neurological signal. Once those muscles are reactivated, the rotation, stability, and sequencing that were being blocked by the compensation pattern become available immediately.",
    },
    steps: [
      { num: "01", title: "Assess", body: "Manual muscle testing identifies exactly which muscles in the hips, thorax, and shoulders have lost their signal, revealing the neuromuscular gaps limiting your swing." },
      { num: "02", title: "Activate", body: "Targeted hands-on input restores the neurological connection to the inhibited muscles. Hip rotators, glutes, and shoulder stabilizers begin firing on demand." },
      { num: "03", title: "Verify", body: "We retest immediately. Improved range of motion is measurable in the same session. Most golfers feel the difference in their rotation before they leave." },
    ],
    expect: {
      variant: "standard",
      alignItems: "start",
      card: {
        type: "testimonial",
        testimonial: {
          quote: "\"Cameron is professional and very knowledgeable. I have seen great value in my sessions with him starting with recovery from a golf injury to building and maintaining muscle strength. I am glad I found him.\"",
          name: "Jack R.",
          role: "Golfer · Client since 2018",
        },
      },
      kicker: "Local Expertise",
      heading: "Serving golfers across Powell, Dublin, and greater Columbus.",
      paragraphs: [
        "Ohio Muscle Activation works with golfers from courses throughout the area including Muirfield Village, Safari Golf Club, and Scioto Reserve. Cameron holds TPI Level 1 certification, providing a golf-specific lens on neuromuscular assessment that goes beyond general fitness.",
        "Whether the goal is eliminating pain, improving rotation, adding yardage, or simply maintaining the physical capacity to play at your best, MAT addresses the neuromuscular foundation that everything else depends on.",
      ],
    },
    faqs: [
      { q: "How is MAT different from golf fitness training?", a: "Golf fitness training loads the movement patterns you already have. If the muscles that should be driving those patterns are neurologically inhibited, training loads the compensators harder. MAT restores the signal to the inhibited muscles first so that when you train, you are building the right foundation." },
      { q: "Will this help my swing speed?", a: "Swing speed is directly related to how well the kinematic sequence fires and how much rotational capacity the body can access. When inhibited hip rotators and glutes are reactivated, golfers consistently gain usable range of motion and rotation speed. Increased yardage is a common result." },
      { q: "I have had lessons but still cannot turn. Can MAT help?", a: "Instruction addresses the pattern but cannot fix a neuromuscular gap. If the muscles that produce rotation are inhibited, no amount of coaching will unlock the movement. MAT addresses the signal first, which often makes technique changes far easier to implement and sustain." },
      { q: "Do I need to be in pain to benefit?", a: "No. Many of our golf clients come in before pain develops. They notice a ceiling in their performance and recognize it as a body issue rather than a technique issue. MAT identifies and closes the neuromuscular gaps limiting their game." },
    ],
    related: [
      { title: "Hip Pain", desc: "Chronic hip pain that has not responded to stretching, therapy, or rest.", href: "/conditions/hip-pain" },
      { title: "Strength and Performance", desc: "Proactive neuromuscular care for active adults who want to perform at their best.", href: "/conditions/strength-performance" },
      { title: "Post-Surgical Recovery", desc: "Muscles that shut down after surgery and have not come back online despite rehabilitation.", href: "/conditions/post-surgical-recovery" },
    ],
    cta: {
      kicker: "Ready to Unlock Your Game",
      heading: "Find out which muscles are limiting your swing and get them back.",
      paragraph: "A focused 1-on-1 evaluation to identify the neuromuscular gaps limiting your rotation, power, and consistency.",
    },
  },

  "hip-pain": {
    metaTitle: "Hip Pain | Muscle Activation Techniques | Powell, Ohio",
    metaDescription: "Chronic hip pain in golfers, runners, and active adults often traces back to muscles that have lost their neurological signal. Ohio Muscle Activation uses MAT to find the source and restore proper function. Serving Powell, Dublin and Columbus.",
    ogTitle: "Hip Pain | Ohio Muscle Activation",
    ogDescription: "Chronic hip pain that does not respond to stretching or therapy is often a neurological problem. MAT identifies which muscles went offline and restores the signal.",
    heroKicker: "Condition",
    h1: "Hip Pain",
    heroIntro: "Chronic hip pain that does not respond to stretching, massage, or physical therapy is often a neurological problem, not a flexibility or strength problem. The muscles that should be stabilizing the hip have lost their signal, and everything else is compensating around them.",
    why: {
      kicker: "Why It Keeps Coming Back",
      heading: "The hip is not the problem. It is protecting the problem.",
      paragraphs: [
        "When a muscle loses its neurological signal, the body does not shut down. It compensates. Surrounding muscles take on extra load. Over time those compensating muscles become chronically overloaded, tight, and painful.",
        "Stretching and massage relieve the compensating muscles temporarily. But because the source muscle is still offline, the pattern rebuilds within days. The tightness returns. The pain returns.",
        "MAT identifies exactly which muscle lost its signal. Once that muscle is reactivated, the compensators no longer need to overwork, and the pain pattern finally resolves.",
      ],
      lastParagraphMarginBottom: 28,
      quote: {
        text: "I had been dealing with hip pain for over 3 years that seriously limited my golf game. After just one session of Muscle Activation Techniques, I was able to hinge my hips again without that constant burning in my hamstrings and low back.",
        attribution: "Kyle G. · Collegiate Golfer",
      },
    },
    patterns: [
      { title: "Golfers", body: "Hip restriction through the backswing and inability to clear the hips through impact often traces back to inhibited glutes and hip rotators, not inflexibility. Rotation problems are frequently neuromuscular, not structural." },
      { title: "Runners", body: "IT band syndrome, hip flexor pain, and recurring low-back tightness in runners is often caused by inhibited hip stabilizers forcing other muscles to overload. The tight areas are compensating, not the source." },
      { title: "Desk Workers", body: "Extended sitting neurologically inhibits the hip flexors and glutes. The body compensates with the low back and hamstrings, which is why desk workers develop chronic hip and back tension that stretching temporarily relieves but never fixes." },
      { title: "Post-Surgical Patients", body: "After hip replacement or labral repair, the muscles stabilizing the joint frequently remain neurologically inhibited. The hardware is in place, but the muscles have not received the signal to re-engage." },
    ],
    how: {
      heading: "Find the muscle that went offline. Restore the signal.",
      paragraph: "Most hip pain treatment works on the areas that hurt. MAT works on the areas that stopped doing their job. By identifying and reactivating the specific muscles that have lost their neurological signal, the body stops compensating and the pain finally has somewhere to go.",
    },
    steps: [
      { num: "01", title: "Assess", body: "Manual muscle testing identifies exactly which hip muscles have lost their neurological signal, separating the source of the problem from the areas compensating around it." },
      { num: "02", title: "Activate", body: "Targeted hands-on input restores the neurological connection. The inhibited muscle receives its signal again and begins contracting on demand." },
      { num: "03", title: "Verify", body: "We retest range of motion and muscle function immediately. Most clients feel a measurable difference in hip mobility and stability in the same session." },
    ],
    expect: {
      variant: "standard",
      alignItems: "center",
      card: {
        type: "testimonial",
        testimonial: {
          quote: "Four months ago I was experiencing lower back pain due to weak hip-flexors while training for an Ironman 70.3. After seeing Cameron several times, each session ended in greater flexibility and less back pain. I was able to PR my Ironman 70.3 and I give major credit to Cameron for helping me.",
          name: "Nick S.",
          role: "Triathlete · Ironman 70.3",
        },
      },
      kicker: "What to Expect",
      heading: "Most clients feel a difference in the first session.",
      paragraphs: [
        "Because MAT targets the neurological source and not just the symptomatic area, changes tend to be immediate and measurable. Improved range of motion, reduced pain with movement, better stability.",
        "The first appointment is a Muscle Check Diagnostic: a focused evaluation to identify exactly which muscles have lost their signal and what that is causing in your hip. You will leave with a clear picture of the problem and a recommendation for next steps.",
      ],
    },
    faqs: [
      { q: "How is MAT different from hip stretching or mobility work?", a: "Stretching addresses the flexibility of the muscle you are stretching, not the neurological problem in the muscle that caused the tightness. If the hip flexor is tight because the glute stopped firing, stretching the hip flexor gives temporary relief but does not fix the source. MAT identifies which muscle lost its signal and restores it directly." },
      { q: "I have had hip pain for years. Can MAT still help?", a: "Yes. Muscle inhibition does not resolve on its own. It persists until the neurological signal is specifically restored. Many of our clients have dealt with hip pain for years before finding MAT. The duration of the problem does not determine the outcome of treatment." },
      { q: "Will this work if my MRI came back clean?", a: "Imaging shows structure, not neurological function. A muscle can test completely clean on an MRI and still not fire properly. This is one of the most common situations we see. MAT looks at the signal, not the structure." },
      { q: "How many sessions will I need?", a: "This varies by individual, how long the inhibition has been present, and how the body responds. Most clients notice meaningful improvement in the first one to three sessions. A clear picture of what is driving your hip pain will come from the initial diagnostic." },
    ],
    related: [
      { title: "Post-Surgical Recovery", desc: "Muscles that shut down after surgery and have not come back online despite PT and rehabilitation.", href: "/conditions/post-surgical-recovery" },
      { title: "Neck and Shoulder Tension", desc: "Recurring tension that returns despite massage, chiropractic, or postural corrections.", href: "/conditions/neck-shoulder-tension" },
      { title: "Chronic Pain", desc: "Imaging looks clean but movement still feels wrong. The neurological gap most providers miss.", href: "/conditions/chronic-pain" },
    ],
    cta: {
      kicker: "Ready to Find Answers",
      heading: "Find out which muscles went offline and get them back.",
      paragraph: "A focused 1-on-1 evaluation to identify exactly which muscles have lost their signal and what that is causing in your hip.",
    },
  },

  "neck-shoulder-tension": {
    metaTitle: "Neck & Shoulder Tension Relief | MAT Powell, OH",
    metaDescription: "Ease chronic neck and shoulder tension at the source. Muscle Activation Techniques in Powell, OH helps restore balance and lasting relief.",
    ogTitle: "Neck and Shoulder Tension | Ohio Muscle Activation",
    ogDescription: "Chronic neck and shoulder tension that returns despite treatment is often a neurological problem, not a structural one. MAT restores the signal.",
    heroKicker: "Condition",
    h1: "Neck and Shoulder Tension",
    heroIntro: "Chronic neck and shoulder tension that returns despite massage, stretching, or chiropractic care is almost always a neurological problem. The muscles you feel are not the source. They are compensating for muscles that stopped doing their job.",
    why: {
      kicker: "Why It Keeps Returning",
      heading: "The muscles you feel are not the problem. They are covering for it.",
      paragraphs: [
        "When a muscle loses its neurological signal, surrounding muscles pick up the load. In the neck and shoulders, the deep stabilizers frequently go offline first. The more superficial muscles take over. They were not designed to work that hard continuously, so they become chronically tight and painful.",
        "Massage relieves the overloaded muscles temporarily. But until the deep stabilizers receive their signal again, the surface muscles have nowhere to offload. The tension rebuilds within days.",
        "MAT identifies exactly which muscles lost their signal and restores it directly. When the deep stabilizers come back online, the compensating muscles finally get to rest.",
      ],
      lastParagraphMarginBottom: 28,
      quote: {
        text: "\"Cameron is professional and very knowledgeable. I have seen great value in my sessions with him starting with recovery from a golf injury to building and maintaining muscle strength. I am glad I found him.\"",
        attribution: "Jack R. · Golfer · Client since 2018",
      },
    },
    patterns: [
      { title: "Desk Workers", body: "Extended sitting and screen time neurologically inhibit the deep cervical stabilizers and serratus anterior. The traps and levator scapulae compensate, becoming chronically overloaded. No amount of stretching fixes the source because the source is a missing signal, not a tight muscle." },
      { title: "Overhead Athletes", body: "Swimmers, tennis players, and pitchers who develop shoulder impingement or rotator cuff irritation often have inhibited rotator cuff muscles driving the problem. The surrounding muscles overload to compensate, creating pain and limiting range." },
      { title: "Post-Surgical Shoulder", body: "After rotator cuff repair or shoulder reconstruction, the muscles coordinating movement often remain neurologically inhibited even after the tissue heals. The result is a shoulder that feels weak or unstable despite completing rehabilitation." },
      { title: "Tension Headaches", body: "Many chronic tension headaches trace back to inhibited deep neck flexors. When those muscles lose their signal, the posterior neck muscles overload. The tension builds upward. Treating the headache site gives temporary relief but doesn't address where the overload originates." },
    ],
    how: {
      heading: "Restore the signal. Let the compensators rest.",
      paragraph: "Most neck and shoulder treatment focuses on relaxing the tight muscles. MAT focuses on reactivating the muscles that should have been working all along. When the deep stabilizers come back online, the compensators naturally decompress and the chronic tension pattern resolves.",
    },
    steps: [
      { num: "01", title: "Assess", body: "Precise manual muscle testing identifies which neck, shoulder, and upper back muscles have lost their neurological signal, separating the source from the areas compensating around it." },
      { num: "02", title: "Activate", body: "Targeted hands-on input restores the neurological connection to the inhibited muscles. Once those muscles receive their signal again, the compensators no longer need to overwork." },
      { num: "03", title: "Verify", body: "We retest immediately. Reduced tension, improved range of motion, and a lighter feeling in the neck and shoulders are typically felt in the same session." },
    ],
    faqs: [
      { q: "Why does my neck tension always come back after massage?", a: "Massage relieves the muscles that are overloaded. But if those muscles are overloaded because another muscle stopped firing, the tension will return once you resume normal activity. MAT addresses the muscle that lost its signal so the compensators no longer need to carry the extra load." },
      { q: "Is my neck tension related to my posture?", a: "Posture is often a symptom, not a cause. When the muscles that should be holding you upright lose their signal, the body reorganizes around the dysfunction. Improving posture without restoring the neurological signal is difficult to sustain because the system keeps defaulting back to what it can manage." },
      { q: "Can MAT help with tension headaches?", a: "Many tension headaches trace back to neuromuscular dysfunction in the neck. When the deep neck flexors are inhibited, the posterior neck muscles become chronically overloaded. MAT identifies which muscles are offline and restores them, often reducing the frequency and intensity of tension headaches." },
      { q: "How is this different from chiropractic care?", a: "Chiropractic addresses joint alignment and mobility. MAT addresses the neurological signal to the muscles surrounding those joints. When muscles lose their signal, they cannot provide the stability a joint needs. The adjustment may not hold long-term if the muscular support system is not functioning properly. Many chiropractors refer clients to MAT for exactly this reason." },
    ],
    related: [
      { title: "Post-Surgical Recovery", desc: "Muscles that shut down after surgery and have not come back online despite PT and rehabilitation.", href: "/conditions/post-surgical-recovery" },
      { title: "Hip Pain", desc: "Chronic hip pain in golfers, runners, and active adults that has not responded to stretching or therapy.", href: "/conditions/hip-pain" },
      { title: "Chronic Pain", desc: "Imaging looks clean but movement still feels wrong. The neurological gap most providers miss.", href: "/conditions/chronic-pain" },
    ],
    cta: {
      kicker: "Ready to Find Answers",
      heading: "Find out which muscles went offline and get them back.",
      paragraph: "A focused 1-on-1 evaluation to identify exactly which muscles have lost their signal and what that is causing in your neck and shoulders.",
    },
  },

  "post-surgical-recovery": {
    metaTitle: "Post-Surgical Recovery | Muscle Activation Powell OH",
    metaDescription: "Rebuild strength and reconnect muscles after surgery with Muscle Activation Techniques in Powell, OH. A gentle, targeted path back to full movement.",
    ogTitle: "Post-Surgical Recovery | Ohio Muscle Activation",
    ogDescription: "Surgery fixes the structure. MAT restores the neurological signal so muscles can fire again.",
    heroKicker: "Condition",
    h1: "Post-Surgical Recovery",
    heroIntro: "Surgery fixes the structure. But muscles that shut down during injury or immobilization do not always come back on their own. That is why so many people plateau in PT. The structural repair is complete, but the neurological signal has not been restored.",
    why: {
      kicker: "What Is Actually Happening",
      heading: "Your nervous system shut muscles off to protect you.",
      paragraphs: [
        "When the body experiences trauma from surgery, injury, or prolonged immobilization, the nervous system inhibits the muscles around the affected area. This is a protective response. The brain turns those muscles off to prevent further damage.",
        "The problem is that these muscles do not automatically turn back on once the structural repair is complete. The neurological inhibition persists. Other muscles compensate, creating new patterns of tightness, weakness, and instability that standard rehabilitation does not address.",
        "This is why people plateau in physical therapy. The PT is strengthening movement patterns, but the muscles that should be driving those patterns are still neurologically offline.",
      ],
      lastParagraphMarginBottom: 0,
    },
    patterns: [
      { title: "Rotator Cuff Repair", body: "Shoulder muscles that coordinated movement before surgery often remain inhibited, causing the arm to feel weak or unstable even after the tissue has healed." },
      { title: "Hip or Knee Replacement", body: "The muscles stabilizing the new joint need their neurological signal restored before they can provide the support the joint requires for pain-free movement." },
      { title: "ACL Reconstruction", body: "The quadriceps and surrounding musculature frequently experience significant inhibition. Restoring their signal is essential for full return to sport and activity." },
      { title: "Spinal Surgery", body: "Core and spinal muscles that were cut through or retracted during surgery often remain inhibited long after the incision heals, causing persistent instability." },
    ],
    how: {
      heading: "PT works on the pattern. MAT works on the signal.",
      paragraph: "Physical therapy is excellent at rebuilding movement patterns and general strength. But if the muscles that should be driving those patterns are not receiving their neurological signal, PT strengthens the compensators, not the source muscles. Progress stalls, and the underlying instability remains.",
    },
    steps: [
      { num: "01", title: "Assess", body: "Precise manual muscle testing identifies exactly which muscles lost their neurological signal during injury or surgery and have not come back online." },
      { num: "02", title: "Activate", body: "Targeted hands-on input restores the neurological connection. The muscle receives its signal again and begins contracting properly." },
      { num: "03", title: "Verify", body: "We retest immediately. Improved range of motion, reduced guarding, and better stability felt in the same session." },
    ],
    expect: {
      variant: "careTeam",
      leftKicker: "Client Experience",
      testimonial: {
        quote: "After my knee replacement, I completed physical therapy and was cleared, but my knee still did not feel right. It was not as strong or stable as I expected. That is when I tried Muscle Activation Techniques. We found muscles around my knee that were not working properly, and once those were addressed, everything started to improve. My knee feels stronger, more stable, and I have much more confidence in how I move. MAT helped me go from being cleared to actually feeling fully functional again.",
        name: "Junior A.",
        role: "Knee Replacement · Grandfather",
      },
      rightKicker: "Works Alongside Your Care Team",
      rightParagraphs: [
        "Many post-surgical clients continue working with their physical therapist or surgeon while seeing us. MAT addresses the neuromuscular piece that PT recognizes but cannot directly target.",
        "Orthopedic surgeons, sports medicine physicians, and physical therapists in Powell, Dublin, and Columbus regularly refer patients to Ohio Muscle Activation for exactly this reason.",
      ],
    },
    faqs: [
      { q: "How soon after surgery can I start MAT?", a: "This depends on your surgeon clearance and the nature of the procedure. MAT is gentle and non-invasive. It does not manipulate joints or force range of motion. Many clients begin working with us while still in PT, using MAT to complement their rehabilitation." },
      { q: "Will MAT interfere with my physical therapy?", a: "No. MAT is designed to complement your existing care. We work alongside your PT, not against it. Many physical therapists refer clients to MAT specifically because they recognize the neuromuscular gap that standard rehab does not address." },
      { q: "What if I had surgery months or years ago and still do not feel right?", a: "This is one of the most common situations we see. Muscle inhibition does not resolve on its own over time. It persists until the neurological signal is specifically restored. It is never too late to address the root cause." },
      { q: "What surgeries respond well to MAT?", a: "Rotator cuff repair, hip replacement, knee replacement, ACL reconstruction, spinal surgery, and any procedure involving joint stabilization. If muscles were cut through, repaired, or immobilized, they likely need neuromuscular reactivation." },
    ],
    related: [
      { title: "Hip Pain", desc: "Chronic hip pain in golfers, runners, and active adults that has not responded to stretching or therapy.", href: "/conditions/hip-pain" },
      { title: "Neck and Shoulder Tension", desc: "Recurring tension that returns despite massage, chiropractic, or postural corrections.", href: "/conditions/neck-shoulder-tension" },
      { title: "Chronic Pain", desc: "Imaging looks clean but movement still feels wrong. The neurological gap most providers miss.", href: "/conditions/chronic-pain" },
    ],
    cta: {
      kicker: "Ready to Move Forward",
      heading: "Find out which muscles went offline and get them back.",
      paragraph: "A focused 1-on-1 evaluation to identify exactly which muscles have lost their neurological signal and what that is causing in your body.",
    },
  },

  "strength-performance": {
    metaTitle: "Strength & Athletic Performance | MAT Powell, OH",
    metaDescription: "Unlock stronger, more responsive muscles with Muscle Activation Techniques. Improve performance and reduce injury risk in Powell & Columbus, OH.",
    ogTitle: "Strength and Performance | Ohio Muscle Activation",
    ogDescription: "You do not have to be in pain to benefit from MAT. Proactive neuromuscular care raises the stress threshold, increases contractile strength, and builds a body that performs consistently.",
    heroKicker: "Condition",
    h1: "Strength and Performance",
    heroIntro: "You do not have to wait for the check engine light to care for your neuromuscular system. Active adults who use MAT proactively train harder, recover faster, and maintain function longer because the system driving their performance is actually working at full capacity.",
    why: {
      kicker: "Proactive Neuromuscular Care",
      heading: "Most people come in when pain forces them to. The best time to come in is before it does.",
      paragraphs: [
        "Every active adult accumulates neuromuscular gaps over time. Repetitive training patterns, accumulated stress, past injuries that never fully resolved, and the simple demands of a busy life all affect the system. Most people adapt around these gaps without knowing they exist.",
        "MAT identifies those gaps before they become pain. When inhibited muscles are reactivated, strength increases, movement quality improves, and the body is better equipped to handle the loads placed on it. Performance goes up not because of additional training but because the system driving it is finally working at its full potential.",
        "Clients who commit to consistent MAT describe a cumulative effect. Each session builds on the last. Over time the neuromuscular stress threshold rises, the system tolerates more before dysfunction sets in, and the interval at which function holds between sessions grows longer.",
      ],
      lastParagraphMarginBottom: 0,
    },
    patterns: [
      { title: "Strength Plateau", body: "When a muscle loses its neurological signal, it does not contract at full capacity. Training on top of inhibited muscles loads the compensators and reinforces the gap. MAT restores full contractile ability so that effort in the gym actually produces the results it should." },
      { title: "Athletic Performance", body: "Runners, cyclists, swimmers, and multi-sport athletes develop neuromuscular gaps from repetitive movement patterns. The body adapts around them. MAT identifies the inhibited muscles limiting economy, power output, and resilience." },
      { title: "Proactive Maintenance", body: "Active adults who train consistently know the difference between how they feel when everything is firing and when something is off. MAT keeps the system calibrated so that off days become less frequent and recovery between sessions improves." },
      { title: "Neuromuscular Optimization", body: "Performance is the sum of how well the neuromuscular system can produce, sequence, and sustain force. Closing the gaps between what is possible and what the current inhibition pattern allows is the most direct path to a higher level of function." },
    ],
    how: {
      heading: "Restore full contractile ability. Raise the threshold. Build toward lasting function.",
      paragraph: "The goal for performance clients is not just fixing what is inhibited today. It is building a neuromuscular system that is progressively more capable of handling stress, recovering from training, and maintaining function under load over time.",
    },
    steps: [
      { num: "01", title: "Assess", body: "Manual muscle testing identifies which muscles are not contributing at full capacity, revealing the gaps between current function and potential." },
      { num: "02", title: "Activate", body: "Targeted hands-on input restores full neurological communication to the inhibited muscles. Contractile ability increases immediately." },
      { num: "03", title: "Build", body: "Over time, consistent MAT raises the neuromuscular stress threshold. The system becomes more resilient, strength gains compound, and the interval between sessions that the body maintains function grows longer." },
    ],
    expect: {
      variant: "standard",
      alignItems: "center",
      card: {
        type: "callout",
        label: "The Threshold Effect",
        paragraphs: [
          "Think of the neuromuscular system as having a stress tolerance capacity. Every training session, stressful week, and accumulated demand draws from that capacity. When the demand exceeds it, muscles inhibit and function degrades.",
          "Consistent MAT raises the capacity itself. You get stronger not just in the muscles being reactivated, but in the system's overall ability to sustain function under load. Over time you train harder, recover faster, and stay in the window of peak function for longer between sessions.",
        ],
      },
      kicker: "MAT as Part of Your Routine",
      heading: "The highest performers treat their neuromuscular system as an investment, not an emergency fund.",
      paragraphs: [
        "The same way you build mobility work, soft tissue care, and recovery protocols into your routine, MAT fits as the layer that ensures the muscles driving everything else are actually contributing at full capacity.",
        "Clients who use MAT consistently describe it as the piece that makes everything else work better. Lifts improve. Runs feel easier. Recovery between sessions shortens. The body simply functions the way it is supposed to when the neurological foundation is intact.",
      ],
    },
    faqs: [
      { q: "I am not injured. Can MAT still help me?", a: "Yes. Many of our most consistent clients have never had a significant injury. They use MAT to maintain full neuromuscular function, close gaps before they become problems, and ensure that the effort they put into training produces the results it should. You do not need a check engine light to maintain the car." },
      { q: "How does MAT produce strength gains?", a: "Strength is limited by how well a muscle can contract, not just by how much you train. When a muscle is neurologically inhibited, it cannot produce its full force output regardless of how much effort you apply. MAT restores full contractile ability. When all the muscles that should be contributing are actually contributing, strength increases measurably." },
      { q: "How often should I come in for proactive care?", a: "This varies by training volume, stress load, and individual response. Most active adults doing consistent MAT find that sessions become less frequent over time as the neuromuscular system's tolerance increases. The goal is a system that holds its function longer, not ongoing dependency." },
      { q: "How is MAT different from physical therapy or massage for wellness?", a: "Massage maintains soft tissue quality and reduces tension. Physical therapy addresses movement patterns and strength. MAT addresses the neurological signal that determines how well muscles can contract in the first place. They are complementary, but MAT works at a layer that the others do not reach." },
    ],
    related: [
      { title: "Golf Performance", desc: "Restore the neuromuscular foundation that drives rotation, sequencing, and consistency in the swing.", href: "/conditions/golf-performance" },
      { title: "Hip Pain", desc: "Chronic hip pain in active adults that has not responded to stretching, therapy, or rest.", href: "/conditions/hip-pain" },
      { title: "Chronic Pain", desc: "When imaging is clean but function is still off. The whole-body approach that finds what localized treatment misses.", href: "/conditions/chronic-pain" },
    ],
    cta: {
      kicker: "Ready to Perform at Your Best",
      heading: "Find out which muscles are limiting your performance and get them back online.",
      paragraph: "A focused 1-on-1 evaluation to identify the neuromuscular gaps between your current function and your actual potential.",
    },
  },
};
