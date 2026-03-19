import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Golf Performance | Ohio Muscle Activation | Powell, Ohio",
  description:
    "Your swing isn't limited by flexibility — it's limited by muscles that have lost their signal. MAT restores rotation and power. Serving Powell, Dublin & Columbus.",
};

export default function GolfPerformancePage() {
  return (
    <>
      <Nav />
      <main>
        <section style={{ padding: "140px 48px 100px", background: "var(--bg)" }}>
          <div style={{ maxWidth: 800, margin: "0 auto" }}>
            <p style={{ fontFamily: "var(--font-body)", fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--red)", marginBottom: 20 }}>
              Condition
            </p>
            <h1 style={{ fontSize: "clamp(2rem,4vw,3rem)", color: "var(--text)", marginBottom: 24, lineHeight: 1.1 }}>
              Golf Performance
            </h1>
            <p style={{ fontFamily: "var(--font-body)", fontSize: "1.1rem", color: "var(--muted)", lineHeight: 1.75 }}>
              Your swing isn&apos;t limited by flexibility — it&apos;s limited by muscles that have lost their signal. For players restricted through the backswing, struggling to clear the hips, or wanting a body that can support a better swing. Rotation problems are often neuromuscular, not structural.
            </p>
          </div>
        </section>

        <section style={{ padding: "80px 48px", background: "var(--surface)", borderTop: "1px solid var(--border)" }}>
          <div style={{ maxWidth: 800, margin: "0 auto" }}>
            <h2 style={{ fontSize: "1.6rem", color: "var(--text)", marginBottom: 24 }}>The Neuromuscular Gap in Your Swing</h2>
            <p style={{ fontFamily: "var(--font-body)", fontSize: "0.97rem", color: "var(--muted)", lineHeight: 1.75, marginBottom: 20 }}>
              A powerful golf swing requires muscles throughout your body to fire in sequence. When key muscles in the hips, core, or shoulders stop communicating with your brain, other muscles compensate. That compensation limits rotation, reduces power, and often leads to pain or injury.
            </p>
            <p style={{ fontFamily: "var(--font-body)", fontSize: "0.97rem", color: "var(--muted)", lineHeight: 1.75 }}>
              MAT identifies which muscles have gone offline and restores their signal. Once the right muscles fire, your body can move through a full, efficient swing without restriction.
            </p>
          </div>
        </section>

        <section style={{ padding: "80px 48px", background: "var(--bg)", borderTop: "1px solid var(--border)", textAlign: "center" }}>
          <div style={{ maxWidth: 600, margin: "0 auto" }}>
            <h2 style={{ fontSize: "1.6rem", color: "var(--text)", marginBottom: 20 }}>Ready to Unlock Your Swing?</h2>
            <p style={{ fontFamily: "var(--font-body)", fontSize: "0.97rem", color: "var(--muted)", lineHeight: 1.75, marginBottom: 28 }}>
              Schedule a diagnostic to find out which muscles are limiting your game.
            </p>
            <a href="/#booking" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "var(--red)", color: "var(--text)", fontFamily: "var(--font-display)", fontWeight: 900, fontSize: "0.82rem", padding: "15px 28px", textDecoration: "none", letterSpacing: "0.07em", textTransform: "uppercase" }}>
              Book a Diagnostic →
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
