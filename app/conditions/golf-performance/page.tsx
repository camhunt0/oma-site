import type { Metadata } from "next";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";

export const metadata: Metadata = {
  title: "Golf Performance | Muscle Activation Techniques | Powell, Ohio",
  description: "Most swing limitations are neurological, not technical. Ohio Muscle Activation uses MAT to restore hip rotation, shoulder turn, and full-body sequencing so golfers in Powell, Dublin, and Columbus can unlock a new level of their game.",
  openGraph: {
    title: "Golf Performance | Ohio Muscle Activation",
    description: "Your swing ceiling is neurological. MAT has repeatedly increased yardage and range of motion for golfers by restoring the muscles that drive rotation and power.",
    url: "https://ohiomuscleactivation.com/conditions/golf-performance",
  },
};

const patterns = [
  { title: "Hip Rotation Restriction", body: "Inhibited glutes and hip rotators limit backswing and prevent full hip clearing through impact. Most golfers accept this as a flexibility problem. It is frequently a neuromuscular one that responds quickly to MAT." },
  { title: "Limited Shoulder Turn", body: "Restricted shoulder turn and thoracic rotation often trace back to inhibited muscles in the posterior shoulder and mid-back. Releasing the restriction without restoring the signal produces limited lasting change." },
  { title: "Trail Leg Instability", body: "Lack of trail leg stability during the backswing forces compensations throughout the swing. The root cause is often inhibited hip and knee stabilizers on that side that are not contributing as they should." },
  { title: "Post-Injury Return", body: "Golfers returning from back, hip, shoulder, or wrist injuries often find that healed tissue does not mean fully functioning muscles. MAT restores the neurological signal to muscles that shut down during injury and never fully came back." },
];

const steps = [
  { num: "01", title: "Assess", body: "Manual muscle testing identifies exactly which muscles in the hips, thorax, and shoulders have lost their signal, revealing the neuromuscular gaps limiting your swing." },
  { num: "02", title: "Activate", body: "Targeted hands-on input restores the neurological connection to the inhibited muscles. Hip rotators, glutes, and shoulder stabilizers begin firing on demand." },
  { num: "03", title: "Verify", body: "We retest immediately. Improved range of motion is measurable in the same session. Most golfers feel the difference in their rotation before they leave." },
];

const faqs = [
  { q: "How is MAT different from golf fitness training?", a: "Golf fitness training loads the movement patterns you already have. If the muscles that should be driving those patterns are neurologically inhibited, training loads the compensators harder. MAT restores the signal to the inhibited muscles first so that when you train, you are building the right foundation." },
  { q: "Will this help my swing speed?", a: "Swing speed is directly related to how well the kinematic sequence fires and how much rotational capacity the body can access. When inhibited hip rotators and glutes are reactivated, golfers consistently gain usable range of motion and rotation speed. Increased yardage is a common result." },
  { q: "I have had lessons but still cannot turn. Can MAT help?", a: "Instruction addresses the pattern but cannot fix a neuromuscular gap. If the muscles that produce rotation are inhibited, no amount of coaching will unlock the movement. MAT addresses the signal first, which often makes technique changes far easier to implement and sustain." },
  { q: "Do I need to be in pain to benefit?", a: "No. Many of our golf clients come in before pain develops. They notice a ceiling in their performance and recognize it as a body issue rather than a technique issue. MAT identifies and closes the neuromuscular gaps limiting their game." },
];

const sectionLabel: React.CSSProperties = { fontFamily: "var(--font-body)", fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--red)", marginBottom: 16 };
const bodyText: React.CSSProperties = { fontFamily: "var(--font-body)", fontSize: "0.97rem", color: "var(--muted)", lineHeight: 1.8, marginBottom: 16 };
const bookingHref = "https://oma-site-zeta.vercel.app/#booking";

export default function GolfPerformance() {
  return (
    <>
      <Nav />
      <main style={{ paddingTop: 66 }}>
        <section style={{ padding: "80px 48px 72px", background: "#0d0d0d", borderBottom: "2px solid var(--red)", position: "relative", overflow: "hidden" }}>
          <div style={{ position: "absolute", top: 0, right: 0, width: "40%", height: "100%", background: "linear-gradient(to left, rgba(204,24,24,0.07), transparent)", zIndex: 0 }} />
          <div style={{ maxWidth: 1100, margin: "0 auto", position: "relative", zIndex: 1 }}>
            <a href="https://oma-site-zeta.vercel.app/#who-it-helps" style={{ fontFamily: "var(--font-body)", fontSize: "0.7rem", color: "var(--dim)", textDecoration: "none", letterSpacing: "0.08em", textTransform: "uppercase", display: "inline-flex", alignItems: "center", gap: 6, marginBottom: 28 }}>Back to Who It Helps</a>
            <p style={sectionLabel}>Condition</p>
            <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.4rem,5vw,4.2rem)", color: "var(--text)", lineHeight: 1.08, marginBottom: 24, maxWidth: 700 }}>Golf Performance</h1>
            <p style={{ fontFamily: "var(--font-body)", fontSize: "1.1rem", color: "var(--muted)", lineHeight: 1.8, maxWidth: 620, marginBottom: 36 }}>
              Most swing limitations are not technique problems. They are neuromuscular ones. When the muscles that drive rotation, sequencing, and stability have lost their signal, no amount of instruction or practice will unlock the movement your body is neurologically incapable of producing.
            </p>
            <a href={bookingHref} style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "var(--red)", color: "var(--text)", fontFamily: "var(--font-display)", fontWeight: 900, fontSize: "0.82rem", padding: "15px 28px", textDecoration: "none", letterSpacing: "0.07em", textTransform: "uppercase" }}>Book a Muscle Check Diagnostic</a>
          </div>
        </section>

        <section style={{ padding: "88px 48px", background: "var(--surface)", borderTop: "1px solid var(--border)" }}>
          <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "60px 100px", alignItems: "start" }}>
            <div>
              <p style={sectionLabel}>The Neuromuscular Ceiling</p>
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.8rem,3vw,2.4rem)", color: "var(--text)", marginBottom: 20 }}>Your swing is limited by muscles that have gone offline, not by your technique.</h2>
              <p style={bodyText}>The golf swing is one of the most demanding rotational movements in sport. It requires precise neuromuscular sequencing across the hips, thorax, and shoulders. When key muscles in that chain lose their signal, the body compensates with whatever it has available.</p>
              <p style={bodyText}>Those compensations become the swing. Instruction can refine the pattern, but it cannot fix a neurological gap. The movement the body produces under load will always default to the compensated version until the missing signals are restored.</p>
              <p style={{ ...bodyText, marginBottom: 28 }}>MAT has repeatedly increased yardage and range of motion for golfers at every level. When inhibited muscles come back online, the rotation, sequencing, and power that were always there finally become accessible.</p>
              <div style={{ padding: "18px 22px", borderLeft: "3px solid var(--red)", background: "var(--red-dim)" }}>
                <p style={{ fontFamily: "var(--font-body)", fontSize: "0.9rem", color: "var(--text)", fontStyle: "italic", lineHeight: 1.65 }}>"I had been dealing with hip pain for over 3 years that seriously limited my golf game. After just one session of Muscle Activation Techniques, I was able to hinge my hips again without that constant burning in my hamstrings and low back. This was the first time I felt like someone actually fixed the root of the problem, not just treated the symptoms."</p>
                <p style={{ fontFamily: "var(--font-body)", fontSize: "0.72rem", color: "var(--red)", fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase", marginTop: 10 }}>Kyle G. · Collegiate Golfer</p>
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
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.8rem,3vw,2.4rem)", color: "var(--text)", marginBottom: 20 }}>Restore the signal. Unlock the swing.</h2>
              <p style={bodyText}>The process is systematic. Manual muscle testing identifies which muscles in the kinematic chain have lost their neurological signal. Once those muscles are reactivated, the rotation, stability, and sequencing that were being blocked by the compensation pattern become available immediately.</p>
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
            <div style={{ padding: "32px", background: "var(--bg)", border: "1px solid var(--border)", borderLeft: "3px solid var(--red)" }}>
              <p style={{ fontFamily: "var(--font-body)", fontSize: "1rem", fontStyle: "italic", color: "var(--text)", lineHeight: 1.7, marginBottom: 20 }}>"Cameron is professional and very knowledgeable. I have seen great value in my sessions with him starting with recovery from a golf injury to building and maintaining muscle strength. I am glad I found him."</p>
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <div style={{ width: 24, height: 2, background: "var(--red)" }} />
                <div>
                  <p style={{ fontFamily: "var(--font-body)", fontWeight: 700, fontSize: "0.8rem", color: "var(--text)", textTransform: "uppercase", letterSpacing: "0.05em" }}>Jack R.</p>
                  <p style={{ fontFamily: "var(--font-body)", fontSize: "0.7rem", color: "var(--red)", letterSpacing: "0.07em", textTransform: "uppercase" }}>Golfer · Client since 2018</p>
                </div>
              </div>
            </div>
            <div>
              <p style={sectionLabel}>Local Expertise</p>
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.6rem,2.8vw,2.2rem)", color: "var(--text)", marginBottom: 20 }}>Serving golfers across Powell, Dublin, and greater Columbus.</h2>
              <p style={bodyText}>Ohio Muscle Activation works with golfers from courses throughout the area including Muirfield Village, Safari Golf Club, and Scioto Reserve. Cameron holds TPI Level 1 certification, providing a golf-specific lens on neuromuscular assessment that goes beyond general fitness.</p>
              <p style={{ ...bodyText, marginBottom: 28 }}>Whether the goal is eliminating pain, improving rotation, adding yardage, or simply maintaining the physical capacity to play at your best, MAT addresses the neuromuscular foundation that everything else depends on.</p>
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
                { title: "Hip Pain", desc: "Chronic hip pain that has not responded to stretching, therapy, or rest.", href: "/conditions/hip-pain" },
                { title: "Strength and Performance", desc: "Proactive neuromuscular care for active adults who want to perform at their best.", href: "/conditions/strength-performance" },
                { title: "Post-Surgical Recovery", desc: "Muscles that shut down after surgery and have not come back online despite rehabilitation.", href: "/conditions/post-surgical-recovery" },
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
            <p style={sectionLabel}>Ready to Unlock Your Game</p>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.8rem,3vw,2.4rem)", color: "var(--text)", marginBottom: 20 }}>Find out which muscles are limiting your swing and get them back.</h2>
            <p style={{ fontFamily: "var(--font-body)", fontSize: "0.97rem", color: "var(--muted)", lineHeight: 1.75, marginBottom: 32 }}>A focused 1-on-1 evaluation to identify the neuromuscular gaps limiting your rotation, power, and consistency.</p>
            <a href={bookingHref} style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "var(--red)", color: "var(--text)", fontFamily: "var(--font-display)", fontWeight: 900, fontSize: "0.82rem", padding: "15px 30px", textDecoration: "none", letterSpacing: "0.07em", textTransform: "uppercase" }}>Book a Muscle Check Diagnostic</a>
            <p style={{ fontFamily: "var(--font-body)", fontSize: "0.75rem", color: "var(--dim)", marginTop: 14 }}>Powell, Ohio · (614) 946-9071 · By appointment only</p>
          </div>
        </section>
      </main>
      <Footer showCTA={false} />
    </>
  );
}
