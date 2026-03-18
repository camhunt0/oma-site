export default function WhatIsMAT() {
  const steps = [
    { num: "01", title: "Assess", body: "Precise manual muscle testing identifies which muscles have lost their neurological signal. This is where the communication between muscle and brain has broken down." },
    { num: "02", title: "Activate", body: "Targeted hands-on input restores the neuromuscular connection, improving the muscle's ability to receive and respond to signals from the nervous system." },
    { num: "03", title: "Verify", body: "Changes are verified in the same session. You feel the difference immediately, not after weeks of guessing." },
  ];
  return (
    <section style={{ padding: "100px 48px", background: "var(--bg)", borderTop: "1px solid var(--border)" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ maxWidth: 720, marginBottom: 56 }}>
          <p style={{ fontFamily: "var(--font-body)", fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--red)", marginBottom: 16 }}>What Is MAT</p>
          <h2 style={{ fontSize: "clamp(1.8rem,3vw,2.6rem)", color: "var(--text)", marginBottom: 20 }}>Your body is a neurological system.</h2>
          <p style={{ fontFamily: "var(--font-body)", fontSize: "1.05rem", color: "var(--muted)", lineHeight: 1.8, marginBottom: 14 }}>
            When muscles fire, they send signals to the brain that drive healthy movement and performance. When a muscle is stressed or injured, it can stop firing, and other muscles step in to compensate. Those compensating muscles are the ones that feel tight and painful.
          </p>
          <p style={{ fontFamily: "var(--font-body)", fontSize: "1.05rem", color: "var(--muted)", lineHeight: 1.8, marginBottom: 14 }}>
            Muscle Activation Techniques is a root-cause, hands-on approach that identifies exactly which muscles have lost their neurological signal and restores their ability to contract properly.
          </p>
          <p style={{ fontFamily: "var(--font-body)", fontSize: "1.05rem", color: "var(--muted)", lineHeight: 1.8 }}>
            It's not massage. It's not stretching. It addresses the <em style={{ color: "var(--text)", fontStyle: "normal" }}>signal</em>, not just the symptom.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 2, marginBottom: 2 }}>
          {steps.map((s, i) => (
            <div key={i} style={{ padding: "36px 32px", background: i === 1 ? "var(--surface2)" : "var(--surface)", border: "1px solid var(--border)", borderTop: i === 1 ? "3px solid var(--red)" : "1px solid var(--border)" }}>
              <p style={{ fontFamily: "var(--font-display)", fontSize: "3rem", fontWeight: 900, color: "rgba(204,24,24,0.15)", lineHeight: 1, marginBottom: 20 }}>{s.num}</p>
              <h3 style={{ fontSize: "1.1rem", color: "var(--text)", marginBottom: 12 }}>{s.title}</h3>
              <p style={{ fontFamily: "var(--font-body)", fontSize: "0.88rem", color: "var(--muted)", lineHeight: 1.7 }}>{s.body}</p>
            </div>
          ))}
        </div>

        {/* NeuX Stim callout */}
        <div style={{ display: "grid", gridTemplateColumns: "auto 1fr", gap: 32, alignItems: "center", padding: "28px 36px", background: "var(--surface)", border: "1px solid var(--border)", borderLeft: "3px solid var(--red)" }}>
          <div style={{ flexShrink: 0 }}>
            <p style={{ fontFamily: "var(--font-body)", fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--red)", marginBottom: 8 }}>Advanced Sessions</p>
            <p style={{ fontFamily: "var(--font-display)", fontSize: "1rem", fontWeight: 900, color: "var(--text)", textTransform: "uppercase", letterSpacing: "0.02em", whiteSpace: "nowrap" }}>NeuX Stim</p>
            <p style={{ fontFamily: "var(--font-body)", fontSize: "0.72rem", color: "var(--dim)", marginTop: 4, whiteSpace: "nowrap" }}>FDA-Cleared · NXPro Device</p>
          </div>
          <p style={{ fontFamily: "var(--font-body)", fontSize: "0.92rem", color: "var(--muted)", lineHeight: 1.75 }}>
            Once muscles are activated on the table, that work can be reinforced and extended on the gym floor. Advanced sessions incorporate the NXPro by Neux Technologies — an FDA-cleared electrical neuromuscular stimulation device that bridges the gap between treatment and training. By pairing NeuX Stim with targeted exercise, the newly activated muscles are immediately loaded and strengthened, accelerating results and building the neuromuscular foundation that makes progress stick.
          </p>
        </div>
      </div>
    </section>
  );
}
