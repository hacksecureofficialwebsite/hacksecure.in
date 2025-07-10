import { useRef, useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import ServicesIcon from "../../icons/ServicesIcon";
import LearnIcon from "../../icons/LearnIcon";
import PartnersIcon from "../../icons/PartnersIcon";

gsap.registerPlugin(ScrollTrigger);

export default function CareersSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const textBlockRefs = useRef<HTMLDivElement[]>([]);
  const cardRefs = useRef<HTMLDivElement[]>([]);
  // const [activeIndex, setActiveIndex] = useState(0);

  const blocks = [
    {
      heading: "Empower",
      desc: "We offer a wide range of services from expert-led webinars and sessions to hands-on workshops and real-world cyber investigation support. Whether you're looking to learn, train, or secure, our services are designed to deliver impact and build resilience across every level.",
      cardTitle: "Services",
      cardIcon: <ServicesIcon />,
      cardDesc:
        "Expert-led webinars, workshops, and real-world cyber investigation support to build resilience.",
      cardColor: "from-[#18359a]/20 to-[#338aca]/20",
    },
    {
      heading: "Innovate",
      desc: "Partner with Hack Secure to drive innovation, share knowledge, make a global impact in cybersecurity. From academic and corporates to communities and international. We welcome partnerships that aim to build a safer world.",
      cardTitle: "Partners",
      cardIcon: <PartnersIcon />,
      cardDesc:
        "Partner with us to drive innovation and make a global impact in cybersecurity.",
      cardColor: "from-purple-600/20 to-purple-400/20",
    },
    {
      heading: "Cybersecurity Education, Reinvented",
      desc: "HackSecure LearnX is your gateway to real-world cybersecurity learning. Dive into expert-curated content, live sessions, CTFs, case studies, and hands-on challenges all built to sharpen your skills and fuel your growth. Whether you're a beginner or a pro, there's always more to explore.",
      cardTitle: "LearnX",
      cardIcon: <LearnIcon />,
      cardDesc:
        "Real-world cybersecurity learning with expert-curated content, live sessions, and hands-on challenges.",
      cardColor: "to-[ #d86c33 ] /80 from-[#f18b4c]/80",
    },
  ];

  useEffect(() => {
    cardRefs.current.forEach((card, index) => {
      if (card) {
        gsap.set(card, {
          opacity: index === 0 ? 1 : 0,
          y: index === 0 ? 0 : 50,
          scale: index === 0 ? 1 : 0.9,
        });
      }
    });

    textBlockRefs.current.forEach((block, index) => {
      if (!block) return;

      ScrollTrigger.create({
        trigger: block,
        start: "top 60%",
        end: "bottom 40%",
        onEnter: () => {
          // setActiveIndex(index);
          if (cardRefs.current[index]) {
            gsap.to(cardRefs.current[index], {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 0.6,
              ease: "power2.out",
            });
          }
          cardRefs.current.forEach((card, i) => {
            if (i !== index && card) {
              gsap.to(card, {
                opacity: 0,
                y: i < index ? -50 : 50,
                scale: 0.9,
                duration: 0.4,
                ease: "power2.out",
              });
            }
          });
        },
        onLeaveBack: () => {
          const prevIndex = index - 1;
          if (prevIndex >= 0) {
            // setActiveIndex(prevIndex);
            if (cardRefs.current[prevIndex]) {
              gsap.to(cardRefs.current[prevIndex], {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 0.6,
                ease: "power2.out",
              });
            }
            if (cardRefs.current[index]) {
              gsap.to(cardRefs.current[index], {
                opacity: 0,
                y: 50,
                scale: 0.9,
                duration: 0.4,
                ease: "power2.out",
              });
            }
          }
        },
        markers: false,
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full flex justify-center items-center bg-[#0c0c0c] text-[#f9f9f9]"
    >
      <div className=" relative flex flex-col lg:flex-row">
        <div className="w-full lg:w-1/2 relative z-10">
          {blocks.map((block, index) => (
            <div
              key={index}
              ref={(el) => {
                if (el) textBlockRefs.current[index] = el;
              }}
              className="min-h-screen flex flex-col justify-center px-8 lg:px-16 py-16"
            >
              <div className="max-w-lg">
                <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-[#f9f9f9]">
                  {block.heading}
                </h2>
                <p className="text-lg lg:text-xl text-[#f9f9f9]/80 leading-relaxed">
                  {block.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="w-full lg:w-1/2 relative hidden lg:block">
          <div className="sticky top-0 h-screen flex items-center justify-center">
            <div className="relative w-[450px] h-[500px]">
              {blocks.map((block, index) => (
                <div
                  key={index}
                  ref={(el) => {
                    if (el) cardRefs.current[index] = el;
                  }}
                  className="absolute inset-0 w-full h-full"
                >
                  <div className="w-full h-full  backdrop-blur-xl border border-[#f9f9f9]/10 rounded-xl overflow-hidden">
                    <div className="flex items-center gap-3 p-6 border-b border-[#f9f9f9]/10">
                      <div className="text-[#338aca]  w-8 h-8">{block.cardIcon}</div>
                      <h3 className="text-xl font-semibold text-[#f9f9f9]">
                        {block.cardTitle}
                      </h3>
                    </div>

                    <div className="p-6 space-y-4">
                      <div
                        className={`w-full h-48 bg-gradient-to-br ${block.cardColor} rounded-lg flex items-center justify-center relative overflow-hidden`}
                      >
                        <div className="text-md w-15 h-15 opacity-30">
                          {block.cardIcon}
                        </div>
                        <div className="absolute inset-0 opacity-10">
                          <div className="w-full h-full bg-gradient-to-br from-[#f9f9f9]/20 via-transparent to-white/10"></div>
                        </div>
                      </div>

                      <p className="text-[#f9f9f9]/70 text-sm leading-relaxed">
                        {block.cardDesc}
                      </p>

                      {/* <div className="flex items-center gap-2 mt-4"> */}
                      {/*   <div className="w-2 h-2 bg-[#338aca] rounded-full"></div> */}
                      {/*   <span className="text-xs text-[#f9f9f9]/50"> */}
                      {/*     {String(index + 1).padStart(2, "0")} /{" "} */}
                      {/*     {String(blocks.length).padStart(2, "0")} */}
                      {/*   </span> */}
                      {/* </div> */}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
