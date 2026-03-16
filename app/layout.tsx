import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ohio Muscle Activation | Powell, Ohio | MAT Specialist",
  description:
    "You've stretched. You've done PT. But it keeps coming back. Ohio Muscle Activation identifies which muscles your body has shut down — and restores them. Serving Powell, Dublin & Columbus.",
  keywords:
    "muscle activation techniques, MAT, Powell Ohio, hip pain, neck pain, post surgery recovery, MAT specialist Columbus",
  openGraph: {
    title: "Ohio Muscle Activation | Powell, Ohio",
    description:
      "Identify and restore the muscles your body has stopped using. 1-on-1 MAT sessions in Powell, Ohio.",
    url: "https://ohiomuscleactivation.com",
    siteName: "Ohio Muscle Activation",
    locale: "en_US",
    type: "website",
  },
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
      </head>
      <body>{children}</body>
    </html>
  );
}
