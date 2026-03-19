import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Strength & Performance | Ohio Muscle Activation | Powell, Ohio",
  description:
    "Elite athletes and lifters use MAT to find neuromuscular weaknesses limiting their movement. Restore the signal and unlock your potential. Serving Powell, Dublin & Columbus.",
};

export default function StrengthPerformancePage() {
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
              Strength & Performance
            </h1>
            <p style={{ fontFamily: "var(--font-body)", fontSize: "1.1rem", color: "var(--muted)", lineHeight: 1.75 }}>
              Keep lifting, training, and competing — without constantly managing flare-ups. Cameron has worked with world-class powerlifting competitors at the Arnold Sports Festival. Every athlete tested had neuromuscular weaknesses limiting their movement. MAT identifies which muscles have gone offline and restores the signal so you can perform at your best.
            </p>
          </div>
        </section>

        <section style={{ padding: "80px 48px", background: "var(--surface)", borderTop: "1px solid var(--border)" }}>
          <div style={{ maxWidth: 800, margin: "0 auto" }}>
            <h2 style={{ fontSize: "1.6rem", color: "var(--text)", marginBottom: 24 }}>The Neuromuscular Edge</h2>
            <p style={{ fontFamily: "var(--font-body)", fontSize: "0.97rem", color: "var(--muted)", lineHeight: 1.75, marginBottom: 20 }}>
              Strength athletes push their bodies to the limit. When key muscles stop firing properly, other muscles compensate — and that compensation creates weak links. Sticking points, asymmetries, and recurring tightness often trace back to muscles that have lost their signal.
            </p>
            <p style={{ fontFamily: "var(--font-body)", fontSize: "0.97rem", color: "var(--muted)", lineHeight: 1.75 }}>
              MAT finds which muscles have gone offline and gets them communicating again. Multiple athletes at the Arnold hit PRs on their lifts the same day after MAT. When the right muscles fire, performance follows.
            </p>
          </div>
        </section>

        <section style={{ padding: "80px 48px", background: "var(--bg)", borderTop: "1px solid var(--border)", textAlign: "center" }}>
          <div style={{ maxWidth: 600, margin: "0 auto" }}>
            <h2 style={{ fontSize: "1.6rem", color: "var(--text)", marginBottom: 20 }}>Ready to Unlock Your Potential?</h2>
            <p style={{ fontFamily: "var(--font-body)", fontSize: "0.97rem", color: "var(--muted)", lineHeight: 1.75, marginBottom: 28 }}>
              Schedule a diagnostic to find out which muscles are limiting your lifts.
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
