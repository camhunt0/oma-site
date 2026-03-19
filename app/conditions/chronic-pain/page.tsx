import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Chronic Pain | Ohio Muscle Activation | Powell, Ohio",
  description:
    "Keep lifting, training, and living — without constantly managing flare-ups. MAT finds neuromuscular gaps that cause recurring pain. Serving Powell, Dublin & Columbus.",
};

export default function ChronicPainPage() {
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
              Chronic Pain
            </h1>
            <p style={{ fontFamily: "var(--font-body)", fontSize: "1.1rem", color: "var(--muted)", lineHeight: 1.75 }}>
              For people who want to stay active and strong without recurring tightness becoming the limiting factor. Neuromuscular gaps catch up with everyone eventually. MAT identifies which muscles have stopped firing and restores the signal so you can move without constant flare-ups.
            </p>
          </div>
        </section>

        <section style={{ padding: "80px 48px", background: "var(--surface)", borderTop: "1px solid var(--border)" }}>
          <div style={{ maxWidth: 800, margin: "0 auto" }}>
            <h2 style={{ fontSize: "1.6rem", color: "var(--text)", marginBottom: 24 }}>When Pain Keeps Coming Back</h2>
            <p style={{ fontFamily: "var(--font-body)", fontSize: "0.97rem", color: "var(--muted)", lineHeight: 1.75, marginBottom: 20 }}>
              You&apos;ve stretched. You&apos;ve done PT. You&apos;ve tried strength work. But the same areas keep tightening up or flaring. Often, the issue isn&apos;t the muscles you feel — it&apos;s the ones that have stopped firing. When muscles go offline, others overwork to compensate, leading to recurring pain and stiffness.
            </p>
            <p style={{ fontFamily: "var(--font-body)", fontSize: "0.97rem", color: "var(--muted)", lineHeight: 1.75 }}>
              MAT finds which muscles have lost their signal and gets them communicating again. Once the right muscles fire, the overworked ones can finally relax — and the cycle of recurring pain can break.
            </p>
          </div>
        </section>

        <section style={{ padding: "80px 48px", background: "var(--bg)", borderTop: "1px solid var(--border)", textAlign: "center" }}>
          <div style={{ maxWidth: 600, margin: "0 auto" }}>
            <h2 style={{ fontSize: "1.6rem", color: "var(--text)", marginBottom: 20 }}>Ready to Break the Cycle?</h2>
            <p style={{ fontFamily: "var(--font-body)", fontSize: "0.97rem", color: "var(--muted)", lineHeight: 1.75, marginBottom: 28 }}>
              Schedule a diagnostic to find out which muscles are driving your recurring pain.
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
