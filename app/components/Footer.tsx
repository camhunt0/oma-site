import Image from "next/image";
import Link from "next/link";
export default function Footer({ showCTA = true }: { showCTA?: boolean }) {
  return (
    <footer style={{ background: "var(--surface)", borderTop: "1px solid var(--border)" }}>
      {showCTA && (
        <div style={{ padding: "80px 48px", background: "#0d0d0d", borderTop: "2px solid var(--red)", textAlign: "center" }}>
          <p style={{ fontFamily: "var(--font-body)", fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--red-text)", marginBottom: 16 }}>Ready to Get Answers</p>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.6rem,2.8vw,2.4rem)", color: "var(--text)", lineHeight: 1.15, maxWidth: 520, margin: "0 auto 28px", textTransform: "uppercase" }}>
            Ready to understand what your body has been missing?
          </h2>
          <div style={{ display: "flex", gap: 14, alignItems: "center", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/#booking" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "var(--red)", color: "var(--text)", fontFamily: "var(--font-display)", fontWeight: 900, fontSize: "0.82rem", padding: "15px 28px", textDecoration: "none", letterSpacing: "0.07em", textTransform: "uppercase" }}>
              Schedule a Diagnostic
            </Link>
            <a href="sms:6149469071" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "transparent", border: "1px solid rgba(255,255,255,0.2)", color: "var(--text)", fontFamily: "var(--font-body)", fontWeight: 600, fontSize: "0.85rem", padding: "14px 22px", textDecoration: "none", letterSpacing: "0.04em" }}>
              Text (614) 946-9071
            </a>
          </div>
          <p style={{ fontFamily: "var(--font-body)", fontSize: "0.75rem", color: "var(--dim)", marginTop: 16 }}>$200 diagnostic · HSA accepted · Insurance not accepted</p>
        </div>
      )}
      <div style={{ padding: "28px 48px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 18, borderTop: "1px solid var(--border)" }}>
        <div>
          <Link href="/" style={{ display: "flex", alignItems: "center", textDecoration: "none", marginBottom: 6 }}>
            <Image src="/logo-white.png" alt="Ohio Muscle Activation" width={150} height={44} style={{ height: "28px", width: "auto", opacity: 0.7 }} />
          </Link>
          <p style={{ fontFamily: "var(--font-body)", fontSize: "0.72rem", color: "var(--dim)" }}>10516 Sawmill Rd, Suite B · Powell, OH 43065</p>
        </div>
        <div style={{ display: "flex", gap: 24 }}>
         {[
            { label: "How It Works", href: "/#how-it-works" },
            { label: "Who It Helps", href: "/#who-it-helps" },
            { label: "First Visit", href: "/#first-visit" },
            { label: "About", href: "/#about" },
          ].map(({ label, href }) => (
            <Link key={label} href={href} style={{ fontFamily: "var(--font-body)", fontSize: "0.78rem", color: "var(--dim)", textDecoration: "none", letterSpacing: "0.05em", textTransform: "uppercase" }}>{label}</Link>
          ))}
        </div>
        <p style={{ fontFamily: "var(--font-body)", fontSize: "0.7rem", color: "var(--dim)" }}>
          © {new Date().getFullYear()} Ohio Muscle Activation · Powell, Ohio
        </p>
      </div>
    </footer>
  );
}
