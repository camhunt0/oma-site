import Image from "next/image";

// Change #4: "Read Cameron's Story" removed (old site being shut down)
// Change #7: Full address updated to include Powell, OH 43065
// Change #8: Google Maps embed added, copy rewritten to make sense
export default function LocalClose() {
  return (
    <section id="about" style={{ padding: "100px 48px", background: "var(--bg)", borderTop: "1px solid var(--border)" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "72px 80px", alignItems: "start" }}>

          {/* Left — map + address */}
          <div>
            {/* Change #8: Google Maps embed */}
            <div style={{ width: "100%", height: "100%", minHeight: 520, overflow: "hidden", border: "1px solid var(--border)", marginBottom: 2 }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3046.8!2d-83.0685!3d40.1578!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8838eed4acf88b53%3A0x847a7f3c69cc6c0e!2s10516%20Sawmill%20Rd%20Suite%20B%2C%20Powell%2C%20OH%2043065!5e0!3m2!1sen!2sus!4v1"
                width="100%"
                height="100%"
                style={{ border: 0, display: "block", filter: "invert(90%) hue-rotate(180deg)", minHeight: 520 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ohio Muscle Activation location"
              />
            </div>
            {/* Change #7: Full address */}
            <div style={{ padding: "16px 20px", background: "var(--surface)", border: "1px solid var(--border)", borderTop: "2px solid var(--red)", display: "flex", alignItems: "flex-start", gap: 14 }}>
              <svg width="14" height="18" viewBox="0 0 14 18" fill="none" style={{ flexShrink: 0, marginTop: 2 }}><path d="M7 1A6 6 0 0113 7c0 4.5-6 10-6 10S1 11.5 1 7a6 6 0 016-6z" stroke="#cc1818" strokeWidth="1.3" /><circle cx="7" cy="7" r="2" stroke="#cc1818" strokeWidth="1.3" /></svg>
              <div>
                <p style={{ fontFamily: "var(--font-body)", fontWeight: 700, fontSize: "0.88rem", color: "var(--text)", marginBottom: 3 }}>10516 Sawmill Rd, Suite B</p>
                <p style={{ fontFamily: "var(--font-body)", fontSize: "0.82rem", color: "var(--muted)" }}>Powell, OH 43065</p>
                <p style={{ fontFamily: "var(--font-body)", fontSize: "0.78rem", color: "var(--dim)", marginTop: 4 }}>By appointment only · (614) 946-9071</p>
              </div>
            </div>
          </div>

          {/* Right — copy (Change #8: rewritten to make sense) */}
          <div>
            <p style={{ fontFamily: "var(--font-body)", fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--red)", marginBottom: 16 }}>Trusted Local Care</p>
            <h2 style={{ fontSize: "clamp(1.8rem,3vw,2.6rem)", color: "var(--text)", marginBottom: 20 }}>Private, 1-on-1 neuromuscular care in Powell, Ohio.</h2>
            <p style={{ fontFamily: "var(--font-body)", fontSize: "0.97rem", color: "var(--muted)", lineHeight: 1.8, marginBottom: 16 }}>
              Ohio Muscle Activation operates as a private, appointment-only clinic off Sawmill Road. No shared gym floor, no rushed sessions, no generic treatment protocols. Every appointment is one practitioner, one client, full focus.
            </p>
            <p style={{ fontFamily: "var(--font-body)", fontSize: "0.97rem", color: "var(--muted)", lineHeight: 1.8, marginBottom: 28 }}>
              Cameron founded Ohio Muscle Activation after his own experience with sciatica made clear that most treatment approaches address the symptom, not the neurological source. That firsthand understanding shapes every session. He knows what it feels like to do the usual things and stay stuck, and what it feels like when the right muscles finally come back online.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 32 }}>
              {["Powell", "Dublin", "Worthington", "Columbus", "Central Ohio"].map(area => (
                <span key={area} style={{ padding: "5px 12px", background: "var(--surface)", border: "1px solid var(--border)", fontFamily: "var(--font-body)", fontSize: "0.75rem", color: "var(--muted)" }}>{area}</span>
              ))}
            </div>
            <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
              <a href="#booking" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "var(--red)", color: "var(--text)", fontFamily: "var(--font-display)", fontWeight: 900, fontSize: "0.82rem", padding: "14px 26px", textDecoration: "none", letterSpacing: "0.07em", textTransform: "uppercase" }}>
                Schedule a Diagnostic →
              </a>
              <a href="tel:6149469071" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "transparent", border: "1px solid rgba(255,255,255,0.15)", color: "var(--text)", fontFamily: "var(--font-body)", fontWeight: 600, fontSize: "0.85rem", padding: "13px 22px", textDecoration: "none" }}>
                Call (614) 946-9071
              </a>
            </div>
          </div>
        </div>
      </div>
      <style>{`@media(max-width:860px){section>div>div[style*="grid-template-columns"]{grid-template-columns:1fr!important;}}`}</style>
    </section>
  );
}
