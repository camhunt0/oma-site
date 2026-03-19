import type { Metadata } from "next";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";

export const metadata: Metadata = {
  title: "Post-Surgical Recovery | Muscle Activation Techniques | Powell, Ohio",
  description: "Muscles shut down after surgery and do not always come back on their own. Ohio Muscle Activation uses MAT to restore the neurological signal to muscles that stopped firing after injury or surgery. Serving Powell, Dublin and Columbus.",
  openGraph: {
    title: "Post-Surgical Recovery | Ohio Muscle Activation",
    description: "Surgery fixes the structure. MAT restores the neurological signal so muscles can fire again.",
    url: "https://ohiomuscleactivation.com/conditions/post-surgical-recovery",
  },
};

const surgeries = [
  { title: "Rotator Cuff Repair", body: "Shoulder muscles that coordinated movement before surgery often remain inhibited, causing the arm to feel weak or unstable even after the tissue has healed." },
  { title: "Hip or Knee Replacement", body: "The muscles stabilizing the new joint need their neurological signal restored before they can provide the support the joint requires for pain-free movement." },
  { title: "ACL Reconstruction", body: "The quadriceps and surrounding musculature frequently experience significant inhibition. Restoring their signal is essential for full return to sport and activity." },
  { title: "Spinal Surgery", body: "Core and spinal muscles that were cut through or retracted during surgery often remain inhibited long after the incision heals, causing persistent instability." },
];

const steps = [
  { num: "01", title: "Assess", body: "Precise manual muscle testing identifies exactly which muscles lost their neurological signal during injury or surgery and have not come back online." },
  { num: "02", title: "Activate", body: "Targeted hands-on input restores the neurological connection. The muscle receives its signal again and begins contracting properly." },
  { num: "03", title: "Verify", body: "We retest immediately. Improved range of motion, reduced guarding, and better stability felt in the same session." },
];

const faqs = [
  { q: "How soon after surgery can I start MAT?", a: "This depends on your surgeon clearance and the nature of the procedure. MAT is gentle and non-invasive. It does not manipulate joints or force range of motion. Many clients begin working with us while still in PT, using MAT to complement their rehabilitation." },
  { q: "Will MAT interfere with my physical therapy?", a: "No. MAT is designed to complement your existing care. We work alongside your PT, not against it. Many physical therapists refer clients to MAT specifically because they recognize the neuromuscular gap that standard rehab does not address." },
  { q: "What if I had surgery months or years ago and still do not feel right?", a: "This is one of the most common situations we see. Muscle inhibition does not resolve on its own over time. It persists until the neurological signal is specifically restored. It is never too late to address the root cause." },
  { q: "What surgeries respond well to MAT?", a: "Rotator cuff repair, hip replacement, knee replacement, ACL reconstruction, spinal surgery, and any procedure involving joint stabilization. If muscles were cut through, repaired, or immobilized, they likely need neuromuscular reactivation." },
];

const sectionLabel: React.CSSProperties = { fontFamily: "var(--font-body)", fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--red)", marginBottom: 16 };
const bodyText: React.CSSProperties = { fontFamily: "var(--font-body)", fontSize: "0.97rem", color: "var(--muted)", lineHeight: 1.8, marginBottom: 16 };
const bookingHref = "https://oma-site-zeta.vercel.app/#booking";

export default function PostSurgicalRecovery() {
  return (
    <>
      <Nav />
      <main style={{ paddingTop: 66 }}>
        <section style={{ padding: "80px 48px 72px", background: "#0d0d0d", borderBottom: "2px solid var(--red)", position: "relative", overflow: "hidden" }}>
          <div style={{ position: "absolute", top: 0, right: 0, width: "40%", height: "100%", background: "linear-gradient(to left, rgba(204,24,24,0.07), transparent)", zIndex: 0 }} />
          <div style={{ maxWidth: 1100, margin: "0 auto", position: "relative", zIndex: 1 }}>
            <a href="https://oma-site-zeta.vercel.app/#who-it-helps" style={{ fontFamily: "var(--font-body)", fontSize: "0.7rem", color: "var(--dim)", textDecoration: "none", letterSpacing: "0.08em", textTransform: "uppercase", display: "inline-flex", alignItems: "center", gap: 6, marginBottom: 28 }}>Back to Who It Helps</a>
            <p style={sectionLabel}>Condition</p>
            <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.4rem,5vw,4.2rem)", color: "var(--text)", lineHeight: 1.08, marginBottom: 24, maxWidth: 700 }}>Post-Surgical Recovery</h1>
            <p style={{ fontFamily: "var(--font-body)", fontSize: "1.1rem", color: "var(--muted)", lineHeight: 1.8, maxWidth: 620, marginBottom: 36 }}>Surgery fixes the structure. But muscles that shut down during injury or immobilization do not always come back on their own. That is why so many people plateau in PT. The structural repair is complete, but the neurological signal has not been restored.</p>
            <a href={bookingHref} style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "var(--red)", color: "var(--text)", fontFamily: "var(--font-display)", fontWeight: 900, fontSize: "0.82rem", padding: "15px 28px", textDecoration: "none", letterSpacing: "0.07em", textTransform: "uppercase" }}>Book a Muscle Check Diagnostic</a>
          </div>
        </section>

        <section style={{ padding: "88px 48px", background: "var(--surface)", borderTop: "1px solid var(--border)" }}>
          <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "60px 100px", alignItems: "start" }}>
            <div>
              <p style={sectionLabel}>What Is Actually Happening</p>
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.8rem,3vw,2.4rem)", color: "var(--text)", marginBottom: 20 }}>Your nervous system shut muscles off to protect you.</h2>
              <p style={bodyText}>When the body experiences trauma from surgery, injury, or prolonged immobilization, the nervous system inhibits the muscles around the affected area. This is a protective response. The brain turns those muscles off to prevent further damage.</p>
              <p style={bodyText}>The problem is that these muscles do not automatically turn back on once the structural repair is complete. The neurological inhibition persists. Other muscles compensate, creating new patterns of tightness, weakness, and instability that standard rehabilitation does not address.</p>
              <p style={{ ...bodyText, marginBottom: 0 }}>This is why people plateau in physical therapy. The PT is strengthening movement patterns, but the muscles that should be driving those patterns are still neurologically offline.</p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
              {surgeries.map((s, i) => (
                <div key={i} style={{ padding: "24px 28px", background: "var(--bg)", border: "1px solid var(--border)", borderLeft: i === 0 ? "3px solid var(--red)" : "1px solid var(--border)" }}>
                  <p style={{ fontFamily: "var(--font-display)", fontSize: "0.9rem", fontWeight: 900, color: "var(--text)", marginBottom: 8, textTransform: "uppercase", letterSpacing: "0.02em" }}>{s.title}</p>
                  <p style={{ fontFamily: "var(--font-body)", fontSize: "0.84rem", color: "var(--muted)", lineHeight: 1.65 }}>{s.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section style={{ padding: "88px 48px", background: "var(--bg)", borderTop: "1px solid var(--border)" }}>
          <div style={{ maxWidth: 1100, margin: "0 auto" }}>
            <div style={{ maxWidth: 680, marginBottom: 52 }}>
              <p style={sectionLabel}>How MAT Addresses It</p>
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.8rem,3vw,2.4rem)", color: "var(--text)", marginBottom: 20 }}>PT works on the pattern. MAT works on the signal.</h2>
              <p style={bodyText}>Physical therapy is excellent at rebuilding movement patterns and general strength. But if the muscles that should be driving those patterns are not receiving their neurological signal, PT strengthens the compensators, not the source muscles. Progress stalls, and the underlying instability remains.</p>
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
          <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "60px 100px", alignItems: "start" }}>
            <div>
              <p style={sectionLabel}>Client Experience</p>
              <div style={{ padding: "28px 32px", background: "var(--bg)", border: "1px solid var(--border)", borderLeft: "3px solid var(--red)" }}>
                <p style={{ fontFamily: "var(--font-body)", fontSize: "1rem", fontStyle: "italic", color: "var(--text)", lineHeight: 1.7, marginBottom: 20 }}>After my knee replacement, I completed physical therapy and was cleared, but my knee still did not feel right. It was not as strong or stable as I expected. That is when I tried Muscle Activation Techniques. We found muscles around my knee that were not working properly, and once those were addressed, everything started to improve. My knee feels stronger, more stable, and I have much more confidence in how I move. MAT helped me go from being cleared to actually feeling fully functional again.</p>
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <div style={{ width: 24, height: 2, background: "var(--red)" }} />
                  <div>
                    <p style={{ fontFamily: "var(--font-body)", fontWeight: 700, fontSize: "0.8rem", color: "var(--text)", textTransform: "uppercase", letterSpacing: "0.05em" }}>Junior A.</p>
                    <p style={{ fontFamily: "var(--font-body)", fontSize: "0.7rem", color: "var(--red)", letterSpacing: "0.07em", textTransform: "uppercase" }}>Knee Replacement · Grandfather</p>
                  </div>
                </div>
              </div>
            </div>
            <div style={{ padding: "32px", background: "var(--b)", border: "1px solid var(--border)", borderLeft: "3px solid var(--red)" }}>
              <p style={sectionLabel}>Works Alongside Your Care Team</p>
              <p style={bodyText}>Many post-surgical clients continue working with their physical therapist or surgeon while seeing us. MAT addresses the neuromuscular piece that PT recognizes but cannot directly target.</p>
              <p style={{ ...bodyText, marginBottom: 0 }}>Orthopedic surgeons, sports medicine physicians, and physical therapists in Powell, Dublin, and Columbus regularly refer patients to Ohio Muscle Activation for exactly this reason.</p>
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
                { title: "Hip Pain", desc: "Chronic hip pain in golfers, runners, and active adults that has not responded to stretching or therapy.", href: "/conditions/hip-pain" },
                { title: "Neck and Shoulder Tension", desc: "Recurring tension that returns despite massage, chiropractic, or postural corrections.", href: "/conditions/neck-shoulder-tension" },
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
            <p style={sectionLabel}>Ready to Move Forward</p>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.8rem,3vw,2.4rem)", color: "var(--text)", marginBottom: 20 }}>Find out which muscles went offline and get them back.</h2>
            <p style={{ fontFamily: "var(--font-body)", fontSize: "0.97rem", color: "var(--muted)", lineHeight: 1.75, marginBottom: 32 }}>A focused 1-on-1 evaluation to identify exactly which muscles have lost their neurological signal and what that is causing in your body.</p>
            <a href={bookingHref} style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "var(--red)", color: "var(--text)", fontFamily: "var(--font-display)", fontWeight: 900, fontSize: "0.82rem", padding: "15px 30px", textDecoration: "none", letterSpacing: "0.07em", textTransform: "uppercase" }}>Book a Muscle Check Diagnostic</a>
            <p style={{ fontFamily: "var(--font-body)", fontSize: "0.75rem", color: "var(--dim)", marginTop: 14 }}>Powell, Ohio · (614) 946-9071 · By appointment only</p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
