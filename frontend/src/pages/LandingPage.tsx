import Navbar from "../components/LandingPage/Navbar";
import Aurora from "../UI/Aurora";
import CareersSection from "../components/LandingPage/CareersSection";
import { Footer } from "../components/LandingPage/Footer";
import ScrollReveal from "../UI/ScrollReveal";
import SponsorsSection from "../components/LandingPage/SponsorsSection";
import { useRef } from "react";
import StatsCardsSection from "../components/LandingPage/StatsCardsSection";
import HeroSection from "../components/LandingPage/HeroSection";
import TestimonialsSection from "../components/LandingPage/TestimonialsSection";

export default function LandingPage() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  return (
    <>
      <div
        className="relative z-5 mb-[500px] md:mb-[400px] overflow-x-hidden"
        ref={scrollContainerRef}
      >
        {" "}
        <div className="absolute -z-10 bg-[#0c0c0c] h-screen w-full pointer-events-none">
          <Aurora
            colorStops={["#4290bc", "#338aca", "#18359a", "#0e2051"]}
            amplitude={1.0}
            speed={0.5}
            blend={0.5}
          />
        </div>
        <Navbar />
        <HeroSection />
        <SponsorsSection />
        <section className="py-40 bg-[#0c0c0c] relative">
          <div className="max-w-6xl mx-auto px-8">
            <ScrollReveal
              containerClassName="text-center"
              textClassName="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight"
              baseOpacity={0}
              enableBlur={true}
              baseRotation={5}
              blurStrength={10}
            >
              Build for next-gen learners and innovators.
            </ScrollReveal>
            <ScrollReveal
              containerClassName=" text-md text-center md:text-xl font-bricolage-light mt-8"
              textClassName="text-white/60 leading-relaxed max-w-4xl mx-auto"
              baseOpacity={0}
              enableBlur={true}
              baseRotation={5}
              blurStrength={10}
            >
              HackSecure is where global learners come to master cybersecurity,
              secure digital assets, and lead the transformation of our digital
              world. All in one comprehensive platform.
            </ScrollReveal>
          </div>
        </section>
        <StatsCardsSection />
        <section className="py-24 bg-[#0c0c0c]">
          <div className="flex flex-col items-center max-w-7xl mx-auto px-4 text-center mb-16">
            <div className="flex items-center text-xl rounded-full border-1 w-fit px-4 border-[#f9f9f9]/20 font-bold text-white/80 mb-4">
              Why &nbsp;<span className="text-[#18359a]">Hack Secure?</span>
            </div>
            <div className="text-4xl md:text-6xl lg:text-6xl text-white/60  mx-auto">
              Discover what makes <span>Hack Secure</span> the trusted choice
              for cybersecurity excellence
            </div>
          </div>
          <CareersSection />
        </section>{" "}
        <TestimonialsSection />
      </div>
      <Footer />
    </>
  );
}
