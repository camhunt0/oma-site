export default function WhoItHelps() {
  const segments = [
    { icon: "⛳", label: "Golfers", headline: "Your swing isn't limited by flexibility — it's limited by muscles that aren't firing.", detail: "For players restricted through the backswing, struggling to clear the hips, or wanting a body that can support a better swing." },
    { icon: "🏃", label: "Runners", headline: "Tight muscles compensate for weak ones. MAT finds the weak link.", detail: "Helpful for recurring hip, knee, IT band, and low-back issues when mobility and strength work haven't fully solved the pattern." },
    { icon: "💼", label: "Desk Workers", headline: "Your neck pain keeps coming back because it's a muscle activation problem.", detail: "Built for the person whose neck, shoulders, or lower back tighten up no matter how often they stretch or get massage." },
    { icon: "🏥", label: "Post-Surgery", headline: "We activate the muscles your body shut down after surgery.", detail: "A strong fit when muscles around a surgery site still feel asleep or difficult to reconnect with, even after rehab has started." },
    { icon: "🏋️", label: "Active Adults", headline: "Keep lifting, training, golfing — without constantly managing flare-ups.", detail: "For people who want to stay active and strong without recurring tightness becoming the limiting factor." },
    { icon: "🎯", label: "Told 'Everything Looks Fine'", headline: "If it doesn't feel fine, something is being missed.", detail: "Especially useful when imaging is clean but your body still doesn't feel right and you know something is still being missed." },
  ];
  return (
    <section id="who-it-helps" style={{ padding: "100px 48px", background: "var(--bg)", borderTop: "1px solid var(--border)" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ maxWidth: 600, marginBottom: 56 }}>
          <p style={{ fontFamily: "var(--font-body)", fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--red)", marginBottom: 16 }}>Who This Is For</p>
          <h2 style={{ fontSize: "clamp(1.8rem,3vw,2.6rem)", color: "var(--text)", marginBottom: 16 }}>People who are done guessing and ready for a more specific answer.</h2>
          <p style={{ fontFamily: "var(--font-body)", fontSize: "0.97rem", color: "var(--muted)", lineHeight: 1.75 }}>Ohio Muscle Activation is often the next step for clients who have already done a lot of the right things but still can't get lasting change.</p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 2 }}>
          {segments.map((s, i) => (
            <div key={i} style={{ padding: "32px 28px", background: "var(--surface)", border: "1px solid var(--border)" }}>
              <div style={{ fontSize: "1.4rem", marginBottom: 12 }}>{s.icon}</div>
              <p style={{ fontFamily: "var(--font-body)", fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--red)", marginBottom: 10 }}>{s.label}</p>
              <h3 style={{ fontSize: "0.95rem", color: "var(--text)", marginBottom: 10, lineHeight: 1.3 }}>{s.headline}</h3>
              <p style={{ fontFamily: "var(--font-body)", fontSize: "0.82rem", color: "var(--muted)", lineHeight: 1.65 }}>{s.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
