export default function WhyNothing() {
  const reasons = [
    { title: "Massage can calm symptoms without changing the pattern", body: "When the body is protecting around an inhibited muscle, the tension returns because the compensation pattern never changed." },
    { title: "Stretching improves range, but not always control", body: "If a muscle isn't contracting well, the body may still avoid owning that range, which is why flexibility work can feel good but fail to stick." },
    { title: "PT strengthens movement patterns", body: "But if the muscles in that pattern have been neurologically inhibited, strengthening reinforces compensation rather than correcting it." },
    { title: "Adjustments don't hold when stability is missing", body: "Structure often shifts back when the muscular support system around the joint isn't working the way it should." },
  ];
  return (
    <section id="how-it-works" style={{ padding: "100px 48px", background: "var(--surface)", borderTop: "1px solid var(--border)" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "72px 100px", alignItems: "start" }}>
        <div>
          <p style={{ fontFamily: "var(--font-body)", fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--red-text)", marginBottom: 16 }}>Why Other Treatments Don't Last</p>
          <h2 style={{ fontSize: "clamp(1.8rem,3vw,2.6rem)", color: "var(--text)", marginBottom: 20 }}>If it helped... but didn't last. Here's why.</h2>
          <p style={{ fontFamily: "var(--font-body)", fontSize: "0.97rem", color: "var(--muted)", lineHeight: 1.75, marginBottom: 14 }}>Most recurring pain isn't just a flexibility issue. It's a control issue. When certain muscles stop contributing well, the body shifts stress elsewhere. That's why you can feel temporary relief while the same areas keep getting overloaded.</p>
          <p style={{ fontFamily: "var(--font-body)", fontSize: "0.97rem", color: "var(--muted)", lineHeight: 1.75 }}>Until the inactive muscles are addressed, the compensators stay overloaded and the problem keeps returning.</p>
          <div style={{ marginTop: 28, padding: "18px 22px", borderLeft: "3px solid var(--red)", background: "var(--red-dim)" }}>
            <p style={{ fontFamily: "var(--font-body)", fontSize: "0.88rem", color: "var(--text)", fontStyle: "italic", lineHeight: 1.65 }}>This isn't a criticism of your current provider. Many excellent PTs and chiropractors refer clients to MAT precisely because they recognize the gap.</p>
          </div>
        </div>
        <div>
          {reasons.map((r, i) => (
            <div key={i} style={{ padding: "20px 0", borderBottom: "1px solid var(--border)", display: "flex", gap: 14 }}>
              <span style={{ color: "var(--red-text)", fontSize: "1rem", marginTop: 2, flexShrink: 0, fontWeight: 900 }}>→</span>
              <div>
                <p style={{ fontFamily: "var(--font-display)", fontSize: "0.88rem", fontWeight: 900, color: "var(--text)", marginBottom: 5, textTransform: "uppercase", letterSpacing: "0.02em" }}>{r.title}</p>
                <p style={{ fontFamily: "var(--font-body)", fontSize: "0.84rem", color: "var(--muted)", lineHeight: 1.65 }}>{r.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
