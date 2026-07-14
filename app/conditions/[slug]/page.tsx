import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import FaqSchema from "../../components/FaqSchema";
import { conditions } from "../conditions-data";

export function generateStaticParams() {
  return Object.keys(conditions).map((slug) => ({ slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const d = conditions[slug];
  if (!d) return {};
  return {
    alternates: {
      canonical: `/conditions/${slug}`,
    },
    title: d.metaTitle,
    description: d.metaDescription,
    openGraph: {
      title: d.ogTitle,
      description: d.ogDescription,
      url: `/conditions/${slug}`,
    },
  };
}

const sectionLabel: React.CSSProperties = { fontFamily: "var(--font-body)", fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--red-text)", marginBottom: 16 };
const bodyText: React.CSSProperties = { fontFamily: "var(--font-body)", fontSize: "0.97rem", color: "var(--muted)", lineHeight: 1.8, marginBottom: 16 };
const bookingHref = "/#booking";

export default async function ConditionPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const d = conditions[slug];
  if (!d) notFound();

  return (
    <>
      <Nav />
      <FaqSchema faqs={d.faqs} path={`/conditions/${slug}`} />
      <main id="main" style={{ paddingTop: 66 }}>
        <section style={{ padding: "80px 48px 72px", background: "#0d0d0d", borderBottom: "2px solid var(--red)", position: "relative", overflow: "hidden" }}>
          <div style={{ position: "absolute", top: 0, right: 0, width: "40%", height: "100%", background: "linear-gradient(to left, rgba(204,24,24,0.07), transparent)", zIndex: 0 }} />
          <div style={{ maxWidth: 1100, margin: "0 auto", position: "relative", zIndex: 1 }}>
            <Link href="/#who-it-helps" style={{ fontFamily: "var(--font-body)", fontSize: "0.7rem", color: "var(--dim)", textDecoration: "none", letterSpacing: "0.08em", textTransform: "uppercase", display: "inline-flex", alignItems: "center", gap: 6, marginBottom: 28 }}>Back to Who It Helps</Link>
            <p style={sectionLabel}>{d.heroKicker}</p>
            <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.4rem,5vw,4.2rem)", color: "var(--text)", lineHeight: 1.08, marginBottom: 24, maxWidth: 700 }}>{d.h1}</h1>
            <p style={{ fontFamily: "var(--font-body)", fontSize: "1.1rem", color: "var(--muted)", lineHeight: 1.8, maxWidth: 620, marginBottom: 36 }}>{d.heroIntro}</p>
            <Link href={bookingHref} style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "var(--red)", color: "var(--text)", fontFamily: "var(--font-display)", fontWeight: 900, fontSize: "0.82rem", padding: "15px 28px", textDecoration: "none", letterSpacing: "0.07em", textTransform: "uppercase" }}>Book a Muscle Check Diagnostic</Link>
          </div>
        </section>

        <section style={{ padding: "88px 48px", background: "var(--surface)", borderTop: "1px solid var(--border)" }}>
          <div className="grid-2" style={{ maxWidth: 1100, margin: "0 auto", gap: "60px 100px", alignItems: "start" }}>
            <div>
              <p style={sectionLabel}>{d.why.kicker}</p>
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.8rem,3vw,2.4rem)", color: "var(--text)", marginBottom: 20 }}>{d.why.heading}</h2>
              {d.why.paragraphs.map((text, i) => (
                <p key={i} style={i === d.why.paragraphs.length - 1 && d.why.lastParagraphMarginBottom !== undefined ? { ...bodyText, marginBottom: d.why.lastParagraphMarginBottom } : bodyText}>{text}</p>
              ))}
              {d.why.quote && (
                <div style={{ padding: "18px 22px", borderLeft: "3px solid var(--red)", background: "var(--red-dim)" }}>
                  <p style={{ fontFamily: "var(--font-body)", fontSize: "0.9rem", color: "var(--text)", fontStyle: "italic", lineHeight: 1.65 }}>{d.why.quote.text}</p>
                  <p style={{ fontFamily: "var(--font-body)", fontSize: "0.72rem", color: "var(--red-text)", fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase", marginTop: 10 }}>{d.why.quote.attribution}</p>
                </div>
              )}
              {d.why.callout && (
                <div style={{ padding: "20px 24px", background: "var(--bg)", border: "1px solid var(--border)", borderLeft: "3px solid var(--red)", marginTop: 8 }}>
                  <p style={{ fontFamily: "var(--font-body)", fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--red-text)", marginBottom: 10 }}>{d.why.callout.label}</p>
                  <p style={{ fontFamily: "var(--font-body)", fontSize: "0.88rem", color: "var(--muted)", lineHeight: 1.75 }}>{d.why.callout.text}</p>
                </div>
              )}
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
              {d.patterns.map((p, i) => (
                <div key={i} style={{ padding: "24px 28px", background: "var(--bg)", border: "1px solid var(--border)", borderLeft: i === 0 ? "3px solid var(--red)" : "1px solid var(--border)" }}>
                  <p style={{ fontFamily: "var(--font-display)", fontSize: "0.9rem", fontWeight: 900, color: "var(--text)", marginBottom: 8, textTransform: "uppercase", letterSpacing: "0.02em" }}>{p.title}</p>
                  <p style={{ fontFamily: "var(--font-body)", fontSize: "0.84rem", color: "var(--muted)", lineHeight: 1.65 }}>{p.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section style={{ padding: "88px 48px", background: "var(--bg)", borderTop: "1px solid var(--border)" }}>
          <div style={{ maxWidth: 1100, margin: "0 auto" }}>
            <div style={{ maxWidth: 680, marginBottom: 52 }}>
              <p style={sectionLabel}>How MAT Addresses It</p>
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.8rem,3vw,2.4rem)", color: "var(--text)", marginBottom: 20 }}>{d.how.heading}</h2>
              <p style={bodyText}>{d.how.paragraph}</p>
            </div>
            <div className="grid-3" style={{ gap: 2 }}>
              {d.steps.map((s, i) => (
                <div key={i} style={{ padding: "36px 32px", background: i === 1 ? "var(--surface2)" : "var(--surface)", border: "1px solid var(--border)", borderTop: i === 1 ? "3px solid var(--red)" : "1px solid var(--border)" }}>
                  <p style={{ fontFamily: "var(--font-display)", fontSize: "3rem", fontWeight: 900, color: "rgba(204,24,24,0.15)", lineHeight: 1, marginBottom: 20 }}>{s.num}</p>
                  <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.1rem", color: "var(--text)", marginBottom: 12 }}>{s.title}</h3>
                  <p style={{ fontFamily: "var(--font-body)", fontSize: "0.88rem", color: "var(--muted)", lineHeight: 1.7 }}>{s.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {d.expect && d.expect.variant === "standard" && (
          <section style={{ padding: "88px 48px", background: "var(--surface)", borderTop: "1px solid var(--border)" }}>
            <div className="grid-2" style={{ maxWidth: 1100, margin: "0 auto", gap: "60px 100px", alignItems: d.expect.alignItems }}>
              <div style={{ padding: "32px", background: "var(--bg)", border: "1px solid var(--border)", borderLeft: "3px solid var(--red)" }}>
                {d.expect.card.type === "testimonial" ? (
                  <>
                    <p style={{ fontFamily: "var(--font-body)", fontSize: "1rem", fontStyle: "italic", color: "var(--text)", lineHeight: 1.7, marginBottom: 20 }}>{d.expect.card.testimonial.quote}</p>
                    <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                      <div style={{ width: 24, height: 2, background: "var(--red)" }} />
                      <div>
                        <p style={{ fontFamily: "var(--font-body)", fontWeight: 700, fontSize: "0.8rem", color: "var(--text)", textTransform: "uppercase", letterSpacing: "0.05em" }}>{d.expect.card.testimonial.name}</p>
                        <p style={{ fontFamily: "var(--font-body)", fontSize: "0.7rem", color: "var(--red-text)", letterSpacing: "0.07em", textTransform: "uppercase" }}>{d.expect.card.testimonial.role}</p>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <p style={{ fontFamily: "var(--font-body)", fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--red-text)", marginBottom: 16 }}>{d.expect.card.label}</p>
                    <p style={{ fontFamily: "var(--font-body)", fontSize: "0.97rem", color: "var(--muted)", lineHeight: 1.8, marginBottom: 16 }}>{d.expect.card.paragraphs[0]}</p>
                    <p style={{ fontFamily: "var(--font-body)", fontSize: "0.97rem", color: "var(--muted)", lineHeight: 1.8 }}>{d.expect.card.paragraphs[1]}</p>
                  </>
                )}
              </div>
              <div>
                <p style={sectionLabel}>{d.expect.kicker}</p>
                <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.6rem,2.8vw,2.2rem)", color: "var(--text)", marginBottom: 20 }}>{d.expect.heading}</h2>
                <p style={bodyText}>{d.expect.paragraphs[0]}</p>
                <p style={{ ...bodyText, marginBottom: 28 }}>{d.expect.paragraphs[1]}</p>
                <Link href={bookingHref} style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "var(--red)", color: "var(--text)", fontFamily: "var(--font-display)", fontWeight: 900, fontSize: "0.8rem", padding: "13px 24px", textDecoration: "none", letterSpacing: "0.07em", textTransform: "uppercase" }}>Book a Diagnostic</Link>
              </div>
            </div>
          </section>
        )}

        {d.expect && d.expect.variant === "careTeam" && (
          <section style={{ padding: "88px 48px", background: "var(--surface)", borderTop: "1px solid var(--border)" }}>
            <div className="grid-2" style={{ maxWidth: 1100, margin: "0 auto", gap: "60px 100px", alignItems: "start" }}>
              <div>
                <p style={sectionLabel}>{d.expect.leftKicker}</p>
                <div style={{ padding: "28px 32px", background: "var(--bg)", border: "1px solid var(--border)", borderLeft: "3px solid var(--red)" }}>
                  <p style={{ fontFamily: "var(--font-body)", fontSize: "1rem", fontStyle: "italic", color: "var(--text)", lineHeight: 1.7, marginBottom: 20 }}>{d.expect.testimonial.quote}</p>
                  <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                    <div style={{ width: 24, height: 2, background: "var(--red)" }} />
                    <div>
                      <p style={{ fontFamily: "var(--font-body)", fontWeight: 700, fontSize: "0.8rem", color: "var(--text)", textTransform: "uppercase", letterSpacing: "0.05em" }}>{d.expect.testimonial.name}</p>
                      <p style={{ fontFamily: "var(--font-body)", fontSize: "0.7rem", color: "var(--red-text)", letterSpacing: "0.07em", textTransform: "uppercase" }}>{d.expect.testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div style={{ padding: "32px", background: "var(--b)", border: "1px solid var(--border)", borderLeft: "3px solid var(--red)" }}>
                <p style={sectionLabel}>{d.expect.rightKicker}</p>
                <p style={bodyText}>{d.expect.rightParagraphs[0]}</p>
                <p style={{ ...bodyText, marginBottom: 0 }}>{d.expect.rightParagraphs[1]}</p>
              </div>
            </div>
          </section>
        )}

        <section style={{ padding: "88px 48px", background: "var(--bg)", borderTop: "1px solid var(--border)" }}>
          <div style={{ maxWidth: 720, margin: "0 auto" }}>
            <p style={sectionLabel}>Common Questions</p>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.8rem,3vw,2.4rem)", color: "var(--text)", marginBottom: 48 }}>Frequently Asked</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
              {d.faqs.map((faq, i) => (
                <div key={i} style={{ padding: "28px 32px", background: "var(--surface)", border: "1px solid var(--border)" }}>
                  <p style={{ fontFamily: "var(--font-display)", fontSize: "0.95rem", color: "var(--text)", marginBottom: 12, fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.01em" }}>{faq.q}</p>
                  <p style={{ fontFamily: "var(--font-body)", fontSize: "0.9rem", color: "var(--muted)", lineHeight: 1.75 }}>{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section style={{ padding: "88px 48px", background: "var(--surface)", borderTop: "1px solid var(--border)" }}>
          <div style={{ maxWidth: 1100, margin: "0 auto" }}>
            <p style={sectionLabel}>Related Conditions</p>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.8rem,3vw,2.4rem)", color: "var(--text)", marginBottom: 36 }}>Other areas we work with</h2>
            <div className="grid-3" style={{ gap: 2 }}>
              {d.related.map((c, i) => (
                <div key={i} style={{ padding: "28px", background: "var(--bg)", border: "1px solid var(--border)", borderTop: "2px solid var(--red)" }}>
                  <h3 style={{ fontFamily: "var(--font-display)", fontSize: "0.95rem", color: "var(--text)", marginBottom: 10 }}>{c.title}</h3>
                  <p style={{ fontFamily: "var(--font-body)", fontSize: "0.83rem", color: "var(--muted)", lineHeight: 1.65, marginBottom: 14 }}>{c.desc}</p>
                  <Link href={c.href} aria-label={`Learn more about ${c.title}`} style={{ fontFamily: "var(--font-body)", fontSize: "0.75rem", color: "var(--red-text)", textDecoration: "none", fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase" }}>Learn more</Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section style={{ padding: "88px 48px", background: "#0d0d0d", borderTop: "2px solid var(--red)", textAlign: "center" }}>
          <div style={{ maxWidth: 560, margin: "0 auto" }}>
            <p style={sectionLabel}>{d.cta.kicker}</p>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.8rem,3vw,2.4rem)", color: "var(--text)", marginBottom: 20 }}>{d.cta.heading}</h2>
            <p style={{ fontFamily: "var(--font-body)", fontSize: "0.97rem", color: "var(--muted)", lineHeight: 1.75, marginBottom: 32 }}>{d.cta.paragraph}</p>
            <Link href={bookingHref} style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "var(--red)", color: "var(--text)", fontFamily: "var(--font-display)", fontWeight: 900, fontSize: "0.82rem", padding: "15px 30px", textDecoration: "none", letterSpacing: "0.07em", textTransform: "uppercase" }}>Book a Muscle Check Diagnostic</Link>
            <p style={{ fontFamily: "var(--font-body)", fontSize: "0.75rem", color: "var(--dim)", marginTop: 14 }}>Powell, Ohio · (614) 946-9071 · By appointment only</p>
          </div>
        </section>
      </main>
      <Footer showCTA={false} />
    </>
  );
}
