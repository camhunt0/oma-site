const providers = ["Orthopedic surgeons", "Physical therapists", "Personal trainers", "Golf professionals"];
const points = [
  "Useful for clients who plateau in standard rehab",
  "Valuable when imaging is clean but function is still off",
  "Helpful for golfers and athletes limited by rotation or stability",
  "Appropriate for people who keep recurring in the same pain pattern",
];

export default function ReferralModule() {
  return (
    <section style={{ padding: "100px 48px", background: "var(--surface2)", borderTop: "1px solid var(--border)" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "60px 80px", alignItems: "center" }}>
        <div>
          <p style={{ fontFamily: "var(--font-body)", fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--red)", marginBottom: 16 }}>For Referred Clients</p>
          <h2 style={{ fontSize: "clamp(1.6rem,2.8vw,2.3rem)", color: "var(--text)", marginBottom: 18 }}>Built to fit alongside doctors, PTs, trainers, and coaches.</h2>
          <p style={{ fontFamily: "var(--font-body)", fontSize: "0.97rem", color: "var(--muted)", lineHeight: 1.75, marginBottom: 14 }}>
            Ohio Muscle Activation complements a client's existing care team by addressing muscle function and movement quality when other smart providers still see a gap.
          </p>
          <p style={{ fontFamily: "var(--font-body)", fontSize: "0.97rem", color: "var(--muted)", lineHeight: 1.75, marginBottom: 24 }}>
            You don't need to choose between MAT and your current care — we complement it.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 28 }}>
            {providers.map(p => (
              <span key={p} style={{ padding: "7px 14px", border: "1px solid var(--border)", fontFamily: "var(--font-body)", fontSize: "0.77rem", color: "var(--muted)" }}>{p}</span>
            ))}
          </div>
          <a href="#" style={{ fontFamily: "var(--font-body)", fontSize: "0.88rem", color: "var(--muted)", textDecoration: "none", borderBottom: "1px solid rgba(255,255,255,0.1)", paddingBottom: 2 }}>
            Learn how MAT complements physical therapy →
          </a>
        </div>
        <div style={{ background: "var(--bg)", border: "1px solid var(--border)", padding: "32px 28px" }}>
          <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1rem", color: "var(--text)", marginBottom: 20 }}>Referral-Friendly Positioning</h3>
          <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
            {points.map((item, i) => (
              <div key={i} style={{ display: "flex", gap: 14, alignItems: "flex-start", padding: "16px 0", borderBottom: i < points.length - 1 ? "1px solid var(--border)" : "none" }}>
                <div style={{ width: 18, height: 18, background: "rgba(204,24,24,0.12)", border: "1px solid rgba(204,24,24,0.3)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 2 }}>
                  <svg width="8" height="7" viewBox="0 0 8 7" fill="none"><path d="M1 3.5l2 2.5 4-5" stroke="#cc1818" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </div>
                <p style={{ fontFamily: "var(--font-body)", fontSize: "0.87rem", color: "var(--muted)", lineHeight: 1.6 }}>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
