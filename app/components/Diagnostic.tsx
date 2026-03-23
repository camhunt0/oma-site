"use client";

const includes = [
  "A focused muscle and movement assessment",
  "Plain-language explanation of what we find",
  "Clarity on which muscles have lost their neurological signal, and what that's causing",
  "A clear recommendation with no pressure to continue",
  "1 hour · No hidden fees · No tipping",
];

export default function Diagnostic() {
  return (
    <section
      id="booking"
      style={{
        padding: "100px 48px",
        background: "var(--surface)",
        borderTop: "1px solid var(--border)",
      }}
    >
      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "72px 100px",
          alignItems: "start",
        }}
      >
        <div>
          <p style={{ fontFamily: "var(--font-body)", fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--red)", marginBottom: 16 }}>Start Here</p>
          <h2 style={{ fontSize: "clamp(1.8rem,3vw,2.6rem)", color: "var(--text)", marginBottom: 20 }}>Begin with a Muscle Check Diagnostic.</h2>
          <p style={{ fontFamily: "var(--font-body)", fontSize: "0.97rem", color: "var(--muted)", lineHeight: 1.75, marginBottom: 28 }}>
            A focused, 1-on-1 evaluation designed to answer one question: which muscles have lost their neurological signal, and what is that causing in your body? You'll leave with clarity, not guesswork.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 32, padding: "24px 28px", background: "var(--bg)", border: "1px solid var(--border)" }}>
            {includes.map((item, i) => (
              <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
                <div style={{ width: 18, height: 18, background: "var(--red)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 2 }}>
                  <svg width="8" height="7" viewBox="0 0 8 7" fill="none"><path d="M1 3.5l2 2.5 4-5" stroke="white" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </div>
                <p style={{ fontFamily: "var(--font-body)", fontSize: "0.9rem", color: "var(--text)", lineHeight: 1.55 }}>{item}</p>
              </div>
            ))}
          </div>
          <div style={{ padding: "20px 24px", background: "var(--bg)", border: "1px solid var(--border)", borderLeft: "3px solid var(--red)" }}>
            <p style={{ fontFamily: "var(--font-body)", fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--dim)", marginBottom: 6 }}>Investment</p>
            <p style={{ fontFamily: "var(--font-display)", fontSize: "1.8rem", color: "var(--red)", fontWeight: 900 }}>$200</p>
            <p style={{ fontFamily: "var(--font-body)", fontSize: "0.82rem", color: "var(--muted)", marginTop: 4 }}>1 hour · No hidden fees · No tipping</p>
          </div>
        </div>
        <div>
          <div style={{ background: "var(--bg)", border: "1px solid var(--border)", borderTop: "3px solid var(--red)", padding: "36px 32px" }}>
            <p style={{ fontFamily: "var(--font-body)", fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--red)", marginBottom: 16 }}>Schedule Online</p>
            <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.3rem", color: "var(--text)", marginBottom: 20 }}>Book Your Diagnostic</h3>

            {/* Embed the widget iframe directly so it stays inside this card */}
            <div style={{ minHeight: 520 }}>
              <iframe
                title="Square Appointments Booking"
                src="https://app.squareup.com/appointments/buyer/widget/51xre9soyw3lm6/C3Z76D22JMF7Z"
                style={{
                  width: "100%",
                  height: "100%",
                  minHeight: 520,
                  border: "none",
                }}
                allow="payment app.squareup.com"
              />
            </div>

            <div style={{ marginTop: 20, paddingTop: 20, borderTop: "1px solid var(--border)", display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 16 }}>
              {["Private 1-on-1 care", "Powell, Ohio", "By appointment only"].map(chip => (
                <span key={chip} style={{ padding: "6px 12px", border: "1px solid var(--border)", fontFamily: "var(--font-body)", fontSize: "0.75rem", color: "var(--muted)" }}>{chip}</span>
              ))}
            </div>
            <div style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" style={{ flexShrink: 0, marginTop: 2 }}><circle cx="7" cy="7" r="6" stroke="var(--dim)" strokeWidth="1" /><path d="M7 6v3M7 4.5v.3" stroke="var(--dim)" strokeWidth="1.1" strokeLinecap="round" /></svg>
              <p style={{ fontFamily: "var(--font-body)", fontSize: "0.78rem", color: "var(--dim)", lineHeight: 1.6 }}>
                Prefer to text? Reach Cameron directly at <a href="sms:6149469071" style={{ color: "var(--muted)" }}>(614) 946-9071</a>. No obligation after the diagnostic. You'll leave with clarity on what was found and whether continuing care makes sense.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
