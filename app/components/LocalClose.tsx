import Image from "next/image";

export default function LocalClose() {
  return (
    <section id="about" style={{ padding: "100px 48px", background: "var(--bg)", borderTop: "1px solid var(--border)" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "72px 100px", alignItems: "center" }}>
        <div>
          <div style={{ overflow: "hidden", border: "1px solid var(--border)", marginBottom: 2 }}>
            <Image src="/mat-session-e.jpg" alt="Cameron Hunt performing an assessment during a MAT session in Powell, Ohio" width={1400} height={1050} style={{ width: "100%", height: "auto", display: "block" }} />
          </div>
          <div style={{ padding: "14px 18px", background: "var(--surface)", border: "1px solid var(--border)", borderTop: "2px solid var(--red)", display: "flex", alignItems: "center", gap: 12 }}>
            <svg width="12" height="15" viewBox="0 0 12 15" fill="none"><path d="M6 1A5 5 0 0111 6c0 3.5-5 8.5-5 8.5S1 9.5 1 6a5 5 0 015-5z" stroke="#cc1818" strokeWidth="1.2" /><circle cx="6" cy="6" r="1.5" stroke="#cc1818" strokeWidth="1.2" /></svg>
            <div>
              <p style={{ fontFamily: "var(--font-body)", fontWeight: 600, fontSize: "0.82rem", color: "var(--text)" }}>10516 Sawmill Road, Unit B · Powell, OH 43065</p>
              <p style={{ fontFamily: "var(--font-body)", fontSize: "0.72rem", color: "var(--dim)" }}>By appointment only · Call (614) 946-9071</p>
            </div>
          </div>
        </div>
        <div>
          <p style={{ fontFamily: "var(--font-body)", fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--red)", marginBottom: 16 }}>Trusted Local Care</p>
          <h2 style={{ fontSize: "clamp(1.8rem,3vw,2.6rem)", color: "var(--text)", marginBottom: 20 }}>A modern clinic for Powell, Dublin, Worthington, and greater Columbus.</h2>
          <p style={{ fontFamily: "var(--font-body)", fontSize: "0.97rem", color: "var(--muted)", lineHeight: 1.75, marginBottom: 14 }}>
            The site and the brand lean into what makes Ohio Muscle Activation compelling: private care, a clear point of view, and a practitioner with a real story behind the work.
          </p>
          <p style={{ fontFamily: "var(--font-body)", fontSize: "0.97rem", color: "var(--muted)", lineHeight: 1.75, marginBottom: 28 }}>
            Cameron's own injury experience is part of what makes the brand credible. He understands what it feels like to do the usual things, still feel stuck, and finally find a process that helps the body reconnect and move better again.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 32 }}>
            {["Powell", "Dublin", "Worthington", "Columbus", "Delaware County"].map(area => (
              <span key={area} style={{ padding: "5px 12px", background: "var(--surface)", border: "1px solid var(--border)", fontFamily: "var(--font-body)", fontSize: "0.75rem", color: "var(--muted)" }}>{area}</span>
            ))}
          </div>
          <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
            <a href="#booking" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "var(--red)", color: "var(--text)", fontFamily: "var(--font-display)", fontWeight: 900, fontSize: "0.82rem", padding: "14px 26px", textDecoration: "none", letterSpacing: "0.07em", textTransform: "uppercase" }}>
              Schedule a Diagnostic →
            </a>
            <a href="https://www.ohiomuscleactivation.com/about.html" target="_blank" rel="noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "transparent", border: "1px solid rgba(255,255,255,0.15)", color: "var(--text)", fontFamily: "var(--font-body)", fontWeight: 600, fontSize: "0.85rem", padding: "13px 22px", textDecoration: "none" }}>
              Read Cameron&apos;s Story →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
