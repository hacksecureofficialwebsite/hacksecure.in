import AwardIcon from "../../icons/AwardIcon";
import BuildingIcon from "../../icons/BuildingIcon";
import GlobeIcon from "../../icons/GlobeIcon";
import ShieldIcon from "../../icons/ShieldIcon";
import UsersIcon from "../../icons/UsersIcon";
import SpotlightCard from "../../UI/SpotlightCard";
import MapPinIcon from "../../icons/MapPinIcon";

const stats = [
  {
    number: "1900+",
    label: "Successful investigations",
    icon: ShieldIcon,
    description: "Critical security incidents resolved with precision",
  },
  {
    number: "200+",
    label: "Employees",
    icon: UsersIcon,
    description: "Expert cybersecurity professionals",
  },
  {
    number: "700+",
    label: "Enterprise customers",
    icon: BuildingIcon,
    description: "Global organizations trust our solutions",
  },
  {
    number: "200+",
    label: "Patents and applications",
    icon: AwardIcon,
    description: "Innovation in cybersecurity technology",
  },
  {
    number: "60",
    label: "Countries",
    icon: GlobeIcon,
    description: "Worldwide presence and impact",
  },
  {
    number: "14",
    label: "Digital Crime Resistance Centers",
    icon: MapPinIcon,
    description: "Strategic locations for rapid response",
  },
];

export default function StatsCardsSection() {
  return (
    <section className="py-24 bg-[#0c0c0c] relative">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16 relative">
          <p className="md:text-2xl text-xs text-[#f9f9f9] md:text-[#f9f9f9]/80">
            Numbers that speak to our impact and reach
          </p>
          <h2 className="absolute -top-12 md:top-12 lg:top-7 w-full text-center text-6xl md:text-7xl lg:text-9xl font-anybody-bold text-[#f9f9f9]/30 ">
            Proven <span className="text-[#9ebaf3]/50">Excellence</span>
          </h2>
        </div>
        <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 group-[blur]">
          {stats.map((stat, index) => (
            <SpotlightCard
              key={index}
              className="h-full backdrop-blur-sm bg-slate-400/10 cursor-default"
              spotlightColor="rgba(66, 144, 188, 0.35)"
            >
              <div className="flex group items-start space-x-4">
                <div className="bg-[#353a5f]/60 group-hover:bg-[#9ebaf3]/10 group-hover:text-[#f9f9f9] transition-colors duration-500 ease-in-out rounded-xl p-3 text-[#f9f9f9]/80">
                  <stat.icon />
                </div>
                <div className="flex-1">
                  <h3 className="text-3xl md:text-4xl font-bold text-[#f9f9f9] mb-1">
                    {stat.number}
                  </h3>
                  <p className="text-[#9ebaf3] font-semibold text-lg mb-2">
                    {stat.label}
                  </p>
                  <p className="text-[#f9f9f9]/60 text-sm">
                    {stat.description}
                  </p>
                </div>
              </div>
            </SpotlightCard>
          ))}
        </div>
      </div>
    </section>
  );
}
