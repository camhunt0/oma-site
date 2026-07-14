"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
const links = [
  { label: "How It Works", href: "/#how-it-works" },
  { label: "Who It Helps", href: "/#who-it-helps" },
  { label: "First Visit", href: "/#first-visit" },
  { label: "About", href: "/#about" },
];
export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);
  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMenuOpen(false);
        toggleRef.current?.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen]);
  return (
    <>
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        padding: "10px 40px",
        display: "flex", alignItems: "center", justifyContent: "space-between",
        background: scrolled ? "rgba(10,10,10,0.96)" : "#0d0d0d",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: "2px solid #cc1818",
        transition: "background 0.3s",
      }}>
        <Link href="/" style={{ display: "flex", alignItems: "center", textDecoration: "none" }}>
          <Image src="/logo-white.png" alt="Ohio Muscle Activation" width={200} height={58}
            style={{ height: "44px", width: "auto" }} priority />
        </Link>
        <div style={{ display: "flex", alignItems: "center", gap: 28 }} className="nav-desktop">
          {links.map(({ label, href }) => (
            <Link key={label} href={href} style={{
              fontFamily: "var(--font-body)", fontSize: "0.8rem", fontWeight: 500,
              color: "var(--muted)", textDecoration: "none",
              letterSpacing: "0.06em", textTransform: "uppercase",
            }}>{label}</Link>
          ))}
          <a href="sms:+16149469071" style={{
            fontFamily: "var(--font-body)", fontWeight: 600, fontSize: "0.78rem",
            color: "var(--text)", background: "transparent",
            border: "1px solid rgba(255,255,255,0.15)", padding: "9px 18px",
            textDecoration: "none", letterSpacing: "0.05em", textTransform: "uppercase",
          }}>(614) 946-9071</a>
          <Link href="/#booking" style={{
            fontFamily: "var(--font-display)", fontWeight: 900, fontSize: "0.75rem",
            color: "var(--text)", background: "var(--red)",
            padding: "10px 20px", textDecoration: "none",
            letterSpacing: "0.07em", textTransform: "uppercase",
          }}>Book Diagnostic</Link>
        </div>
        <button ref={toggleRef} onClick={() => setMenuOpen(p => !p)}
          style={{ display: "none", background: "none", border: "1px solid rgba(255,255,255,0.15)", color: "var(--text)", padding: "8px 12px", fontSize: "1.2rem", cursor: "pointer" }}
          className="nav-toggle" aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen} aria-controls="mobile-menu">
          {menuOpen ? "✕" : "☰"}
        </button>
      </nav>
      {menuOpen && (
        <div id="mobile-menu" role="dialog" aria-label="Site navigation" style={{
          position: "fixed", top: 66, left: 0, right: 0, bottom: 0, zIndex: 99,
          background: "rgba(10,10,10,0.98)", backdropFilter: "blur(12px)",
          display: "flex", flexDirection: "column", padding: "32px 40px", gap: 4,
        }}>
          {links.map(({ label, href }) => (
            <Link key={label} href={href} onClick={() => setMenuOpen(false)} style={{
              fontFamily: "var(--font-display)", fontSize: "1.4rem", fontWeight: 900,
              color: "var(--text)", textDecoration: "none", textTransform: "uppercase",
              padding: "16px 0", borderBottom: "1px solid var(--border)",
            }}>{label}</Link>
          ))}
          <Link href="/#booking" onClick={() => setMenuOpen(false)} style={{
            display: "inline-flex", alignItems: "center", justifyContent: "center",
            background: "var(--red)", color: "var(--text)",
            fontFamily: "var(--font-display)", fontWeight: 900, fontSize: "0.9rem",
            padding: "16px", textDecoration: "none", letterSpacing: "0.07em",
            textTransform: "uppercase", marginTop: 24,
          }}>Book Diagnostic</Link>
        </div>
      )}
      <style>{`
        @media (max-width: 860px) {
          .nav-desktop { display: none !important; }
          .nav-toggle { display: block !important; }
        }
      `}</style>
    </>
  );
}
