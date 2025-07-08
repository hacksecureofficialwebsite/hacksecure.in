export default function HeroSection() {
  return (
    <section className="hero-section z-10 h-screen px-4 lg:px-20 flex items-center justify-center max-w-7xl mx-auto">
      <div className="max-w-7xl mx-auto lg:pt-20">
        <div className="flex justify-center mb-10">
          <div className="bg-gradient-to-r from-[#4290bc]/20 to-[#338aca]/20  backdrop-contrast-150 backdrop-blur-xl px-6 py-2 rounded-full border border-[#4290bc]/30">
            <span className="text-[#f9f9f9] text-xs font-light">
              Learn • Secure • Lead
            </span>
          </div>
        </div>

        <div className="text-center space-y-8">
          <div className="space-y-4 ">
            <div className="text-5xl font-anybody md:text-7xl lg:text-7xl font-bold bg-gradient-to-tr from-[#4290bc]/70 via-[#338aca]/70 to-[#18359a]/10 bg-clip-text  text-transparent leading-tight">
              Master the art of secure innovation.
            </div>
            <h2 className="text-4xl md:text-5xl font-light text-white/90">
              With Hack Secure CyberSecurity Solutions.
            </h2>
          </div>

          <p className="text-lg md:text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
            We’re not just a company. we’re a mission. Hack Secure Global is
            redefining cybersecurity through elite operations, breakthrough
            education, and strategic digital defense.{" "}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12">
            <div className="outline outline-[#f9f9f9]/10 p-1 backdrop-blur-3xl rounded-full">
              <button className="group relative bg-[#4290bc]/80 hover:bg-radial from-[#4290bc]/30 to-[#0e2051] via-[#18359a]/30 text-[#f9f9f9] px-8 py-4 rounded-[inherit] font-semibold  hover:shadow-2xl hover:shadow-[#4290bc]/25 transition-all duration-400 ease-in-out">
                Get Started
              </button>
            </div>
            <button className="px-8 py-4 rounded-full hover:border-b-[#4290bc]/50 hover:border-b text-white ">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
