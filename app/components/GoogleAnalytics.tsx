"use client";

import { useEffect, useState } from "react";
import Script from "next/script";

const storageKey = "oma-analytics-consent";
type Choice = "accepted" | "declined" | null;

export default function GoogleAnalytics() {
  const [choice, setChoice] = useState<Choice>(null);
  const [ready, setReady] = useState(false);
  const [editing, setEditing] = useState(false);

  useEffect(() => {
    if (window.location.hostname !== "www.ohiomuscleactivation.com") return;
    let saved: string | null = null;
    try { saved = localStorage.getItem(storageKey); } catch { /* Choice lasts for this page only. */ }
    // Browser storage is unavailable during SSR; hydrate the saved preference.
    setChoice(saved === "accepted" || saved === "declined" ? saved : null);
    setReady(true);
  }, []);

  function choose(next: Exclude<Choice, null>) {
    try { localStorage.setItem(storageKey, next); } catch { /* Continue without persistence. */ }
    if (choice === "accepted" && next === "declined") {
      // Stop Google's existing tag immediately, then reload without loading it.
      Object.assign(window, { "ga-disable-G-FWW3R9BXYD": true });
      for (const cookie of document.cookie.split(";")) {
        const name = cookie.trim().split("=")[0];
        if (name === "_ga" || name.startsWith("_ga_")) {
          for (const domain of ["", "; domain=www.ohiomuscleactivation.com", "; domain=.ohiomuscleactivation.com"]) {
            // Browser cookie API, not a mutation of React state.
            // eslint-disable-next-line react-hooks/immutability
            document.cookie = `${name}=; Max-Age=0; path=/${domain}`;
          }
        }
      }
    }
    setChoice(next);
    setEditing(false);
    if (choice === "accepted" && next === "declined") window.location.reload();
  }

  if (!ready) return null;
  return (
    <>
      {choice === "accepted" && <Script src="/oma-analytics.js" strategy="afterInteractive" />}
      <div style={{ padding: "12px 24px", background: "var(--bg)", textAlign: "center" }}>
        <button type="button" onClick={() => setEditing(true)} style={{ color: "var(--muted)", background: "none", border: 0, textDecoration: "underline", cursor: "pointer", fontSize: "0.8rem" }}>Analytics preferences</button>
      </div>
      {(choice === null || editing) && (
        <section aria-label="Analytics preferences" style={{ position: "fixed", bottom: 16, left: 16, right: 16, margin: "0 auto", maxWidth: 620, zIndex: 200, background: "var(--surface)", color: "var(--text)", border: "1px solid var(--border)", padding: 20, boxShadow: "0 4px 24px #0008" }}>
          <p style={{ margin: "0 0 12px", fontSize: "0.9rem", lineHeight: 1.5 }}>May we use Google Analytics cookies to understand visits and improve this website? Google receives information about pages viewed, device, approximate location, and website interactions. We disable advertising personalization. Your choice does not affect booking. <a href="https://policies.google.com/technologies/partner-sites" target="_blank" rel="noreferrer" style={{ color: "inherit", textDecoration: "underline" }}>How Google uses data</a>.</p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
            {([ ["declined", "Decline"], ["accepted", "Accept analytics"] ] as const).map(([value, label]) => (
              <button key={value} type="button" onClick={() => choose(value)} style={{ padding: "10px 18px", background: "var(--bg)", color: "var(--text)", border: "1px solid var(--muted)", cursor: "pointer", font: "inherit" }}>{label}</button>
            ))}
            {choice !== null && <button type="button" onClick={() => setEditing(false)} style={{ background: "none", color: "var(--text)", border: 0, cursor: "pointer", textDecoration: "underline" }}>Close</button>}
          </div>
        </section>
      )}
    </>
  );
}
