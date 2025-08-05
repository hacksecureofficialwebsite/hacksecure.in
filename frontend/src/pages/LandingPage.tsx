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
        className="relative z-5 mb-[500px] md:mb-[400px] scroll-smooth"
        ref={scrollContainerRef}
      >
        {" "}
        <div className="absolute -z-10 bg-[#0c0c0c] h-screen w-full pointer-events-none">
          <Aurora
            colorStops={["#4290bc", "#5C7AEA", "#18359a", "#0e2051"]}
            amplitude={0.5}
            speed={0.3}
            blend={0.9}
          />
        </div>
        <Navbar />
        <HeroSection />
        <SponsorsSection />
        <section id="learn" className="py-40 bg-[#0c0c0c] relative">
          <div className="max-w-7xl mx-auto px-8">
            <ScrollReveal
              containerClassName=""
              textClassName="text-4xl text-center md:text-5xl lg:text-6xl font-bold text-white leading-relaxed"
              baseOpacity={0}
              baseRotation={8}
              blurStrength={10}
            >
              Build for next-gen learners and innovators.
            </ScrollReveal>
            <ScrollReveal
              containerClassName="  mt-8"
              textClassName="text-[#f9f9f9]/60 font-bricolage-light text-md md:text-2xl text-center leading-relaxed max-w-4xl mx-auto"
              baseOpacity={0}
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
        <section className=" bg-[#0c0c0c] py-40">
          <div className="flex flex-col items-center max-w-7xl mx-auto px-4 text-center mb-16">
            <div className="flex  items-center text-xl rounded-full border-1 w-fit px-4 border-[#f9f9f9]/20 font-bold text-white/80 mb-4">
              Why &nbsp;<span className="text-[#338aca]">Hack Secure?</span>
            </div>
            <div className="text-4xl md:text-6xl lg:text-6xl text-white/60  mx-auto">
              Discover what makes <span>Hack Secure</span> the trusted choice
              for cybersecurity excellence
            </div>
          </div>
          <div className="mx-auto w-full max-w-7xl px-4">
            <CareersSection />
          </div>
        </section>{" "}
        <TestimonialsSection />
      </div>
      <Footer />
    </>
  );
}
