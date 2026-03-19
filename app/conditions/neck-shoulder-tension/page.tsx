import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Neck & Shoulder Tension | Ohio Muscle Activation | Powell, Ohio",
  description:
    "Your neck pain keeps coming back because the signal is missing. MAT identifies which muscles have shut down and restores them. Serving Powell, Dublin & Columbus.",
};

export default function NeckShoulderTensionPage() {
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
              Neck & Shoulder Tension
            </h1>
            <p style={{ fontFamily: "var(--font-body)", fontSize: "1.1rem", color: "var(--muted)", lineHeight: 1.75 }}>
              Your neck and shoulders tighten up no matter how often you stretch. The compensating muscles keep getting loaded because the real muscles aren&apos;t firing. Ohio Muscle Activation finds which muscles went offline and restores the signal.
            </p>
          </div>
        </section>

        <section style={{ padding: "80px 48px", background: "var(--surface)", borderTop: "1px solid var(--border)" }}>
          <div style={{ maxWidth: 800, margin: "0 auto" }}>
            <h2 style={{ fontSize: "1.6rem", color: "var(--text)", marginBottom: 24 }}>Why Stretching Isn&apos;t Enough</h2>
            <p style={{ fontFamily: "var(--font-body)", fontSize: "0.97rem", color: "var(--muted)", lineHeight: 1.75, marginBottom: 20 }}>
              Desk work, driving, and screen time put constant load on the same muscles. Over time, your nervous system can shut down the muscles that should be supporting your neck and shoulders. The ones that remain active overwork and tighten up — and no amount of stretching fixes the underlying neurological gap.
            </p>
            <p style={{ fontFamily: "var(--font-body)", fontSize: "0.97rem", color: "var(--muted)", lineHeight: 1.75 }}>
              MAT identifies which muscles have lost their signal and gets them communicating again. Once the right muscles fire, the overworked ones can finally relax.
            </p>
          </div>
        </section>

        <section style={{ padding: "80px 48px", background: "var(--bg)", borderTop: "1px solid var(--border)", textAlign: "center" }}>
          <div style={{ maxWidth: 600, margin: "0 auto" }}>
            <h2 style={{ fontSize: "1.6rem", color: "var(--text)", marginBottom: 20 }}>Ready to Address the Root Cause?</h2>
            <p style={{ fontFamily: "var(--font-body)", fontSize: "0.97rem", color: "var(--muted)", lineHeight: 1.75, marginBottom: 28 }}>
              Schedule a diagnostic to find out which muscles have gone offline.
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
