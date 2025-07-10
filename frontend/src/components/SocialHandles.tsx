import FBIcon from "../icons/FBIcon";
import LinkedInIcon from "../icons/LinkedInIcon";
import IGIcon from "../icons/IGIcon";
import GHIcon from "../icons/GHIcon";

export default function SocialHandles() {
  return (
    <div className="flex flex-col items-center md:items-end mt-12 md:mt-0">
      <div className="group flex h-full space-x-4 text-gray-500 text-2xl bg-slate-400/10 backdrop-blur-sm px-6 py-2 rounded-full border border-[#4290bc]/30">
        <a
          href="#"
          className="transition-all w-6 h-6 ease-in-out duration-300 hover:text-[#1877F2] group-hover:opacity-80 hover:opacity-100 hover:scale-110 hover:-translate-y-2"
        >
          <FBIcon />
        </a>
        <a
          href="#"
          className="transition-all w-6 h-6 ease-in-out duration-300 hover:text-[#0A66C2] group-hover:opacity-80 hover:opacity-100 hover:scale-110 hover:-translate-y-2"
        >
          <LinkedInIcon />
        </a>
        <a
          href="#"
          className="transition-all w-6 h-6 ease-in-out duration-300 hover:text-[#333] group-hover:opacity-80 hover:opacity-100 hover:scale-110 hover:-translate-y-2"
        >
          <GHIcon />
        </a>
        <a
          href="#"
          className="transition-all w-6 h-6 ease-in-out duration-300 hover:text-[#E1306C] group-hover:opacity-80 hover:opacity-100 hover:scale-110 hover:-translate-y-2"
        >
          <IGIcon />
        </a>
      </div>
    </div>
  );
}
