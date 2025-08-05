const sponsors = [
  { name: "Microsoft", logo: "/api/placeholder/120/40" },
  { name: "AWS", logo: "/api/placeholder/120/40" },
  { name: "Google", logo: "/api/placeholder/120/40" },
  { name: "IBM", logo: "/api/placeholder/120/40" },
  { name: "Cisco", logo: "/api/placeholder/120/40" },
  { name: "Oracle", logo: "/api/placeholder/120/40" },
];

export default function SponsorsSection() {
  return (
    <section className="py-40 bg-[#0c0c0c]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-sm text-white/50 uppercase tracking-wider mb-4">
            Leading the way in cyber intelligence.{" "}
          </p>
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-8">
            Trusted by Global Leaders
          </h3>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
          {sponsors.map((sponsor, index) => (
            <div
              key={index}
              className="rounded-lg  outline outline-[#f9f9f9]/10 p-1 backdrop-blur-3xl hover:bg-white/10 transition-all duration-300 "
            >
              <div className="h-8 w-20  rounded-[inherit] flex items-center justify-center">
                <span className="text-[#f9f9f9] text-xs font-medium">
                  {sponsor.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
