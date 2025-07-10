import React from "react";

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Mitchell",
      role: "CISO",
      company: "TechCorp Inc.",
      content:
        "HackSecure's training programs have transformed our cybersecurity posture. The hands-on approach and real-world scenarios prepared our team for actual threats.",
      rating: 5,
    },
    {
      id: 2,
      name: "David Chen",
      role: "Security Analyst",
      company: "GlobalBank",
      content:
        "The investigative support from HackSecure was instrumental in resolving our security incident. Their expertise and rapid response saved us millions.",
      rating: 5,
    },
    {
      id: 3,
      name: "Maria Rodriguez",
      role: "IT Director",
      company: "MedTech Solutions",
      content:
        "Outstanding cybersecurity education platform. The LearnX program helped our entire team stay ahead of emerging threats and best practices.",
      rating: 5,
    },
  ];

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-[#0c0c0c] pb-30 md:pb-60  h-fit flex justify-center items-center rounded-b-4xl relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center ">
          <h2 className="text-4xl md:text-5xl lg:text-9xl font-bold text-[#f9f9f9]/30 md:mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xs md:text-xl uppercase text-[#f9f9f9]/60">
            Trusted by industry leaders worldwide
          </p>
        </div>

        <div className=" relative max-w-7xl mx-auto">
          <div className=" backdrop-blur-xl rounded-2xl border-gray-700/50 inset-ring-black/30 p-8 md:p-12">
            <div className="flex items-center justify-center mb-6">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="w-5 h-5 text-[#f18b4c] mr-1">
                  ★
                </div>
              ))}
            </div>

            <blockquote className="text-xl md:text-4xl font-bricolage-bold text-[#f9f9f9] text-center mb-8 leading-relaxed">
              <span className="absolute top-0 md:-top-8 left-0 text-6xl md:text-8xl text-[#9ebaf3]/40 select-none">
                “
              </span>{" "}
              {testimonials[currentIndex].content}
              <span className="absolute -bottom-8 right-0 text-6xl md:text-8xl text-[#9ebaf3]/40 select-none">
                ”
              </span>{" "}
            </blockquote>

            <div className="flex items-center justify-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-br from-[#4290bc] to-[#338aca] rounded-full flex items-center justify-center">
                <span className="text-[#f9f9f9] font-bold text-lg">
                  {testimonials[currentIndex].name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </span>
              </div>
              <span className="text-[#f9f9f9]">
                {testimonials[currentIndex].name}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
