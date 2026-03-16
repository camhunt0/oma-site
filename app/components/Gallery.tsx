import Image from "next/image";

const photos = [
  { src: "/mat-session-a.jpg", alt: "Cameron Hunt performing a lower-body assessment during a MAT session" },
  { src: "/mat-session-e.jpg", alt: "Cameron Hunt guiding spinal and torso movement during a MAT session" },
  { src: "/mat-session-c.jpg", alt: "Cameron Hunt working one-on-one with a client during treatment" },
];

export default function Gallery() {
  return (
    <section style={{ padding: "100px 48px", background: "var(--surface2)", borderTop: "1px solid var(--border)" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <p style={{ fontFamily: "var(--font-body)", fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--red)", marginBottom: 16 }}>Inside the Experience</p>
        <h2 style={{ fontSize: "clamp(1.8rem,3vw,2.6rem)", color: "var(--text)", marginBottom: 16, maxWidth: 560 }}>Hands-on, highly specific care that feels premium from the first visit.</h2>
        <p style={{ fontFamily: "var(--font-body)", fontSize: "0.97rem", color: "var(--muted)", lineHeight: 1.75, maxWidth: 600, marginBottom: 40 }}>
          Private care, precise assessment, and a practitioner who works directly with each client — not a rushed, generic treatment flow.
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 2 }}>
          {photos.map((p) => (
            <div key={p.src} style={{ overflow: "hidden", border: "1px solid var(--border)", aspectRatio: "4/5" }}>
              <Image src={p.src} alt={p.alt} width={1400} height={1750} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
