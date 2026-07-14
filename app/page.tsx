import Nav from "./components/Nav";
import FaqSchema from "./components/FaqSchema";
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

const faqs = [
  { q: "What is Muscle Activation Techniques (MAT)?", a: "Muscle Activation Techniques is a root-cause, hands-on neuromuscular approach that identifies muscles your nervous system has turned off and restores their ability to contract properly. It addresses the neurological signal, not just the symptom." },
  { q: "Why does my pain keep coming back after physical therapy?", a: "Most recurring pain is a neurological problem. When a muscle stops receiving its signal from the brain, surrounding muscles compensate and become chronically overloaded. Until the neurological signal is restored, the compensators stay overloaded and the pain keeps returning." },
  { q: "What conditions does Ohio Muscle Activation treat?", a: "Ohio Muscle Activation works with clients experiencing chronic hip pain, neck and shoulder tension, post-surgical recovery, golf and athletic performance limitations, IT band and knee pain, lower back pain, and anyone told everything looks fine but still experiencing pain or restricted movement." },
  { q: "How is MAT different from physical therapy or massage?", a: "MAT addresses the neurological signal, not the symptom. Massage relieves tension in the compensating muscle but the source muscle stays offline. PT strengthens movement patterns but loads compensators harder if the source muscles are still inhibited. MAT identifies exactly which muscles have lost their signal and restores them directly." },
  { q: "Where is Ohio Muscle Activation located?", a: "Ohio Muscle Activation is located at 10516 Sawmill Rd, Suite B, Powell, OH 43065. We serve clients from Powell, Dublin, Worthington, Columbus, and greater Central Ohio by appointment only. Call (614) 946-9071." },
];

export default function Home() {
  return (
    <>
      <Nav />
      <FaqSchema faqs={faqs} path="/" />
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
