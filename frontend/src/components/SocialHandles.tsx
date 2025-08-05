import LinkedInIcon from "../icons/LinkedInIcon";
import XIcon from "../icons/XIcon";
import DiscordIcon from "../icons/DiscordIcon";
import WhatsappIcon from "../icons/WhatsappIcon";
import YoutubeIcon from "../icons/YoutubeIcon";

export default function SocialHandles() {
  return (
    <div className="flex flex-col items-center md:items-end mt-12 md:mt-0">
      <div className="group flex h-full space-x-4 text-[#0c0c0c]/50 text-2xl bg-slate-400/10 backdrop-blur-sm px-6 py-2 rounded-full border border-[#4290bc]/30">
        <a
          href="https://x.com/hacksecure"
          className="transition-all w-6 h-6 ease-in-out duration-300 hover:text-[#000000] group-hover:opacity-80 hover:opacity-100 hover:scale-110 hover:-translate-y-1"
        >
          <XIcon />
        </a>
        <a
          href="https://www.linkedin.com/company/hacksecureofficial"
          className="transition-all w-6 h-6 ease-in-out duration-300 hover:text-[#0077b5] group-hover:opacity-80 hover:opacity-100 hover:scale-110 hover:-translate-y-1"
        >
          <LinkedInIcon />
        </a>
        <a
          href="https://discord.gg/kysX4T6SwA"
          className="transition-all w-6 h-6 ease-in-out duration-300 hover:text-[#7289da] group-hover:opacity-80 hover:opacity-100 hover:scale-110 hover:-translate-y-1 "
        >
          <DiscordIcon />
        </a>
        <a
          href="https://www.youtube.com/@hacksecureofficial"
          className="transition-all w-6 h-6 ease-in-out duration-300 hover:text-[#CD201F] group-hover:opacity-80 hover:opacity-100 hover:scale-110 hover:-translate-y-1"
        >
          <YoutubeIcon />
        </a>
        <a
          href="https://chat.whatsapp.com/KBfLSuYb6xP3Ki5yXMe0N9"
          className="transition-all w-6 h-6 ease-in-out duration-300 hover:text-[#25D366] group-hover:opacity-80 hover:opacity-100 hover:scale-110 hover:-translate-y-1"
        >
          <WhatsappIcon />
        </a>
      </div>
    </div>
  );
}
