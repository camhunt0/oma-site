"use client";
import Link from "next/link";

export default function WhoItHelps() {
  const segments = [
    { icon: "⛳", label: "Golfers", headline: "Your swing isn't limited by flexibility. It's limited by muscles that have lost their signal.", detail: "For players restricted through the backswing, struggling to clear the hips, or wanting a body that can support a better swing. Rotation problems are often neuromuscular, not structural.", href: "/conditions/golf-performance" },
    { icon: "🏃", label: "Runners", headline: "Tight muscles are compensating for muscles that stopped firing.", detail: "Helpful for recurring hip, knee, IT band, and low-back issues when mobility and strength work haven't fully solved the pattern. MAT finds which muscles went offline.", href: "/conditions/hip-pain" },
    { icon: "💼", label: "Desk Workers", headline: "Your neck pain keeps coming back because the signal is missing.", detail: "Built for the person whose neck, shoulders, or lower back tighten up no matter how often they stretch. The compensating muscles keep getting loaded because the real muscles aren't firing.", href: "/conditions/neck-shoulder-tension" },
    { icon: "🏥", label: "Post-Surgery", headline: "We restore the signal to muscles your body shut down after surgery.", detail: "After injury or surgery, the nervous system inhibits muscles around the area. MAT identifies which ones lost their signal and gets them communicating again.", href: "/conditions/post-surgical-recovery" },
    { icon: "🏋️", label: "Active Adults", headline: "Keep lifting, training, golfing without constantly managing flare-ups.", detail: "For people who want to stay active and strong without recurring tightness becoming the limiting factor. Neuromuscular gaps catch up with everyone eventually.", href: "/conditions/strength-performance" },
    { icon: "🎯", label: "Told 'Everything Looks Fine'", headline: "Imaging shows structure. MAT looks at the signal.", detail: "A muscle can test clean on an MRI and still not communicate properly with the brain. That neurological gap is exactly what MAT addresses, which most imaging misses.", href: "/conditions/chronic-pain" },
  ];

  return (
    <section id="who-it-helps" style={{ padding: "100px 48px", background: "var(--bg)", borderTop: "1px solid var(--border)" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ maxWidth: 600, marginBottom: 56 }}>
          <p style={{ fontFamily: "var(--font-body)", fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--red-text)", marginBottom: 16 }}>Who This Is For</p>
          <h2 style={{ fontSize: "clamp(1.8rem,3vw,2.6rem)", color: "var(--text)", marginBottom: 16 }}>People who are done guessing and ready for a neurological answer.</h2>
          <p style={{ fontFamily: "var(--font-body)", fontSize: "0.97rem", color: "var(--muted)", lineHeight: 1.75 }}>Ohio Muscle Activation is often the next step for clients who have already done a lot of the right things but still can't get lasting change.</p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 2, marginBottom: 2 }}>
          {segments.map((s, i) => (
            <Link
              key={i}
              href={s.href}
              style={{ padding: "32px 28px", background: "var(--surface)", border: "1px solid var(--border)", display: "block", textDecoration: "none", color: "inherit", transition: "border-color 0.2s" }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = "var(--red)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = "var(--border)"; }}
            >
              <div style={{ fontSize: "1.4rem", marginBottom: 12 }}>{s.icon}</div>
              <p style={{ fontFamily: "var(--font-body)", fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--red-text)", marginBottom: 10 }}>{s.label}</p>
              <h3 style={{ fontSize: "0.95rem", color: "var(--text)", marginBottom: 10, lineHeight: 1.3 }}>{s.headline}</h3>
              <p style={{ fontFamily: "var(--font-body)", fontSize: "0.82rem", color: "var(--muted)", lineHeight: 1.65, marginBottom: 14 }}>{s.detail}</p>
              <span style={{ fontFamily: "var(--font-body)", fontSize: "0.72rem", color: "var(--red-text)", fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase" }}>Learn more →</span>
            </Link>
          ))}
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 2 }}>
          <div style={{ padding: "32px 36px", background: "var(--surface)", border: "1px solid var(--border)", borderLeft: "3px solid var(--red)", display: "flex", flexDirection: "column", justifyContent: "center", gap: 20 }}>
            <div>
              <p style={{ fontFamily: "var(--font-body)", fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--red-text)", marginBottom: 12 }}>Arnold Sports Festival</p>
              <p style={{ fontFamily: "var(--font-display)", fontSize: "2.2rem", fontWeight: 900, color: "var(--text)", lineHeight: 1.05, marginBottom: 16 }}>50+<br /><span style={{ fontSize: "0.85rem", letterSpacing: "0.04em", fontWeight: 900 }}>Elite Athletes</span></p>
              <p style={{ fontFamily: "var(--font-body)", fontSize: "0.88rem", color: "var(--muted)", lineHeight: 1.75 }}>
                Cameron worked with world-class XPC Powerlifting competitors from Sweden, British Columbia, and across the US. Every athlete tested had neuromuscular weaknesses limiting their movement. Multiple athletes hit PRs on their lifts the same day.
              </p>
            </div>
            <p style={{ fontFamily: "var(--font-body)", fontSize: "0.78rem", color: "var(--dim)", lineHeight: 1.6 }}>
              The Arnold Sports Festival draws 22,000 athletes from more than 80 nations competing in 85 sports and events.
            </p>
          </div>
          <div style={{ background: "var(--surface2)", border: "1px solid var(--border)", overflow: "hidden" }}>
            <video controls playsInline preload="none" poster="/arnold-poster.jpg" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", minHeight: 280 }}>
              <source src="/arnold-testimonial-540.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </section>
  );
}
