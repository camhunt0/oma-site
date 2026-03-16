import Nav from "./components/Nav";
import Hero from "./components/Hero";
import WhyNothing from "./components/WhyNothing";
import WhatIsMAT from "./components/WhatIsMAT";
import WhatMakesUsDifferent from "./components/WhatMakesUsDifferent";
import WhoItHelps from "./components/WhoItHelps";
import Gallery from "./components/Gallery";
import Diagnostic from "./components/Diagnostic";
import Testimonials from "./components/Testimonials";
import FirstVisit from "./components/FirstVisit";
import ReferralModule from "./components/ReferralModule";
import LocalClose from "./components/LocalClose";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <WhyNothing />
        <WhatIsMAT />
        <WhatMakesUsDifferent />
        <WhoItHelps />
        <Gallery />
        <Diagnostic />
        <Testimonials />
        <FirstVisit />
        <ReferralModule />
        <LocalClose />
      </main>
      <Footer />
    </>
  );
}
