import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ohio Muscle Activation | Powell, Dublin & Columbus, Ohio | MAT Specialist",
  description:
    "You've stretched. You've done PT. But it keeps coming back. Ohio Muscle Activation identifies which muscles your body has shut down and restores them. Serving Powell, Dublin & Columbus since 2018.",
  keywords:
    "muscle activation techniques, MAT, Powell Ohio, Dublin Ohio, Columbus Ohio, hip pain, neck pain, post surgery recovery, MAT specialist Columbus, neuromuscular therapy, MATRx",
  openGraph: {
    title: "Ohio Muscle Activation | Powell, Dublin & Columbus, Ohio",
    description:
      "Identify and restore the muscles your body has stopped using. 1-on-1 MAT sessions in Powell, Ohio.",
    url: "https://ohiomuscleactivation.com",
    siteName: "Ohio Muscle Activation",
    locale: "en_US",
    type: "website",
  },
};

const schemaMarkup = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["LocalBusiness", "HealthAndBeautyBusiness"],
      "@id": "https://ohiomuscleactivation.com/#business",
      "name": "Ohio Muscle Activation",
      "description": "Ohio Muscle Activation specializes in Muscle Activation Techniques (MAT), a root-cause neuromuscular approach that identifies which muscles have lost their signal and restores their ability to contract properly. Serving Powell, Dublin, Worthington, and greater Columbus since 2018.",
      "url": "https://ohiomuscleactivation.com",
      "telephone": "+16149469071",
      "priceRange": "$$",
      "image": "https://ohiomuscleactivation.com/logo.png",
      "foundingDate": "2018",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "10516 Sawmill Rd, Suite B",
        "addressLocality": "Powell",
        "addressRegion": "OH",
        "postalCode": "43065",
        "addressCountry": "US"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 40.1578,
        "longitude": -83.0685
      },
      "areaServed": [
        { "@type": "City", "name": "Powell" },
        { "@type": "City", "name": "Dublin" },
        { "@type": "City", "name": "Worthington" },
        { "@type": "City", "name": "Columbus" }
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Muscle Activation Techniques (MAT)",
              "description": "Root-cause, hands-on neuromuscular approach that identifies which muscles have lost their signal and restores their ability to contract properly."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Muscle Check Diagnostic",
              "description": "A focused 1-on-1 evaluation to identify which muscles are neurologically inhibited and what compensation patterns that has created."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "NeuX Stim Advanced Sessions",
              "description": "Advanced sessions incorporating the NXPro FDA-cleared electrical neuromuscular stimulation device to reinforce activation work and accelerate results."
            }
          }
        ]
      },
      "sameAs": [
        "https://www.instagram.com/ohiomuscleactivation/",
        "https://www.facebook.com/ohiomuscleactivation/",
        "https://www.yelp.com/biz/ohio-muscle-activation-powell"
      ]
    },
    {
      "@type": "Person",
      "@id": "https://ohiomuscleactivation.com/#cameron-hunt",
      "name": "Cameron Hunt",
      "jobTitle": "MATRx Practitioner",
      "worksFor": { "@id": "https://ohiomuscleactivation.com/#business" },
      "hasCredential": [
        { "@type": "EducationalOccupationalCredential", "credentialCategory": "certification", "name": "MATRx Certified Practitioner" },
        { "@type": "EducationalOccupationalCredential", "credentialCategory": "certification", "name": "NASM Certified Personal Trainer" },
        { "@type": "EducationalOccupationalCredential", "credentialCategory": "certification", "name": "TPI Level 1 Certified" }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://ohiomuscleactivation.com/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is Muscle Activation Techniques (MAT)?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Muscle Activation Techniques is a root-cause, hands-on neuromuscular approach that identifies muscles your nervous system has turned off and restores their ability to contract properly. It addresses the neurological signal, not just the symptom."
          }
        },
        {
          "@type": "Question",
          "name": "Why does my pain keep coming back after physical therapy?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Most recurring pain is a neurological problem. When a muscle stops receiving its signal from the brain, surrounding muscles compensate and become chronically overloaded. Until the neurological signal is restored, the compensators stay overloaded and the pain keeps returning."
          }
        },
        {
          "@type": "Question",
          "name": "What conditions does Ohio Muscle Activation treat?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Ohio Muscle Activation works with clients experiencing chronic hip pain, neck and shoulder tension, post-surgical recovery, golf and athletic performance limitations, IT band and knee pain, lower back pain, and anyone told everything looks fine but still experiencing pain or restricted movement."
          }
        },
        {
          "@type": "Question",
          "name": "How is MAT different from physical therapy or massage?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "MAT addresses the neurological signal, not the symptom. Massage relieves tension in the compensating muscle but the source muscle stays offline. PT strengthens movement patterns but loads compensators harder if the source muscles are still inhibited. MAT identifies exactly which muscles have lost their signal and restores them directly."
          }
        },
        {
          "@type": "Question",
          "name": "Where is Ohio Muscle Activation located?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Ohio Muscle Activation is located at 10516 Sawmill Rd, Suite B, Powell, OH 43065. We serve clients from Powell, Dublin, Worthington, Columbus, and greater Central Ohio by appointment only. Call (614) 946-9071."
          }
        }
      ]
    }
  ]
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;1,9..40,300&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
