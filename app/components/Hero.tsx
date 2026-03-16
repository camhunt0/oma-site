import Image from "next/image";

const chips = ["Chronic tightness", "Golf performance", "Post-surgical recovery", "Neck, hip, knee & low back"];

export default function Hero() {
  return (
    <section style={{
      minHeight: "100vh", padding: "120px 48px 80px",
      background: "#0d0d0d", position: "relative", overflow: "hidden",
      borderBottom: "1px solid var(--border)",
    }}>
      {/* Red vignette */}
      <div style={{ position: "absolute", top: 0, right: 0, width: "45%", height: "100%", background: "linear-gradient(to left, rgba(204,24,24,0.1), transparent)", zIndex: 0 }} />
      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 2, background: "var(--red)", zIndex: 2 }} />

      <div style={{ maxWidth: 1100, margin: "0 auto", position: "relative", zIndex: 1, display: "grid", gridTemplateColumns: "1.15fr 0.85fr", gap: 40, alignItems: "end" }}>

        {/* Left — copy */}
        <div>
          <p style={{ fontFamily: "var(--font-body)", fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--red)", marginBottom: 20, animation: "fadeUp 0.5s 0.1s ease both" }}>
            Powell, Ohio · MATRx Practitioner · 1-on-1 Care
          </p>
          <h1 style={{ fontSize: "clamp(2.8rem,6vw,5.4rem)", color: "var(--text)", lineHeight: 1.06, marginBottom: 22, animation: "fadeUp 0.6s 0.2s ease both" }}>
            You've stretched.<br />
            You've done PT.<br />
            <span style={{ color: "var(--red)" }}>But it keeps<br />coming back.</span>
          </h1>
          <p style={{ fontFamily: "var(--font-body)", fontSize: "1.05rem", fontWeight: 300, color: "var(--muted)", maxWidth: 540, lineHeight: 1.75, marginBottom: 32, animation: "fadeUp 0.6s 0.35s ease both" }}>
            Ohio Muscle Activation helps active adults, golfers, and chronic-pain clients find the muscles their body has stopped trusting — so movement feels stronger, cleaner, and more stable.
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: 16, flexWrap: "wrap", marginBottom: 10, animation: "fadeUp 0.6s 0.45s ease both" }}>
            <a href="#booking" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "var(--red)", color: "var(--text)", fontFamily: "var(--font-display)", fontWeight: 900, fontSize: "0.82rem", padding: "15px 28px", textDecoration: "none", letterSpacing: "0.07em", textTransform: "uppercase" }}>
              Start with a Diagnostic →
            </a>
            <a href="#about" style={{ fontFamily: "var(--font-body)", fontSize: "0.88rem", color: "var(--muted)", textDecoration: "none", borderBottom: "1px solid rgba(255,255,255,0.15)", paddingBottom: 2 }}>
              Meet Cameron →
            </a>
          </div>
          <p style={{ fontFamily: "var(--font-body)", fontSize: "0.75rem", color: "var(--dim)", marginBottom: 28, animation: "fadeUp 0.6s 0.5s ease both" }}>
            A focused evaluation to identify what's holding your body back. Credited toward treatment if you continue.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8, animation: "fadeUp 0.6s 0.55s ease both" }}>
            {chips.map(c => (
              <span key={c} style={{ padding: "7px 14px", border: "1px solid var(--border)", fontFamily: "var(--font-body)", fontSize: "0.77rem", color: "var(--muted)" }}>{c}</span>
            ))}
          </div>
        </div>

        {/* Right — photo stack */}
        <div style={{ display: "grid", gap: 14, animation: "fadeUp 0.7s 0.3s ease both" }}>
          {/* Headshot */}
          <div style={{ overflow: "hidden", border: "1px solid var(--border)", background: "var(--surface)", minHeight: 380 }}>
            <Image src="/cameron-headshot-new.jpg" alt="Cameron Hunt, founder of Ohio Muscle Activation" width={800} height={1000} priority style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
          </div>

          {/* Quote card */}
          <div style={{ padding: "24px 28px", background: "var(--surface)", border: "1px solid var(--border)", borderLeft: "3px solid var(--red)" }}>
            <p style={{ fontFamily: "var(--font-body)", fontSize: "0.92rem", fontStyle: "italic", color: "var(--text)", lineHeight: 1.6, marginBottom: 12 }}>
              "After 18 months of hip pain that three PTs couldn't resolve, I had full range of motion back in 4 sessions."
            </p>
            {/* ⚠️ PLACEHOLDER: Replace with real client name/segment */}
            <p style={{ fontFamily: "var(--font-body)", fontSize: "0.7rem", fontWeight: 700, color: "var(--red)", letterSpacing: "0.08em", textTransform: "uppercase" }}>— Client, Powell · Runner</p>
          </div>

          {/* Stat row */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 2 }}>
            {[
              { label: "Location", value: "Sawmill Rd, Suite B" },
              { label: "Call", value: "(614) 946-9071" },
              { label: "Style", value: "Private 1-on-1" },
            ].map(s => (
              <div key={s.label} style={{ padding: "14px 16px", background: "var(--surface)", border: "1px solid var(--border)" }}>
                <p style={{ fontFamily: "var(--font-body)", fontSize: "0.62rem", letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--dim)", marginBottom: 5 }}>{s.label}</p>
                <p style={{ fontFamily: "var(--font-body)", fontSize: "0.82rem", fontWeight: 600, color: "var(--text)" }}>{s.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 860px) {
          section > div[style*="grid-template-columns"] { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
