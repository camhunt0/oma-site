"use client";
import { useEffect } from "react";

export default function ScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    document.querySelectorAll("section").forEach((section, i) => {
      section.classList.add("reveal");
      if (i % 4 === 1) section.classList.add("reveal-delay-1");
      if (i % 4 === 2) section.classList.add("reveal-delay-2");
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return null;
}
