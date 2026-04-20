import type { Metadata } from "next";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";

export const metadata: Metadata = {
  alternates: {
    canonical: "/conditions/neck-shoulder-tension",
  },
  title: "Neck and Shoulder Tension | Muscle Activation Techniques | Powell, Ohio",
  description: "Chronic neck and shoulder tension that keeps coming back after massage or stretching is often a neurological problem. Ohio Muscle Activation uses MAT to identify which muscles went offline and restore the signal. Serving Powell, Dublin and Columbus.",
  openGraph: {
    title: "Neck and Shoulder Tension | Ohio Muscle Activation",
    description: "Chronic neck and shoulder tension that returns despite treatment is often a neurological problem, not a structural one. MAT restores the signal.",
    url: "https://ohiomuscleactivation.com/conditions/neck-shoulder-tension",
  },
};

const patterns = [
  { title: "Desk Workers", body: "Extended sitting and screen time neurologically inhibit the deep cervical stabilizers and serratus anterior. The traps and levator scapulae compensate, becoming chronically overloaded. No amount of stretching fixes the source because the source is a missing signal, not a tight muscle." },
  { title: "Overhead Athletes", body: "Swimmers, tennis players, and pitchers who develop shoulder impingement or rotator cuff irritation often have inhibited rotator cuff muscles driving the problem. The surrounding muscles overload to compensate, creating pain and limiting range." },
  { title: "Post-Surgical Shoulder", body: "After rotator cuff repair or shoulder reconstruction, the muscles coordinating movement often remain neurologically inhibited even after the tissue heals. The result is a shoulder that feels weak or unstable despite completing rehabilitation." },
  { title: "Tension Headaches", body: "Many chronic tension headaches trace back to inhibited deep neck flexors. When those muscles lose their signal, the posterior neck muscles overload. The tension builds upward. Treating the headache site gives temporary relief but doesn't address where the overload originates." },
];

const steps = [
  { num: "01", title: "Assess", body: "Precise manual muscle testing identifies which neck, shoulder, and upper back muscles have lost their neurological signal, separating the source from the areas compensating around it." },
  { num: "02", title: "Activate", body: "Targeted hands-on input restores the neurological connection to the inhibited muscles. Once those muscles receive their signal again, the compensators no longer need to overwork." },
  { num: "03", title: "Verify", body: "We retest immediately. Reduced tension, improved range of motion, and a lighter feeling in the neck and shoulders are typically felt in the same session." },
];

const faqs = [
  { q: "Why does my neck tension always come back after massage?", a: "Massage relieves the muscles that are overloaded. But if those muscles are overloaded because another muscle stopped firing, the tension will return once you resume normal activity. MAT addresses the muscle that lost its signal so the compensators no longer need to carry the extra load." },
  { q: "Is my neck tension related to my posture?", a: "Posture is often a symptom, not a cause. When the muscles that should be holding you upright lose their signal, the body reorganizes around the dysfunction. Improving posture without restoring the neurological signal is difficult to sustain because the system keeps defaulting back to what it can manage." },
  { q: "Can MAT help with tension headaches?", a: "Many tension headaches trace back to neuromuscular dysfunction in the neck. When the deep neck flexors are inhibited, the posterior neck muscles become chronically overloaded. MAT identifies which muscles are offline and restores them, often reducing the frequency and intensity of tension headaches." },
  { q: "How is this different from chiropractic care?", a: "Chiropractic addresses joint alignment and mobility. MAT addresses the neurological signal to the muscles surrounding those joints. When muscles lose their signal, they cannot provide the stability a joint needs. The adjustment may not hold long-term if the muscular support system is not functioning properly. Many chiropractors refer clients to MAT for exactly this reason." },
];

const sectionLabel: React.CSSProperties = { fontFamily: "var(--font-body)", fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--red)", marginBottom: 16 };
const bodyText: React.CSSProperties = { fontFamily: "var(--font-body)", fontSize: "0.97rem", color: "var(--muted)", lineHeight: 1.8, marginBottom: 16 };
const bookingHref = "https://oma-site-zeta.vercel.app/#booking";

export default function NeckShoulderTension() {
  return (
    <>
      <Nav />
      <main style={{ paddingTop: 66 }}>
        <section style={{ padding: "80px 48px 72px", background: "#0d0d0d", borderBottom: "2px solid var(--red)", position: "relative", overflow: "hidden" }}>
          <div style={{ position: "absolute", top: 0, right: 0, width: "40%", height: "100%", background: "linear-gradient(to left, rgba(204,24,24,0.07), transparent)", zIndex: 0 }} />
          <div style={{ maxWidth: 1100, margin: "0 auto", position: "relative", zIndex: 1 }}>
            <a href="https://oma-site-zeta.vercel.app/#who-it-helps" style={{ fontFamily: "var(--font-body)", fontSize: "0.7rem", color: "var(--dim)", textDecoration: "none", letterSpacing: "0.08em", textTransform: "uppercase", display: "inline-flex", alignItems: "center", gap: 6, marginBottom: 28 }}>Back to Who It Helps</a>
            <p style={sectionLabel}>Condition</p>
            <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.4rem,5vw,4.2rem)", color: "var(--text)", lineHeight: 1.08, marginBottom: 24, maxWidth: 700 }}>Neck and Shoulder Tension</h1>
            <p style={{ fontFamily: "var(--font-body)", fontSize: "1.1rem", color: "var(--muted)", lineHeight: 1.8, maxWidth: 620, marginBottom: 36 }}>
              Chronic neck and shoulder tension that returns despite massage, stretching, or chiropractic care is almost always a neurological problem. The muscles you feel are not the source. They are compensating for muscles that stopped doing their job.
            </p>
            <a href={bookingHref} style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "var(--red)", color: "var(--text)", fontFamily: "var(--font-display)", fontWeight: 900, fontSize: "0.82rem", padding: "15px 28px", textDecoration: "none", letterSpacing: "0.07em", textTransform: "uppercase" }}>Book a Muscle Check Diagnostic</a>
          </div>
        </section>

        <section style={{ padding: "88px 48px", background: "var(--surface)", borderTop: "1px solid var(--border)" }}>
          <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "60px 100px", alignItems: "start" }}>
            <div>
              <p style={sectionLabel}>Why It Keeps Returning</p>
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.8rem,3vw,2.4rem)", color: "var(--text)", marginBottom: 20 }}>The muscles you feel are not the problem. They are covering for it.</h2>
              <p style={bodyText}>When a muscle loses its neurological signal, surrounding muscles pick up the load. In the neck and shoulders, the deep stabilizers frequently go offline first. The more superficial muscles take over. They were not designed to work that hard continuously, so they become chronically tight and painful.</p>
              <p style={bodyText}>Massage relieves the overloaded muscles temporarily. But until the deep stabilizers receive their signal again, the surface muscles have nowhere to offload. The tension rebuilds within days.</p>
              <p style={{ ...bodyText, marginBottom: 28 }}>MAT identifies exactly which muscles lost their signal and restores it directly. When the deep stabilizers come back online, the compensating muscles finally get to rest.</p>
              <div style={{ padding: "18px 22px", borderLeft: "3px solid var(--red)", background: "var(--red-dim)" }}>
                <p style={{ fontFamily: "var(--font-body)", fontSize: "0.9rem", color: "var(--text)", fontStyle: "italic", lineHeight: 1.65 }}>"Cameron is professional and very knowledgeable. I have seen great value in my sessions with him starting with recovery from a golf injury to building and maintaining muscle strength. I am glad I found him."</p>
                <p style={{ fontFamily: "var(--font-body)", fontSize: "0.72rem", color: "var(--red)", fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase", marginTop: 10 }}>Jack R. · Golfer · Client since 2018</p>
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
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.8rem,3vw,2.4rem)", color: "var(--text)", marginBottom: 20 }}>Restore the signal. Let the compensators rest.</h2>
              <p style={bodyText}>Most neck and shoulder treatment focuses on relaxing the tight muscles. MAT focuses on reactivating the muscles that should have been working all along. When the deep stabilizers come back online, the compensators naturally decompress and the chronic tension pattern resolves.</p>
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
                { title: "Chronic Pain", desc: "Imaging looks clean but movement still feels wrong. The neurological gap most providers miss.", href: "/conditions/chronic-pain" },
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
            <p style={sectionLabel}>Ready to Find Answers</p>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.8rem,3vw,2.4rem)", color: "var(--text)", marginBottom: 20 }}>Find out which muscles went offline and get them back.</h2>
            <p style={{ fontFamily: "var(--font-body)", fontSize: "0.97rem", color: "var(--muted)", lineHeight: 1.75, marginBottom: 32 }}>A focused 1-on-1 evaluation to identify exactly which muscles have lost their signal and what that is causing in your neck and shoulders.</p>
            <a href={bookingHref} style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "var(--red)", color: "var(--text)", fontFamily: "var(--font-display)", fontWeight: 900, fontSize: "0.82rem", padding: "15px 30px", textDecoration: "none", letterSpacing: "0.07em", textTransform: "uppercase" }}>Book a Muscle Check Diagnostic</a>
            <p style={{ fontFamily: "var(--font-body)", fontSize: "0.75rem", color: "var(--dim)", marginTop: 14 }}>Powell, Ohio · (614) 946-9071 · By appointment only</p>
          </div>
        </section>
      </main>
      <Footer showCTA={false} />
    </>
  );
}
