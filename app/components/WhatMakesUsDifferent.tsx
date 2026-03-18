import Image from "next/image";
const pillars = [
  { title: "Root-cause thinking", body: "The focus isn't just where you hurt. It's which muscles have lost their neurological signal and what compensation pattern that's created." },
  { title: "Hands-on neuromuscular assessment", body: "Every session is individualized. The process tests specific muscles, identifies signal loss, and retests in real time after treatment." },
  { title: "Performance and rehab lens", body: "Ohio Muscle Activation is for people who want to keep lifting, training, golfing, and moving well, not just manage symptoms indefinitely." },
];
const credentials = [
  { label: "MATRx Practitioner", sub: "Advanced Muscle Activation Techniques training, the highest level of MAT certification." },
  { label: "NASM Certified Personal Trainer", sub: "Strength and movement background that extends beyond treatment alone." },
  { label: "TPI Level 1 Certified", sub: "Added value for golfers and rotational athletes." },
  { label: "NXPro / Neux Stim", sub: "FDA-cleared electrical neuromuscular stimulation — used in advanced sessions to reinforce activation work from the table on the gym floor." },
];
export default function WhatMakesUsDifferent() {
  return (
    <section style={{ padding: "100px 48px", background: "var(--surface)", borderTop: "1px solid var(--border)" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <p style={{ fontFamily: "var(--font-body)", fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--red)", marginBottom: 16 }}>What Makes Us Different</p>
        <h2 style={{ fontSize: "clamp(1.8rem,3vw,2.6rem)", color: "var(--text)", marginBottom: 52 }}>A practitioner-led experience for people tired of generic care.</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 2, marginBottom: 2 }}>
          {pillars.map((p, i) => (
            <div key={i} style={{ padding: "36px 30px", background: "var(--bg)", border: "1px solid var(--border)" }}>
              <div style={{ width: 32, height: 3, background: "var(--red)", marginBottom: 20 }} />
              <h3 style={{ fontSize: "0.97rem", color: "var(--text)", marginBottom: 12 }}>{p.title}</h3>
              <p style={{ fontFamily: "var(--font-body)", fontSize: "0.88rem", color: "var(--muted)", lineHeight: 1.7 }}>{p.body}</p>
            </div>
          ))}
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 2, border: "1px solid var(--border)" }}>
          <div style={{ padding: "44px 40px", borderRight: "1px solid var(--border)", background: "var(--bg)" }}>
            <p style={{ fontFamily: "var(--font-body)", fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--red)", marginBottom: 16 }}>Your Practitioner</p>
            <h3 style={{ fontSize: "1.7rem", color: "var(--text)", marginBottom: 18, textTransform: "none", letterSpacing: "-0.01em" }}>Cameron Hunt</h3>
            <p style={{ fontFamily: "var(--font-body)", fontSize: "0.92rem", color: "var(--muted)", lineHeight: 1.8, marginBottom: 14 }}>
              Cameron founded Ohio Muscle Activation after his own lower-body injury progressed into severe sciatica and the usual treatment route failed to fully solve the problem. Finding Muscle Activation Techniques changed the trajectory of his recovery — and eventually changed his career path.
            </p>
            <p style={{ fontFamily: "var(--font-body)", fontSize: "0.92rem", color: "var(--muted)", lineHeight: 1.8, marginBottom: 28 }}>
              Today, he blends MATRx training with a personal training and golf-performance background, giving clients a higher-level neuromuscular experience built for both chronic-pain cases and active adults who want to keep performing at their best.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {credentials.map((c, i) => (
                <div key={i} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                  <div style={{ width: 5, height: 5, background: "var(--red)", marginTop: 7, flexShrink: 0 }} />
                  <div>
                    <p style={{ fontFamily: "var(--font-body)", fontWeight: 700, fontSize: "0.87rem", color: "var(--text)", marginBottom: 2 }}>{c.label}</p>
                    <p style={{ fontFamily: "var(--font-body)", fontSize: "0.78rem", color: "var(--dim)", lineHeight: 1.5 }}>{c.sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div style={{ padding: "44px 40px", background: "var(--bg)", display: "flex", flexDirection: "column", overflow: "hidden" }}>
            <div style={{ flex: 1, overflow: "hidden", border: "1px solid var(--border)" }}>
              <Image src="/cameron-headshot-new.jpg" alt="Cameron Hunt, founder of Ohio Muscle Activation" width={800} height={1000} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
