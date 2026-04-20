import type { Metadata } from "next";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";

export const metadata: Metadata = {
  alternates: {
    canonical: "/conditions/strength-performance",
  },
  title: "Strength and Performance | Muscle Activation Techniques | Powell, Ohio",
  description: "MAT increases muscle contractile ability, which directly produces strength gains and better performance. Active adults in Powell, Dublin, and Columbus use MAT proactively to care for their neuromuscular system before pain becomes the reason.",
  openGraph: {
    title: "Strength and Performance | Ohio Muscle Activation",
    description: "You do not have to be in pain to benefit from MAT. Proactive neuromuscular care raises the stress threshold, increases contractile strength, and builds a body that performs consistently.",
    url: "https://ohiomuscleactivation.com/conditions/strength-performance",
  },
};

const patterns = [
  { title: "Strength Plateau", body: "When a muscle loses its neurological signal, it does not contract at full capacity. Training on top of inhibited muscles loads the compensators and reinforces the gap. MAT restores full contractile ability so that effort in the gym actually produces the results it should." },
  { title: "Athletic Performance", body: "Runners, cyclists, swimmers, and multi-sport athletes develop neuromuscular gaps from repetitive movement patterns. The body adapts around them. MAT identifies the inhibited muscles limiting economy, power output, and resilience." },
  { title: "Proactive Maintenance", body: "Active adults who train consistently know the difference between how they feel when everything is firing and when something is off. MAT keeps the system calibrated so that off days become less frequent and recovery between sessions improves." },
  { title: "Neuromuscular Optimization", body: "Performance is the sum of how well the neuromuscular system can produce, sequence, and sustain force. Closing the gaps between what is possible and what the current inhibition pattern allows is the most direct path to a higher level of function." },
];

const steps = [
  { num: "01", title: "Assess", body: "Manual muscle testing identifies which muscles are not contributing at full capacity, revealing the gaps between current function and potential." },
  { num: "02", title: "Activate", body: "Targeted hands-on input restores full neurological communication to the inhibited muscles. Contractile ability increases immediately." },
  { num: "03", title: "Build", body: "Over time, consistent MAT raises the neuromuscular stress threshold. The system becomes more resilient, strength gains compound, and the interval between sessions that the body maintains function grows longer." },
];

const faqs = [
  { q: "I am not injured. Can MAT still help me?", a: "Yes. Many of our most consistent clients have never had a significant injury. They use MAT to maintain full neuromuscular function, close gaps before they become problems, and ensure that the effort they put into training produces the results it should. You do not need a check engine light to maintain the car." },
  { q: "How does MAT produce strength gains?", a: "Strength is limited by how well a muscle can contract, not just by how much you train. When a muscle is neurologically inhibited, it cannot produce its full force output regardless of how much effort you apply. MAT restores full contractile ability. When all the muscles that should be contributing are actually contributing, strength increases measurably." },
  { q: "How often should I come in for proactive care?", a: "This varies by training volume, stress load, and individual response. Most active adults doing consistent MAT find that sessions become less frequent over time as the neuromuscular system's tolerance increases. The goal is a system that holds its function longer, not ongoing dependency." },
  { q: "How is MAT different from physical therapy or massage for wellness?", a: "Massage maintains soft tissue quality and reduces tension. Physical therapy addresses movement patterns and strength. MAT addresses the neurological signal that determines how well muscles can contract in the first place. They are complementary, but MAT works at a layer that the others do not reach." },
];

const sectionLabel: React.CSSProperties = { fontFamily: "var(--font-body)", fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--red)", marginBottom: 16 };
const bodyText: React.CSSProperties = { fontFamily: "var(--font-body)", fontSize: "0.97rem", color: "var(--muted)", lineHeight: 1.8, marginBottom: 16 };
const bookingHref = "https://oma-site-zeta.vercel.app/#booking";

export default function StrengthPerformance() {
  return (
    <>
      <Nav />
      <main style={{ paddingTop: 66 }}>
        <section style={{ padding: "80px 48px 72px", background: "#0d0d0d", borderBottom: "2px solid var(--red)", position: "relative", overflow: "hidden" }}>
          <div style={{ position: "absolute", top: 0, right: 0, width: "40%", height: "100%", background: "linear-gradient(to left, rgba(204,24,24,0.07), transparent)", zIndex: 0 }} />
          <div style={{ maxWidth: 1100, margin: "0 auto", position: "relative", zIndex: 1 }}>
            <a href="https://oma-site-zeta.vercel.app/#who-it-helps" style={{ fontFamily: "var(--font-body)", fontSize: "0.7rem", color: "var(--dim)", textDecoration: "none", letterSpacing: "0.08em", textTransform: "uppercase", display: "inline-flex", alignItems: "center", gap: 6, marginBottom: 28 }}>Back to Who It Helps</a>
            <p style={sectionLabel}>Condition</p>
            <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.4rem,5vw,4.2rem)", color: "var(--text)", lineHeight: 1.08, marginBottom: 24, maxWidth: 700 }}>Strength and Performance</h1>
            <p style={{ fontFamily: "var(--font-body)", fontSize: "1.1rem", color: "var(--muted)", lineHeight: 1.8, maxWidth: 620, marginBottom: 36 }}>
              You do not have to wait for the check engine light to care for your neuromuscular system. Active adults who use MAT proactively train harder, recover faster, and maintain function longer because the system driving their performance is actually working at full capacity.
            </p>
            <a href={bookingHref} style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "var(--red)", color: "var(--text)", fontFamily: "var(--font-display)", fontWeight: 900, fontSize: "0.82rem", padding: "15px 28px", textDecoration: "none", letterSpacing: "0.07em", textTransform: "uppercase" }}>Book a Muscle Check Diagnostic</a>
          </div>
        </section>

        <section style={{ padding: "88px 48px", background: "var(--surface)", borderTop: "1px solid var(--border)" }}>
          <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "60px 100px", alignItems: "start" }}>
            <div>
              <p style={sectionLabel}>Proactive Neuromuscular Care</p>
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.8rem,3vw,2.4rem)", color: "var(--text)", marginBottom: 20 }}>Most people come in when pain forces them to. The best time to come in is before it does.</h2>
              <p style={bodyText}>Every active adult accumulates neuromuscular gaps over time. Repetitive training patterns, accumulated stress, past injuries that never fully resolved, and the simple demands of a busy life all affect the system. Most people adapt around these gaps without knowing they exist.</p>
              <p style={bodyText}>MAT identifies those gaps before they become pain. When inhibited muscles are reactivated, strength increases, movement quality improves, and the body is better equipped to handle the loads placed on it. Performance goes up not because of additional training but because the system driving it is finally working at its full potential.</p>
              <p style={{ ...bodyText, marginBottom: 0 }}>Clients who commit to consistent MAT describe a cumulative effect. Each session builds on the last. Over time the neuromuscular stress threshold rises, the system tolerates more before dysfunction sets in, and the interval at which function holds between sessions grows longer.</p>
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
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.8rem,3vw,2.4rem)", color: "var(--text)", marginBottom: 20 }}>Restore full contractile ability. Raise the threshold. Build toward lasting function.</h2>
              <p style={bodyText}>The goal for performance clients is not just fixing what is inhibited today. It is building a neuromuscular system that is progressively more capable of handling stress, recovering from training, and maintaining function under load over time.</p>
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

        <section style={{ padding: "88px 48px", background: "var(--surface)", borderTop: "1px solid var(--border)" }}>
          <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "60px 100px", alignItems: "center" }}>
            <div style={{ padding: "32px", background: "var(--bg)", border: "1px solid var(--border)", borderLeft: "3px solid var(--red)" }}>
              <p style={{ fontFamily: "var(--font-body)", fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--red)", marginBottom: 16 }}>The Threshold Effect</p>
              <p style={{ fontFamily: "var(--font-body)", fontSize: "0.97rem", color: "var(--muted)", lineHeight: 1.8, marginBottom: 16 }}>Think of the neuromuscular system as having a stress tolerance capacity. Every training session, stressful week, and accumulated demand draws from that capacity. When the demand exceeds it, muscles inhibit and function degrades.</p>
              <p style={{ fontFamily: "var(--font-body)", fontSize: "0.97rem", color: "var(--muted)", lineHeight: 1.8 }}>Consistent MAT raises the capacity itself. You get stronger not just in the muscles being reactivated, but in the system's overall ability to sustain function under load. Over time you train harder, recover faster, and stay in the window of peak function for longer between sessions.</p>
            </div>
            <div>
              <p style={sectionLabel}>MAT as Part of Your Routine</p>
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.6rem,2.8vw,2.2rem)", color: "var(--text)", marginBottom: 20 }}>The highest performers treat their neuromuscular system as an investment, not an emergency fund.</h2>
              <p style={bodyText}>The same way you build mobility work, soft tissue care, and recovery protocols into your routine, MAT fits as the layer that ensures the muscles driving everything else are actually contributing at full capacity.</p>
              <p style={{ ...bodyText, marginBottom: 28 }}>Clients who use MAT consistently describe it as the piece that makes everything else work better. Lifts improve. Runs feel easier. Recovery between sessions shortens. The body simply functions the way it is supposed to when the neurological foundation is intact.</p>
              <a href={bookingHref} style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "var(--red)", color: "var(--text)", fontFamily: "var(--font-display)", fontWeight: 900, fontSize: "0.8rem", padding: "13px 24px", textDecoration: "none", letterSpacing: "0.07em", textTransform: "uppercase" }}>Book a Diagnostic</a>
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
                { title: "Golf Performance", desc: "Restore the neuromuscular foundation that drives rotation, sequencing, and consistency in the swing.", href: "/conditions/golf-performance" },
                { title: "Hip Pain", desc: "Chronic hip pain in active adults that has not responded to stretching, therapy, or rest.", href: "/conditions/hip-pain" },
                { title: "Chronic Pain", desc: "When imaging is clean but function is still off. The whole-body approach that finds what localized treatment misses.", href: "/conditions/chronic-pain" },
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
            <p style={sectionLabel}>Ready to Perform at Your Best</p>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.8rem,3vw,2.4rem)", color: "var(--text)", marginBottom: 20 }}>Find out which muscles are limiting your performance and get them back online.</h2>
            <p style={{ fontFamily: "var(--font-body)", fontSize: "0.97rem", color: "var(--muted)", lineHeight: 1.75, marginBottom: 32 }}>A focused 1-on-1 evaluation to identify the neuromuscular gaps between your current function and your actual potential.</p>
            <a href={bookingHref} style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "var(--red)", color: "var(--text)", fontFamily: "var(--font-display)", fontWeight: 900, fontSize: "0.82rem", padding: "15px 30px", textDecoration: "none", letterSpacing: "0.07em", textTransform: "uppercase" }}>Book a Muscle Check Diagnostic</a>
            <p style={{ fontFamily: "var(--font-body)", fontSize: "0.75rem", color: "var(--dim)", marginTop: 14 }}>Powell, Ohio · (614) 946-9071 · By appointment only</p>
          </div>
        </section>
      </main>
      <Footer showCTA={false} />
    </>
  );
}
