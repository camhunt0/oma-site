import type { Metadata } from "next";
import Link from "next/link";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import FaqSchema from "../../components/FaqSchema";

export const metadata: Metadata = {
  alternates: {
    canonical: "/conditions/hip-pain",
  },
  title: "Hip Pain | Muscle Activation Techniques | Powell, Ohio",
  description: "Chronic hip pain in golfers, runners, and active adults often traces back to muscles that have lost their neurological signal. Ohio Muscle Activation uses MAT to find the source and restore proper function. Serving Powell, Dublin and Columbus.",
  openGraph: {
    title: "Hip Pain | Ohio Muscle Activation",
    description: "Chronic hip pain that does not respond to stretching or therapy is often a neurological problem. MAT identifies which muscles went offline and restores the signal.",
    url: "/conditions/hip-pain",
  },
};

const patterns = [
  { title: "Golfers", body: "Hip restriction through the backswing and inability to clear the hips through impact often traces back to inhibited glutes and hip rotators, not inflexibility. Rotation problems are frequently neuromuscular, not structural." },
  { title: "Runners", body: "IT band syndrome, hip flexor pain, and recurring low-back tightness in runners is often caused by inhibited hip stabilizers forcing other muscles to overload. The tight areas are compensating, not the source." },
  { title: "Desk Workers", body: "Extended sitting neurologically inhibits the hip flexors and glutes. The body compensates with the low back and hamstrings, which is why desk workers develop chronic hip and back tension that stretching temporarily relieves but never fixes." },
  { title: "Post-Surgical Patients", body: "After hip replacement or labral repair, the muscles stabilizing the joint frequently remain neurologically inhibited. The hardware is in place, but the muscles have not received the signal to re-engage." },
];

const steps = [
  { num: "01", title: "Assess", body: "Manual muscle testing identifies exactly which hip muscles have lost their neurological signal, separating the source of the problem from the areas compensating around it." },
  { num: "02", title: "Activate", body: "Targeted hands-on input restores the neurological connection. The inhibited muscle receives its signal again and begins contracting on demand." },
  { num: "03", title: "Verify", body: "We retest range of motion and muscle function immediately. Most clients feel a measurable difference in hip mobility and stability in the same session." },
];

const faqs = [
  { q: "How is MAT different from hip stretching or mobility work?", a: "Stretching addresses the flexibility of the muscle you are stretching, not the neurological problem in the muscle that caused the tightness. If the hip flexor is tight because the glute stopped firing, stretching the hip flexor gives temporary relief but does not fix the source. MAT identifies which muscle lost its signal and restores it directly." },
  { q: "I have had hip pain for years. Can MAT still help?", a: "Yes. Muscle inhibition does not resolve on its own. It persists until the neurological signal is specifically restored. Many of our clients have dealt with hip pain for years before finding MAT. The duration of the problem does not determine the outcome of treatment." },
  { q: "Will this work if my MRI came back clean?", a: "Imaging shows structure, not neurological function. A muscle can test completely clean on an MRI and still not fire properly. This is one of the most common situations we see. MAT looks at the signal, not the structure." },
  { q: "How many sessions will I need?", a: "This varies by individual, how long the inhibition has been present, and how the body responds. Most clients notice meaningful improvement in the first one to three sessions. A clear picture of what is driving your hip pain will come from the initial diagnostic." },
];

const sectionLabel: React.CSSProperties = { fontFamily: "var(--font-body)", fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--red-text)", marginBottom: 16 };
const bodyText: React.CSSProperties = { fontFamily: "var(--font-body)", fontSize: "0.97rem", color: "var(--muted)", lineHeight: 1.8, marginBottom: 16 };
const bookingHref = "/#booking";

export default function HipPain() {
  return (
    <>
      <Nav />
      <FaqSchema faqs={faqs} path="/conditions/hip-pain" />
      <main style={{ paddingTop: 66 }}>
        <section style={{ padding: "80px 48px 72px", background: "#0d0d0d", borderBottom: "2px solid var(--red)", position: "relative", overflow: "hidden" }}>
          <div style={{ position: "absolute", top: 0, right: 0, width: "40%", height: "100%", background: "linear-gradient(to left, rgba(204,24,24,0.07), transparent)", zIndex: 0 }} />
          <div style={{ maxWidth: 1100, margin: "0 auto", position: "relative", zIndex: 1 }}>
            <Link href="/#who-it-helps" style={{ fontFamily: "var(--font-body)", fontSize: "0.7rem", color: "var(--dim)", textDecoration: "none", letterSpacing: "0.08em", textTransform: "uppercase", display: "inline-flex", alignItems: "center", gap: 6, marginBottom: 28 }}>Back to Who It Helps</Link>
            <p style={sectionLabel}>Condition</p>
            <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.4rem,5vw,4.2rem)", color: "var(--text)", lineHeight: 1.08, marginBottom: 24, maxWidth: 700 }}>Hip Pain</h1>
            <p style={{ fontFamily: "var(--font-body)", fontSize: "1.1rem", color: "var(--muted)", lineHeight: 1.8, maxWidth: 620, marginBottom: 36 }}>Chronic hip pain that does not respond to stretching, massage, or physical therapy is often a neurological problem, not a flexibility or strength problem. The muscles that should be stabilizing the hip have lost their signal, and everything else is compensating around them.</p>
            <Link href={bookingHref} style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "var(--red)", color: "var(--text)", fontFamily: "var(--font-display)", fontWeight: 900, fontSize: "0.82rem", padding: "15px 28px", textDecoration: "none", letterSpacing: "0.07em", textTransform: "uppercase" }}>Book a Muscle Check Diagnostic</Link>
          </div>
        </section>

        <section style={{ padding: "88px 48px", background: "var(--surface)", borderTop: "1px solid var(--border)" }}>
          <div className="grid-2" style={{ maxWidth: 1100, margin: "0 auto", gap: "60px 100px", alignItems: "start" }}>
            <div>
              <p style={sectionLabel}>Why It Keeps Coming Back</p>
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.8rem,3vw,2.4rem)", color: "var(--text)", marginBottom: 20 }}>The hip is not the problem. It is protecting the problem.</h2>
              <p style={bodyText}>When a muscle loses its neurological signal, the body does not shut down. It compensates. Surrounding muscles take on extra load. Over time those compensating muscles become chronically overloaded, tight, and painful.</p>
              <p style={bodyText}>Stretching and massage relieve the compensating muscles temporarily. But because the source muscle is still offline, the pattern rebuilds within days. The tightness returns. The pain returns.</p>
              <p style={{ ...bodyText, marginBottom: 28 }}>MAT identifies exactly which muscle lost its signal. Once that muscle is reactivated, the compensators no longer need to overwork, and the pain pattern finally resolves.</p>
              <div style={{ padding: "18px 22px", borderLeft: "3px solid var(--red)", background: "var(--red-dim)" }}>
                <p style={{ fontFamily: "var(--font-body)", fontSize: "0.9rem", color: "var(--text)", fontStyle: "italic", lineHeight: 1.65 }}>I had been dealing with hip pain for over 3 years that seriously limited my golf game. After just one session of Muscle Activation Techniques, I was able to hinge my hips again without that constant burning in my hamstrings and low back.</p>
                <p style={{ fontFamily: "var(--font-body)", fontSize: "0.72rem", color: "var(--red-text)", fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase", marginTop: 10 }}>Kyle G. · Collegiate Golfer</p>
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
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.8rem,3vw,2.4rem)", color: "var(--text)", marginBottom: 20 }}>Find the muscle that went offline. Restore the signal.</h2>
              <p style={bodyText}>Most hip pain treatment works on the areas that hurt. MAT works on the areas that stopped doing their job. By identifying and reactivating the specific muscles that have lost their neurological signal, the body stops compensating and the pain finally has somewhere to go.</p>
            </div>
            <div className="grid-3" style={{ gap: 2 }}>
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
          <div className="grid-2" style={{ maxWidth: 1100, margin: "0 auto", gap: "60px 100px", alignItems: "center" }}>
            <div style={{ padding: "32px", background: "var(--bg)", border: "1px solid var(--border)", borderLeft: "3px solid var(--red)" }}>
              <p style={{ fontFamily: "var(--font-body)", fontSize: "1rem", fontStyle: "italic", color: "var(--text)", lineHeight: 1.7, marginBottom: 20 }}>Four months ago I was experiencing lower back pain due to weak hip-flexors while training for an Ironman 70.3. After seeing Cameron several times, each session ended in greater flexibility and less back pain. I was able to PR my Ironman 70.3 and I give major credit to Cameron for helping me.</p>
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <div style={{ width: 24, height: 2, background: "var(--red)" }} />
                <div>
                  <p style={{ fontFamily: "var(--font-body)", fontWeight: 700, fontSize: "0.8rem", color: "var(--text)", textTransform: "uppercase", letterSpacing: "0.05em" }}>Nick S.</p>
                  <p style={{ fontFamily: "var(--font-body)", fontSize: "0.7rem", color: "var(--red-text)", letterSpacing: "0.07em", textTransform: "uppercase" }}>Triathlete · Ironman 70.3</p>
                </div>
              </div>
            </div>
            <div>
              <p style={sectionLabel}>What to Expect</p>
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.6rem,2.8vw,2.2rem)", color: "var(--text)", marginBottom: 20 }}>Most clients feel a difference in the first session.</h2>
              <p style={bodyText}>Because MAT targets the neurological source and not just the symptomatic area, changes tend to be immediate and measurable. Improved range of motion, reduced pain with movement, better stability.</p>
              <p style={{ ...bodyText, marginBottom: 28 }}>The first appointment is a Muscle Check Diagnostic: a focused evaluation to identify exactly which muscles have lost their signal and what that is causing in your hip. You will leave with a clear picture of the problem and a recommendation for next steps.</p>
              <Link href={bookingHref} style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "var(--red)", color: "var(--text)", fontFamily: "var(--font-display)", fontWeight: 900, fontSize: "0.8rem", padding: "13px 24px", textDecoration: "none", letterSpacing: "0.07em", textTransform: "uppercase" }}>Book a Diagnostic</Link>
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
            <div className="grid-3" style={{ gap: 2 }}>
              {[
                { title: "Post-Surgical Recovery", desc: "Muscles that shut down after surgery and have not come back online despite PT and rehabilitation.", href: "/conditions/post-surgical-recovery" },
                { title: "Neck and Shoulder Tension", desc: "Recurring tension that returns despite massage, chiropractic, or postural corrections.", href: "/conditions/neck-shoulder-tension" },
                { title: "Chronic Pain", desc: "Imaging looks clean but movement still feels wrong. The neurological gap most providers miss.", href: "/conditions/chronic-pain" },
              ].map((c, i) => (
                <div key={i} style={{ padding: "28px", background: "var(--bg)", border: "1px solid var(--border)", borderTop: "2px solid var(--red)" }}>
                  <h3 style={{ fontFamily: "var(--font-display)", fontSize: "0.95rem", color: "var(--text)", marginBottom: 10 }}>{c.title}</h3>
                  <p style={{ fontFamily: "var(--font-body)", fontSize: "0.83rem", color: "var(--muted)", lineHeight: 1.65, marginBottom: 14 }}>{c.desc}</p>
                  <Link href={c.href} style={{ fontFamily: "var(--font-body)", fontSize: "0.75rem", color: "var(--red-text)", textDecoration: "none", fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase" }}>Learn more</Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section style={{ padding: "88px 48px", background: "#0d0d0d", borderTop: "2px solid var(--red)", textAlign: "center" }}>
          <div style={{ maxWidth: 560, margin: "0 auto" }}>
            <p style={sectionLabel}>Ready to Find Answers</p>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.8rem,3vw,2.4rem)", color: "var(--text)", marginBottom: 20 }}>Find out which muscles went offline and get them back.</h2>
            <p style={{ fontFamily: "var(--font-body)", fontSize: "0.97rem", color: "var(--muted)", lineHeight: 1.75, marginBottom: 32 }}>A focused 1-on-1 evaluation to identify exactly which muscles have lost their signal and what that is causing in your hip.</p>
            <Link href={bookingHref} style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "var(--red)", color: "var(--text)", fontFamily: "var(--font-display)", fontWeight: 900, fontSize: "0.82rem", padding: "15px 30px", textDecoration: "none", letterSpacing: "0.07em", textTransform: "uppercase" }}>Book a Muscle Check Diagnostic</Link>
            <p style={{ fontFamily: "var(--font-body)", fontSize: "0.75rem", color: "var(--dim)", marginTop: 14 }}>Powell, Ohio · (614) 946-9071 · By appointment only</p>
          </div>
        </section>
      </main>
      <Footer showCTA={false} />
    </>
  );
}
