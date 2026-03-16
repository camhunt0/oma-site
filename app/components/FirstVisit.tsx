import Image from "next/image";

const steps = [
  { num: "01", title: "Talk through what you're feeling", body: "Pain history, training background, what you've already tried, and what you want to get back to. Context matters." },
  { num: "02", title: "Assess movement and muscle function", body: "Specific range of motion and manual muscle tests identify where the system is underperforming." },
  { num: "03", title: "Treat and retest", body: "Changes are verified in real time — so you can feel and see whether motion, stability, or strength improved in the session." },
  { num: "04", title: "Leave with clarity", body: "You'll know what was found, what the likely next step is, and whether continuing care is the right fit for your goals." },
];

export default function FirstVisit() {
  return (
    <section id="first-visit" style={{ padding: "100px 48px", background: "var(--surface)", borderTop: "1px solid var(--border)" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "72px 80px", alignItems: "start" }}>
        <div>
          <p style={{ fontFamily: "var(--font-body)", fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--red)", marginBottom: 16 }}>What to Expect</p>
          <h2 style={{ fontSize: "clamp(1.8rem,3vw,2.6rem)", color: "var(--text)", marginBottom: 20 }}>Clear, calm, and specific. No pressure. No surprises.</h2>
          <p style={{ fontFamily: "var(--font-body)", fontSize: "0.97rem", color: "var(--muted)", lineHeight: 1.75, marginBottom: 24 }}>
            The first appointment is designed to feel more like a premium diagnostic process than a rushed treatment slot. The goal isn't to trap someone into a package — it's to help them understand what's happening in their body.
          </p>
          <div style={{ padding: "18px 22px", borderLeft: "3px solid var(--red)", background: "var(--red-dim)", marginBottom: 28 }}>
            <p style={{ fontFamily: "var(--font-display)", fontSize: "1rem", color: "var(--text)", letterSpacing: "0.02em" }}>No Guessing. No Pressure. Just Clarity.</p>
          </div>
          <div style={{ overflow: "hidden", border: "1px solid var(--border)", aspectRatio: "4/3" }}>
            <Image src="/mat-session-b.jpg" alt="Cameron Hunt working with a client during a MAT session" width={1400} height={1050} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
          </div>
        </div>
        <div style={{ background: "var(--bg)", border: "1px solid var(--border)", padding: "32px 28px" }}>
          {steps.map((s, i) => (
            <div key={i} style={{ display: "flex", gap: 20, padding: "22px 0", borderBottom: i < steps.length - 1 ? "1px solid var(--border)" : "none" }}>
              <div style={{ width: 32, height: 32, background: "var(--red)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, fontFamily: "var(--font-display)", fontSize: "0.78rem", color: "var(--text)", fontWeight: 900 }}>{s.num}</div>
              <div>
                <p style={{ fontFamily: "var(--font-display)", fontWeight: 900, fontSize: "0.88rem", color: "var(--text)", marginBottom: 6, textTransform: "uppercase", letterSpacing: "0.02em" }}>{s.title}</p>
                <p style={{ fontFamily: "var(--font-body)", fontSize: "0.84rem", color: "var(--muted)", lineHeight: 1.65 }}>{s.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
