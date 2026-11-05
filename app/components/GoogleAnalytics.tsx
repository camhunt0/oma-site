"use client";

import { useEffect, useState } from "react";
import Script from "next/script";

const storageKey = "oma-analytics-consent";
type Choice = "accepted" | "declined" | null;

export default function GoogleAnalytics() {
  const [choice, setChoice] = useState<Choice>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (window.location.hostname !== "www.ohiomuscleactivation.com") return;
    let saved: string | null = null;
    try { saved = localStorage.getItem(storageKey); } catch { /* Choice lasts for this page only. */ }
    // Browser storage is unavailable during SSR; hydrate the saved preference.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setChoice(saved === "declined" ? "declined" : "accepted");
    setReady(true);
  }, []);

  function choose(next: Exclude<Choice, null>) {
    let persisted = false;
    try { localStorage.setItem(storageKey, next); persisted = true; } catch { /* Continue without persistence. */ }
    Object.assign(window, { "ga-disable-G-FWW3R9BXYD": next === "declined" });
    if (choice === "accepted" && next === "declined") {
      // Stop Google's existing tag immediately, then reload without loading it.
      for (const cookie of document.cookie.split(";")) {
        const name = cookie.trim().split("=")[0];
        if (name === "_ga" || name.startsWith("_ga_")) {
          for (const domain of ["", "; domain=www.ohiomuscleactivation.com", "; domain=.ohiomuscleactivation.com"]) {
            // Browser cookie API, not a mutation of React state.
            document.cookie = `${name}=; Max-Age=0; path=/${domain}`;
          }
        }
      }
    }
    setChoice(next);
    if (persisted && choice === "accepted" && next === "declined") window.location.reload();
  }

  if (!ready) return null;
  return (
    <>
      {choice === "accepted" && <Script src="/oma-analytics.js" strategy="afterInteractive" />}
      <div style={{ padding: "12px 24px", background: "var(--bg)", textAlign: "center" }}>
        <p style={{ color: "var(--muted)", fontSize: "0.75rem", lineHeight: 1.6, margin: "0 0 6px" }}>
          We use Google Analytics cookies to understand website use and improve the site. Advertising personalization is disabled. {" "}
          <a href="https://policies.google.com/technologies/partner-sites" target="_blank" rel="noreferrer" style={{ color: "inherit", textDecoration: "underline" }}>How Google uses data</a>.
        </p>
        <button type="button" onClick={() => choose(choice === "declined" ? "accepted" : "declined")} style={{ color: "var(--muted)", background: "none", border: 0, textDecoration: "underline", cursor: "pointer", fontSize: "0.8rem" }}>
          {choice === "declined" ? "Analytics is off — enable analytics" : "Turn off Google Analytics"}
        </button>
      </div>
    </>
  );
}
