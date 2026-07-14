type Faq = { q: string; a: string };

export default function FaqSchema({ faqs, path }: { faqs: Faq[]; path: string }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `https://www.ohiomuscleactivation.com${path}#faq`,
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
