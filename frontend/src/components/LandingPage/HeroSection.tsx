export default function HeroSection() {
  return (
    <section
      id="hero"
      className="hero-section relative z-10 px-4 sm:px-6 lg:px-20 flex items-center justify-center max-w-7xl mx-auto pt-24 sm:pt-32 lg:pt-40"
    >
      <div className="w-full">
        {/* Tag */}
        <div className="flex justify-center mb-8 sm:mb-10">
          <div className="bg-gradient-to-r from-[#4290bc]/20 to-[#338aca]/20 backdrop-contrast-150 backdrop-blur-xl px-4 sm:px-6 py-1.5 sm:py-2 rounded-full border border-[#4290bc]/30">
            <span className="text-[#f9f9f9] text-xs sm:text-sm font-light tracking-wide">
              Learn • Secure • Lead
            </span>
          </div>
        </div>

        {/* Headings */}
        <div className="text-center space-y-6 sm:space-y-8">
          <div className="md:space-y-2 lg:space-y-4">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-anybody font-bold bg-gradient-to-tr from-[#4290bc]/70 via-[#338aca]/70 to-[#14279B]/70 bg-clip-text text-transparent leading-tight">
              Master the art of secure innovation.
            </h1>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-white/90">
              With Hack Secure CyberSecurity Solutions.
            </h2>
          </div>

          {/* Paragraph */}
          <p className="text-xs md:text-lg text-white/70 max-w-3xl mx-auto leading-relaxed md:px-2">
            We’re not just a company—we’re a mission. Hack Secure Global is
            redefining cybersecurity through elite operations, breakthrough
            education, and strategic digital defense.
          </p>

          {/* CTA Buttons */}
          <div className="flex gap-2 md:gap-4 justify-center items-center mt-10 sm:mt-12">
            <div className="bg-[#f9f9f9]/10 transition-all duration-200 ease-in-out backdrop-blur-3xl rounded-full">
              <button className="group relative bg-[#338aca]/70 hover:bg-radial from-[#4290bc]/30 to-[#0e2051] via-[#18359a]/30 text-[#f9f9f9] md:px-8 md:py-4 px-4 py-2 font-medium rounded-[inherit] hover:ring-[#3D56B2]/30 hover:ring-4 transition-all duration-300 ease-in-out">
                Get Started
              </button>
            </div>
            <a
              href="#learn"
              className="md:px-8 md:py-4 px-4 py-2 rounded-full ring-[#4290bc]/10 ring-1 hover:bg-[#4290bc]/20  text-white"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
