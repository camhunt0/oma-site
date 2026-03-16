export default function Testimonials() {
  // ⚠️ PLACEHOLDER: Replace with real client quotes as you collect them
  // Format: condition + duration + what they tried + concrete outcome
  // Until then, the Google Review link below drives real social proof
  const testimonials = [
    { segment: "Runner · Powell", quote: "After 18 months of hip pain that three PTs couldn't resolve, I had full range of motion back in 4 sessions. I'm back to running trail mileage I hadn't hit in two years.", name: "[Client Name]" },
    { segment: "Golfer · Dublin", quote: "My swing was restricted for almost a year. Within two sessions at OMA, my rotation opened up noticeably. My pro commented without me saying anything.", name: "[Client Name]" },
    { segment: "Post-Surgery · Powell", quote: "After my rotator cuff surgery, my shoulder just wouldn't 'turn on' in PT. I booked the diagnostic mostly out of desperation. I felt a difference the same day.", name: "[Client Name]" },
    { segment: "Desk Worker · Worthington", quote: "I had chronic neck tension for three years. Massage would relieve it for two days, then it came back. After two MAT sessions, I finally understood why — and it stopped.", name: "[Client Name]" },
  ];

  return (
    <section style={{ padding: "100px 48px", background: "var(--bg)", borderTop: "1px solid var(--border)" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ maxWidth: 600, marginBottom: 52 }}>
          <p style={{ fontFamily: "var(--font-body)", fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--red)", marginBottom: 16 }}>Real Results</p>
          <h2 style={{ fontSize: "clamp(1.8rem,3vw,2.6rem)", color: "var(--text)", marginBottom: 16 }}>What clients say after they finally get answers.</h2>
          {/* ⚠️ PLACEHOLDER: Add real data point — "X clients served" or "X% improvement" */}
          <p style={{ fontFamily: "var(--font-body)", fontSize: "0.82rem", color: "var(--dim)", lineHeight: 1.6 }}>⚠️ Add proof point once defensible: "Over X clients served in Powell and Dublin"</p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 2, marginBottom: 2 }}>
          {testimonials.map((t, i) => (
            <div key={i} style={{ padding: "36px 32px", background: "var(--surface)", border: "1px solid var(--border)", borderTop: "2px solid var(--red)", position: "relative" }}>
              <div style={{ position: "absolute", top: 10, right: 14, background: "rgba(204,24,24,0.1)", border: "1px solid rgba(204,24,24,0.25)", padding: "2px 7px" }}>
                <p style={{ fontFamily: "var(--font-body)", fontSize: "0.58rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--red)" }}>Placeholder</p>
              </div>
              <p style={{ fontFamily: "var(--font-body)", fontSize: "0.95rem", fontStyle: "italic", color: "var(--text)", lineHeight: 1.65, marginBottom: 20 }}>"{t.quote}"</p>
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <div style={{ width: 20, height: 2, background: "var(--red)" }} />
                <div>
                  <p style={{ fontFamily: "var(--font-body)", fontWeight: 700, fontSize: "0.8rem", color: "var(--text)", textTransform: "uppercase", letterSpacing: "0.05em" }}>{t.name}</p>
                  <p style={{ fontFamily: "var(--font-body)", fontSize: "0.7rem", color: "var(--red)", letterSpacing: "0.07em", textTransform: "uppercase" }}>{t.segment}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Google Reviews CTA — their good idea */}
        <div style={{ padding: "28px 32px", background: "var(--surface)", border: "1px solid var(--border)", display: "grid", gridTemplateColumns: "1fr auto", gap: 24, alignItems: "center" }}>
          <div>
            <h3 style={{ fontSize: "1.1rem", color: "var(--text)", marginBottom: 8 }}>Want to see real client feedback?</h3>
            <p style={{ fontFamily: "var(--font-body)", fontSize: "0.88rem", color: "var(--muted)", lineHeight: 1.65 }}>Read current reviews and session highlights from clients across Powell, Dublin, and Columbus.</p>
          </div>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap", alignItems: "center" }}>
            <a href="https://www.google.com/search?q=ohio+muscle+activation#mpd=~6352610208574477916/customers/reviews" target="_blank" rel="noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "var(--red)", color: "var(--text)", fontFamily: "var(--font-display)", fontWeight: 900, fontSize: "0.75rem", padding: "12px 20px", textDecoration: "none", letterSpacing: "0.07em", textTransform: "uppercase", whiteSpace: "nowrap" }}>
              Read Google Reviews →
            </a>
            <a href="https://www.instagram.com/ohiomuscleactivation/" target="_blank" rel="noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "transparent", border: "1px solid rgba(255,255,255,0.15)", color: "var(--text)", fontFamily: "var(--font-body)", fontWeight: 600, fontSize: "0.8rem", padding: "11px 18px", textDecoration: "none", letterSpacing: "0.04em", whiteSpace: "nowrap" }}>
              Instagram →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
