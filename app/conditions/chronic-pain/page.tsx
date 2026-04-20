import type { Metadata } from "next";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";

export const metadata: Metadata = {
  alternates: {
    canonical: "/conditions/chronic-pain",
  },
  title: "Chronic Pain | Muscle Activation Techniques | Powell, Ohio",
  description: "If your imaging is clean but you are still in pain, that is a neurological problem. Ohio Muscle Activation evaluates the whole body to find where the system broke down and restore function. Serving Powell, Dublin and Columbus.",
  openGraph: {
    title: "Chronic Pain | Ohio Muscle Activation",
    description: "Clean imaging does not mean the nervous system is working properly. MAT evaluates the whole body, restores function, and builds the system's tolerance to daily stress over time.",
    url: "https://ohiomuscleactivation.com/conditions/chronic-pain",
  },
};

const patterns = [
  { title: "Clean Imaging, Real Pain", body: "An MRI shows structure. It does not show whether a muscle is receiving its neurological signal. A muscle can look completely normal on imaging and still not contract properly. This is one of the most common and most misunderstood causes of chronic pain." },
  { title: "Recurring Patterns", body: "Pain that responds to treatment and then returns is almost always a sign that the source was never addressed. The treatment relieved the compensating area, but the muscle that triggered the compensation is still offline. The pattern rebuilds." },
  { title: "Multiple Pain Sites", body: "When pain moves around or exists in several areas simultaneously, it often reflects a systemic neuromuscular issue. The body is compensating on multiple fronts. MAT evaluates the full system to find where the original breakdown occurred." },
  { title: "Stress and Trauma", body: "Physical stress, injury, and emotional trauma all affect the nervous system's ability to maintain muscle function. When accumulated stress exceeds the system's tolerance threshold, muscles begin to inhibit. MAT identifies where that shutdown occurred and restores it." },
];

const steps = [
  { num: "01", title: "Assess the Whole System", body: "Unlike approaches that treat where it hurts, MAT evaluates the entire neuromuscular system. A shoulder problem may trace to an inhibited hip. A low back issue may trace to a dormant glute. We find the origin, not just the site." },
  { num: "02", title: "Restore the Signal", body: "Targeted hands-on input restores neurological communication to the inhibited muscles. When the source muscles come back online, the compensators decompress and the pain pattern begins to resolve." },
  { num: "03", title: "Build the Threshold", body: "Over time, consistent MAT raises the neuromuscular system's capacity to tolerate stress. Each session builds on the last. The system becomes more resilient, and the set-point for dysfunction gets higher." },
];

const faqs = [
  { q: "Why does my pain move around?", a: "Pain that moves between sites often reflects a shifting compensation pattern. As one area gets overloaded and the body tries to protect it, other muscles take over. The original inhibited muscle is driving the whole sequence. MAT identifies the origin of the cascade rather than chasing the symptoms." },
  { q: "Can stress cause muscle inhibition?", a: "Yes. The nervous system does not distinguish between physical stress, emotional stress, and overuse. They all draw from the same capacity. When accumulated stress exceeds the system's tolerance threshold, muscles begin to inhibit as a protective response. This is why many people notice that chronic pain worsens during stressful periods." },
  { q: "Will this actually hold, or will I need constant treatment?", a: "MAT is designed to produce lasting change, not ongoing dependency. In the early phase, more frequent sessions build the foundation. Over time, the neuromuscular system's tolerance increases, sessions become less frequent, and the changes hold longer. The goal is a body that functions better on its own, not one that requires constant maintenance." },
  { q: "I have tried everything. Why would MAT be different?", a: "Most chronic pain treatment addresses symptoms at the site of pain. MAT addresses the neurological source, evaluates the full system, and restores function at the root. The comprehensive whole-body approach finds things that localized treatment misses. It is not uncommon for clients to experience meaningful change in the first session after years of unsuccessful treatment elsewhere." },
];

const sectionLabel: React.CSSProperties = { fontFamily: "var(--font-body)", fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--red)", marginBottom: 16 };
const bodyText: React.CSSProperties = { fontFamily: "var(--font-body)", fontSize: "0.97rem", color: "var(--muted)", lineHeight: 1.8, marginBottom: 16 };
const bookingHref = "https://oma-site-zeta.vercel.app/#booking";

export default function ChronicPain() {
  return (
    <>
      <Nav />
      <main style={{ paddingTop: 66 }}>
        <section style={{ padding: "80px 48px 72px", background: "#0d0d0d", borderBottom: "2px solid var(--red)", position: "relative", overflow: "hidden" }}>
          <div style={{ position: "absolute", top: 0, right: 0, width: "40%", height: "100%", background: "linear-gradient(to left, rgba(204,24,24,0.07), transparent)", zIndex: 0 }} />
          <div style={{ maxWidth: 1100, margin: "0 auto", position: "relative", zIndex: 1 }}>
            <a href="https://oma-site-zeta.vercel.app/#who-it-helps" style={{ fontFamily: "var(--font-body)", fontSize: "0.7rem", color: "var(--dim)", textDecoration: "none", letterSpacing: "0.08em", textTransform: "uppercase", display: "inline-flex", alignItems: "center", gap: 6, marginBottom: 28 }}>Back to Who It Helps</a>
            <p style={sectionLabel}>Condition</p>
            <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.4rem,5vw,4.2rem)", color: "var(--text)", lineHeight: 1.08, marginBottom: 24, maxWidth: 700 }}>Chronic Pain</h1>
            <p style={{ fontFamily: "var(--font-body)", fontSize: "1.1rem", color: "var(--muted)", lineHeight: 1.8, maxWidth: 620, marginBottom: 36 }}>
              If your imaging is clean but you are still in pain, you are not imagining it. You have a neurological problem that imaging cannot detect. MAT evaluates the entire neuromuscular system, not just where it hurts, to find where the breakdown actually occurred.
            </p>
            <a href={bookingHref} style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "var(--red)", color: "var(--text)", fontFamily: "var(--font-display)", fontWeight: 900, fontSize: "0.82rem", padding: "15px 28px", textDecoration: "none", letterSpacing: "0.07em", textTransform: "uppercase" }}>Book a Muscle Check Diagnostic</a>
          </div>
        </section>

        <section style={{ padding: "88px 48px", background: "var(--surface)", borderTop: "1px solid var(--border)" }}>
          <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "60px 100px", alignItems: "start" }}>
            <div>
              <p style={sectionLabel}>A Different Approach</p>
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.8rem,3vw,2.4rem)", color: "var(--text)", marginBottom: 20 }}>Most providers treat where it hurts. MAT evaluates where the system broke down.</h2>
              <p style={bodyText}>Chronic pain rarely originates at the site of pain. The area that hurts is usually compensating for a muscle that lost its signal somewhere else in the body. Treating the compensation site gives temporary relief. The source remains unaddressed.</p>
              <p style={bodyText}>MAT takes a comprehensive whole-body approach. Every assessment evaluates the full neuromuscular system, not just the complaint area. A shoulder problem may trace to an inhibited hip. A low back issue may trace to a dormant glute. The connection is not always obvious, which is why it gets missed.</p>
              <p style={bodyText}>Stress, trauma, and overuse all create neuromuscular dysfunction by pushing the system past its tolerance threshold. Physical injury, repetitive movement patterns, and accumulated life stress all affect the same nervous system. MAT restores function at the root and, over time, raises the threshold at which dysfunction occurs.</p>
              <div style={{ padding: "20px 24px", background: "var(--bg)", border: "1px solid var(--border)", borderLeft: "3px solid var(--red)", marginTop: 8 }}>
                <p style={{ fontFamily: "var(--font-body)", fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--red)", marginBottom: 10 }}>The Stress Threshold</p>
                <p style={{ fontFamily: "var(--font-body)", fontSize: "0.88rem", color: "var(--muted)", lineHeight: 1.75 }}>The neuromuscular system has a capacity for stress. When accumulated stress exceeds that capacity, muscles inhibit. MAT does not just address the current inhibition. Over time, consistent sessions raise the set-point itself. The system becomes more resilient. Flare-ups become less frequent. The changes hold longer between sessions.</p>
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
              {patterns.map((p, i) => (
                <div key={i} style={{ padding: "24px 28px", background: "var(--bg)", border: "1px solid var(--border)", borderLeft: i === 0 ? "3px solid var(--red)" : "1px solid var(--border)" }}>
                  <p style={{ fontFamily: "var(--font-display)", fontSize: "0.9rem", fontWeight: 900, color: "var(--text)", marginBottom: 8, textTransform: "uppercase", letterSpacing: "0.02em" }}>{p.title}</p>
                  <p style={{ fontFamily: "var(--font-body)", fontSize: "0.84rem", color: "var(--muted)", lineHeight: 1.65 }}>{p.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section style={{ padding: "88px 48px", background: "var(--bg)", borderTop: "1px solid var(--border)" }}>
          <div style={{ maxWidth: 1100, margin: "0 auto" }}>
            <div style={{ maxWidth: 680, marginBottom: 52 }}>
              <p style={sectionLabel}>How MAT Addresses It</p>
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.8rem,3vw,2.4rem)", color: "var(--text)", marginBottom: 20 }}>Find the origin. Restore the signal. Build the capacity.</h2>
              <p style={bodyText}>The three-step process goes deeper than symptom management. It identifies the source of the dysfunction, restores neurological communication, and over time builds a more resilient system that is better equipped to handle the demands placed on it.</p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 2 }}>
              {steps.map((s, i) => (
                <div key={i} style={{ padding: "36px 32px", background: i === 1 ? "var(--surface2)" : "var(--surface)", border: "1px solid var(--border)", borderTop: i === 1 ? "3px solid var(--red)" : "1px solid var(--border)" }}>
                  <p style={{ fontFamily: "var(--font-display)", fontSize: "3rem", fontWeight: 900, color: "rgba(204,24,24,0.15)", lineHeight: 1, marginBottom: 20 }}>{s.num}</p>
                  <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.1rem", color: "var(--text)", marginBottom: 12 }}>{s.title}</h3>
                  <p style={{ fontFamily: "var(--font-body)", fontSize: "0.88rem", color: "var(--muted)", lineHeight: 1.7 }}>{s.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section style={{ padding: "88px 48px", background: "var(--bg)", borderTop: "1px solid var(--border)" }}>
          <div style={{ maxWidth: 720, margin: "0 auto" }}>
            <p style={sectionLabel}>Common Questions</p>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.8rem,3vw,2.4rem)", color: "var(--text)", marginBottom: 48 }}>Frequently Asked</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
              {faqs.map((faq, i) => (
                <div key={i} style={{ padding: "28px 32px", background: "var(--surface)", border: "1px solid var(--border)" }}>
                  <p style={{ fontFamily: "var(--font-display)", fontSize: "0.95rem", color: "var(--text)", marginBottom: 12, fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.01em" }}>{faq.q}</p>
                  <p style={{ fontFamily: "var(--font-body)", fontSize: "0.9rem", color: "var(--muted)", lineHeight: 1.75 }}>{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section style={{ padding: "88px 48px", background: "var(--surface)", borderTop: "1px solid var(--border)" }}>
          <div style={{ maxWidth: 1100, margin: "0 auto" }}>
            <p style={sectionLabel}>Related Conditions</p>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.8rem,3vw,2.4rem)", color: "var(--text)", marginBottom: 36 }}>Other areas we work with</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 2 }}>
              {[
                { title: "Post-Surgical Recovery", desc: "Muscles that shut down after surgery and have not come back online despite PT and rehabilitation.", href: "/conditions/post-surgical-recovery" },
                { title: "Hip Pain", desc: "Chronic hip pain in golfers, runners, and active adults that has not responded to stretching or therapy.", href: "/conditions/hip-pain" },
                { title: "Neck and Shoulder Tension", desc: "Recurring tension that returns despite massage, chiropractic, or postural corrections.", href: "/conditions/neck-shoulder-tension" },
              ].map((c, i) => (
                <div key={i} style={{ padding: "28px", background: "var(--bg)", border: "1px solid var(--border)", borderTop: "2px solid var(--red)" }}>
                  <h3 style={{ fontFamily: "var(--font-display)", fontSize: "0.95rem", color: "var(--text)", marginBottom: 10 }}>{c.title}</h3>
                  <p style={{ fontFamily: "var(--font-body)", fontSize: "0.83rem", color: "var(--muted)", lineHeight: 1.65, marginBottom: 14 }}>{c.desc}</p>
                  <a href={c.href} style={{ fontFamily: "var(--font-body)", fontSize: "0.75rem", color: "var(--red)", textDecoration: "none", fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase" }}>Learn more</a>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section style={{ padding: "88px 48px", background: "#0d0d0d", borderTop: "2px solid var(--red)", textAlign: "center" }}>
          <div style={{ maxWidth: 560, margin: "0 auto" }}>
            <p style={sectionLabel}>Ready for a Real Answer</p>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.8rem,3vw,2.4rem)", color: "var(--text)", marginBottom: 20 }}>Find out where the system broke down and what it will take to fix it.</h2>
            <p style={{ fontFamily: "var(--font-body)", fontSize: "0.97rem", color: "var(--muted)", lineHeight: 1.75, marginBottom: 32 }}>A comprehensive 1-on-1 evaluation that looks at the full neuromuscular system, not just where it hurts.</p>
            <a href={bookingHref} style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "var(--red)", color: "var(--text)", fontFamily: "var(--font-display)", fontWeight: 900, fontSize: "0.82rem", padding: "15px 30px", textDecoration: "none", letterSpacing: "0.07em", textTransform: "uppercase" }}>Book a Muscle Check Diagnostic</a>
            <p style={{ fontFamily: "var(--font-body)", fontSize: "0.75rem", color: "var(--dim)", marginTop: 14 }}>Powell, Ohio · (614) 946-9071 · By appointment only</p>
          </div>
        </section>
      </main>
      <Footer showCTA={false} />
    </>
  );
}
