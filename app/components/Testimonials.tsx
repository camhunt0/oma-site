export default function Testimonials() {
  const testimonials = [
    {
      segment: "Golfer · Client since 2018",
      quote: "Cameron is professional and very knowledgeable. I have seen great value in my sessions with him starting with recovery from a golf injury to building and maintaining muscle strength. I am glad I found him!",
      name: "Jack R.",
    },
    {
      segment: "Triathlete · Ironman 70.3",
      quote: "Four months ago I was experiencing lower back pain due to weak hip-flexors while training for an Ironman 70.3. After seeing Cameron several times, each session ended in greater flexibility and less back pain than when I had arrived. I was able to PR my Ironman 70.3 and I give major credit to Cameron's ability in helping me with my muscle pain.",
      name: "Nick S.",
    },
    {
      segment: "Collegiate Golfer",
      quote: "I had been dealing with hip pain for over 3 years that seriously limited my golf game. After just one session of Muscle Activation Techniques, I was able to hinge my hips again without that constant burning in my hamstrings and low back. This was the first time I felt like someone actually fixed the root of the problem, not just treated the symptoms.",
      name: "Kyle G.",
    },
    {
      segment: "Youth Soccer · Parent",
      quote: "My son Makai started having heel pain after a tough soccer tackle. After bringing him in for Muscle Activation Techniques, not only did his pain improve, but he actually understood what was going on with his body. He described it as 'giving his lazy muscles caffeine,' which honestly says it all.",
      name: "Paul G.",
    },
  ];

  return (
    <section style={{ padding: "100px 48px", background: "var(--bg)", borderTop: "1px solid var(--border)" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ maxWidth: 600, marginBottom: 52 }}>
          <p style={{ fontFamily: "var(--font-body)", fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--red-text)", marginBottom: 16 }}>Real Results</p>
          <h2 style={{ fontSize: "clamp(1.8rem,3vw,2.6rem)", color: "var(--text)", marginBottom: 16 }}>What clients say after they finally get answers.</h2>
          <p style={{ fontFamily: "var(--font-body)", fontSize: "0.95rem", color: "var(--muted)", lineHeight: 1.75 }}>
            Serving clients of all ages in Powell, Dublin, and greater Columbus since 2018.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 2, marginBottom: 2 }}>
          {testimonials.map((t, i) => (
            <div key={i} style={{ padding: "36px 32px", background: "var(--surface)", border: "1px solid var(--border)", borderTop: "2px solid var(--red)" }}>
              <p style={{ fontFamily: "var(--font-body)", fontSize: "0.95rem", fontStyle: "italic", color: "var(--text)", lineHeight: 1.65, marginBottom: 20 }}>"{t.quote}"</p>
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <div style={{ width: 20, height: 2, background: "var(--red)" }} />
                <div>
                  <p style={{ fontFamily: "var(--font-body)", fontWeight: 700, fontSize: "0.8rem", color: "var(--text)", textTransform: "uppercase", letterSpacing: "0.05em" }}>{t.name}</p>
                  <p style={{ fontFamily: "var(--font-body)", fontSize: "0.7rem", color: "var(--red-text)", letterSpacing: "0.07em", textTransform: "uppercase" }}>{t.segment}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div style={{ padding: "28px 32px", background: "var(--surface)", border: "1px solid var(--border)", display: "grid", gridTemplateColumns: "1fr auto", gap: 24, alignItems: "center" }}>
          <div>
            <h3 style={{ fontSize: "1.1rem", color: "var(--text)", marginBottom: 8 }}>Want to see more client feedback?</h3>
            <p style={{ fontFamily: "var(--font-body)", fontSize: "0.88rem", color: "var(--muted)", lineHeight: 1.65 }}>Read current reviews from clients across Powell, Dublin, and Columbus.</p>
          </div>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap", alignItems: "center" }}>
            <a href="https://maps.google.com/?cid=10957191009896197737" target="_blank" rel="noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "var(--red)", color: "var(--text)", fontFamily: "var(--font-display)", fontWeight: 900, fontSize: "0.75rem", padding: "12px 20px", textDecoration: "none", letterSpacing: "0.07em", textTransform: "uppercase", whiteSpace: "nowrap" }}>
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
