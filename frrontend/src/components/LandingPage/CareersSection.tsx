import { useRef, useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import CardSwap, { Card, type CardSwapHandle } from "../../UI/CardSwap";
import ServicesIcon from "../../icons/ServicesIcon";
import LearnIcon from "../../icons/LearnIcon";
import PartnersIcon from "../../icons/PartnersIcon";

gsap.registerPlugin(ScrollTrigger);

export default function Careers() {
  const cardSwapRef = useRef<CardSwapHandle>(null);
  const blockRefs = useRef<HTMLDivElement[]>([]);

  const blocks = [
    {
      heading: "Empower",
      desc: "We offer a wide range of services from expert-led webinars and sessions to hands-on workshops and real-world cyber investigation support. Whether you're looking to learn, train, or secure, our services are designed to deliver impact and build resilience across every level.",
    },
    {
      heading: "Innovate",
      desc: "Partner with Hack Secure to drive innovation, share knowledge, make a global impact in cybersecurity. From academic and corporates to communities and international. We welcome partnerships that aim to build a safer world.",
    },
    {
      heading: "Cybersecurity Education, Reinvented",
      desc: "HackSecure LearnX is your gateway to real-world cybersecurity learning. Dive into expert-curated content, live sessions, CTFs, case studies, and hands-on challenges all built to sharpen your skills and fuel your growth. Whether you're a beginner or a pro, there's always more to explore.",
    },
  ];

  useEffect(() => {
    blocks.forEach((_, i) => {
      if (i == 0) return;
      ScrollTrigger.create({
        trigger: blockRefs.current[i],
        start: "top center",
        end: "bottom center",
        onEnter: () => cardSwapRef.current?.swap(),
        onLeaveBack: () => cardSwapRef.current?.reverseSwap(),
        scrub: true,
      });
    });
    return () => ScrollTrigger.getAll().forEach((st) => st.kill());
  }, []);
  return (
    <section className="relative flex flex-col md:flex-row w-full min-h-[300vh] pl-50 py-32 bg-[#0c0c0c] text-white">
      <div className="w-full md:w-1/2 space-y-[50vh]">
        {" "}
        {blocks.map((b, i) => (
          <div
            key={i}
            id={`block-${i}`}
            ref={(el) => {
              if (el) blockRefs.current[i] = el;
            }}
            className="py-32"
          >
            <h2 className="text-5xl font-bold">{b.heading}</h2>
            <p className="mt-4 text-lg max-w-md">{b.desc}</p>
          </div>
        ))}
      </div>

      <div className="w-full md:w-1/2 relative">
        <div className="sticky top-32 h-[400px]">
          <CardSwap ref={cardSwapRef} cardDistance={60} verticalDistance={70}>
            {" "}
            <Card>
              <div className="flex itmes-center  gap-2 p-4 w-full border-b">
                <ServicesIcon />
                <h3 className="">Services</h3>
              </div>

              <p className="p-2"> </p>
            </Card>
            <Card>
              <div className="flex itmes-center  gap-2 p-4 w-full border-b">
                <PartnersIcon />
                <h3 className="">Partners</h3>
              </div>

              <p className="p-2"></p>
            </Card>
            <Card>
              <div className="flex itmes-center  gap-2 p-4 w-full border-b">
                <LearnIcon />
                <h3 className="">LearnX</h3>
              </div>

              <p className="p-2"></p>
            </Card>
          </CardSwap>
        </div>
      </div>
    </section>
  );
}
