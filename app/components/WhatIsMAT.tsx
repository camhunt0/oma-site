export default function WhatIsMAT() {
  const steps = [
    { num: "01", title: "Assess", body: "Specific motion and muscle tests identify where the body has lost contractile efficiency — not just where it hurts." },
    { num: "02", title: "Activate", body: "Targeted hands-on input improves the muscle's ability to contract, rather than simply stretching what feels tight." },
    { num: "03", title: "Retest", body: "Changes are verified in the same session — so you can feel and see whether motion, stability, or strength improved." },
  ];
  return (
    <section style={{ padding: "100px 48px", background: "var(--bg)", borderTop: "1px solid var(--border)" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ maxWidth: 680, marginBottom: 56 }}>
          <p style={{ fontFamily: "var(--font-body)", fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--red)", marginBottom: 16 }}>What Is MAT</p>
          <h2 style={{ fontSize: "clamp(1.8rem,3vw,2.6rem)", color: "var(--text)", marginBottom: 20 }}>A precise process for finding what your body stopped trusting.</h2>
          <p style={{ fontFamily: "var(--font-body)", fontSize: "1rem", color: "var(--muted)", lineHeight: 1.75, marginBottom: 14 }}>MAT is a root-cause, neuromuscular approach that identifies muscles your nervous system has "turned off" — and restores their ability to contract properly.</p>
          <p style={{ fontFamily: "var(--font-body)", fontSize: "1rem", color: "var(--muted)", lineHeight: 1.75 }}>It's not massage. It's not stretching. It addresses <em style={{ color: "var(--text)", fontStyle: "normal" }}>why</em> your body is compensating — not just where it hurts.</p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 2 }}>
          {steps.map((s, i) => (
            <div key={i} style={{ padding: "36px 32px", background: i === 1 ? "var(--surface2)" : "var(--surface)", border: "1px solid var(--border)", borderTop: i === 1 ? "3px solid var(--red)" : "1px solid var(--border)" }}>
              <p style={{ fontFamily: "var(--font-display)", fontSize: "3rem", fontWeight: 900, color: "rgba(204,24,24,0.15)", lineHeight: 1, marginBottom: 20 }}>{s.num}</p>
              <h3 style={{ fontSize: "1.1rem", color: "var(--text)", marginBottom: 12 }}>{s.title}</h3>
              <p style={{ fontFamily: "var(--font-body)", fontSize: "0.88rem", color: "var(--muted)", lineHeight: 1.7 }}>{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
