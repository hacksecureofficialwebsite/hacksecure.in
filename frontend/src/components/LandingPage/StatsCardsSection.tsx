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
    bgColor: "from-[#bbd2c5]/80 to-[#9ebaf3]/10", // dark blue gradient
  },
  {
    number: "200+",
    label: "Employees",
    icon: UsersIcon,
    description: "Expert cybersecurity professionals",
    bgColor: "from-[#b67ed6]/80 to-[#b67ed6]/10 ", // slate blue
  },
  {
    number: "700+",
    label: "Enterprise customers",
    icon: BuildingIcon,
    description: "Global organizations trust our solutions",
    bgColor: "from-[#9d5353]/80 to-[#bf8b67]/10", // burnt orange
  },
  {
    number: "200+",
    label: "Patents and applications",
    icon: AwardIcon,
    description: "Innovation in cybersecurity technology",
    bgColor: "from-[#f5eee6]/80 to-[#ffd3a2]/10", // warm marble white
  },
  {
    number: "60",
    label: "Countries",
    icon: GlobeIcon,
    description: "Worldwide presence and impact",
    bgColor: "from-[#ffe1c1]/80 to-[#ffe1c1]/10", // pale gold
  },
  {
    number: "14",
    label: "Digital Crime Resistance Centers",
    icon: MapPinIcon,
    description: "Strategic locations for rapid response",
    bgColor: "from-[#fbc7d4]/80 to-[#9769f0]/10", // slate blue again
  },
];

export default function StatsCardsSection() {
  return (
    <section className="py-24 bg-[#0c0c0c] relative">
      <div className="text-center mb-16 relative">
        <p className="md:text-2xl text-xs text-[#f9f9f9] md:text-[#f9f9f9]/80">
          Numbers that speak to our impact and reach
        </p>
        <h2 className="absolute -top-12 md:top-12 lg:top-7 w-full text-center text-6xl md:text-7xl lg:text-9xl font-anybody-bold text-[#f9f9f9]/30 ">
          Proven <span className="text-[#9ebaf3]/50">Excellence</span>
        </h2>
      </div>
      <div className="max-w-fit mx-auto ">
        <div className="relative grid grid-cols-2 mx-10 md:mx-0 md:grid-cols-3 gap-3 ">
          {stats.map((stat, index) => (
            <SpotlightCard
              key={index}
              className={`group relative overflow-hidden rounded-xl bg-gradient-to-tr ${stat.bgColor} transition-all duration-500`}
              spotlightColor="rgba(66, 144, 188, 0.75)"
            >
              <div className="relative flex group p-4 items-start space-x-4">
                <div className="flex justify-center  group-hover:-translate-y-2 backdrop-blur-lg  transition-all duration-500 ease-in-out rounded-md  text-[#f9f9f9]">
                  <stat.icon />
                </div>
                <div className="absolute z-20 bottom-0 p-2  flex flex-col">
                  <h3 className="text-3xl md:text-6xl font-bold text-[#f9f9f9]">
                    {stat.number}
                  </h3>
                  <p className="text-[#9ebaf3] font-semibold text-lg">
                    {stat.label}
                  </p>
                  <div className="overflow-hidden transition-all duration-600 ease-in-out max-h-0 group-hover:max-h-40">
                    <p className="opacity-0 group-hover:opacity-100 transition-opacity duration-600 text-[#f9f9f9]/60 text-xs md:text-base">
                      {stat.description}
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-t pointer-events-none absolute bottom-0 h-[70%] group-hover:h-full w-full from-[#0c0c0c] to-transparent"></div>
            </SpotlightCard>
          ))}
        </div>
      </div>
    </section>
  );
}
