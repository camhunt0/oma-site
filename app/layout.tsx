import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import ScrollReveal from "./components/ScrollReveal";
import { Analytics } from "@vercel/analytics/react";

const dmSans = DM_Sans({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.ohiomuscleactivation.com"),
  alternates: {
    canonical: "/",
  },
  title: "Ohio Muscle Activation | Powell, Dublin & Columbus, Ohio | MAT Specialist",
  description:
    "You've stretched. You've done PT. But it keeps coming back. Ohio Muscle Activation identifies which muscles your body has shut down and restores them. Serving Powell, Dublin & Columbus since 2018.",
  keywords:
    "muscle activation techniques, MAT, Powell Ohio, Dublin Ohio, Columbus Ohio, hip pain, neck pain, post surgery recovery, MAT specialist Columbus, neuromuscular therapy, MATRx",
  openGraph: {
    title: "Ohio Muscle Activation | Powell, Dublin & Columbus, Ohio",
    description:
      "Identify and restore the muscles your body has stopped using. 1-on-1 MAT sessions in Powell, Ohio.",
    url: "https://www.ohiomuscleactivation.com",
    siteName: "Ohio Muscle Activation",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ohio Muscle Activation | Powell, Dublin & Columbus, Ohio",
    description:
      "Identify and restore the muscles your body has stopped using. 1-on-1 MAT sessions in Powell, Ohio.",
  },
};

const schemaMarkup = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["LocalBusiness", "HealthAndBeautyBusiness"],
      "@id": "https://www.ohiomuscleactivation.com/#business",
      "name": "Ohio Muscle Activation",
      "description": "Ohio Muscle Activation specializes in Muscle Activation Techniques (MAT), a root-cause neuromuscular approach that identifies which muscles have lost their signal and restores their ability to contract properly. Serving Powell, Dublin, Worthington, and greater Columbus since 2018.",
      "url": "https://www.ohiomuscleactivation.com",
      "telephone": "+16149469071",
      "priceRange": "$$",
      "image": "https://www.ohiomuscleactivation.com/logo.png",
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
      "@id": "https://www.ohiomuscleactivation.com/#cameron-hunt",
      "name": "Cameron Hunt",
      "jobTitle": "MATRx Practitioner",
      "worksFor": { "@id": "https://www.ohiomuscleactivation.com/#business" },
      "hasCredential": [
        { "@type": "EducationalOccupationalCredential", "credentialCategory": "certification", "name": "MATRx Certified Practitioner" },
        { "@type": "EducationalOccupationalCredential", "credentialCategory": "certification", "name": "NASM Certified Personal Trainer" },
        { "@type": "EducationalOccupationalCredential", "credentialCategory": "certification", "name": "TPI Level 1 Certified" }
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
    <html lang="en" className={dmSans.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
        />
      </head>
      <body><ScrollReveal />{children}<Analytics /></body>
    </html>
  );
}
