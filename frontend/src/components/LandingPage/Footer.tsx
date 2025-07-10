import { Link } from "react-router-dom";
import SocialHandles from "../SocialHandles";
export const Footer = () => {
  return (
    <footer className="fixed z-0 h-[650px] md:h-[450px] lg:h-[430px] flex justify-center bottom-0 text-center w-full text-8xl bg-[#f9f9f9] text-[#0c0c0c] overflow-hidden">
      <h1 className="absolute bottom-0 left-1/2 -translate-x-1/2 text-[20vw] md:text-[15vw] font-extrabold text-black/5 pointer-events-none select-none whitespace-nowrap">
        Hack Secure
      </h1>

      <div className="relative mt-30 md:mt-10 flex flex-col  justify-center items-center md:gap-8 max-w-7xl mx-auto px-8 py-16 md:py-24">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 text-xs md:text-sm text-slate-700">
          <div className="flex flex-col">
            <div className="font-bold mb-4">Company</div>
            <Link to="" className="py-1 hover:text-black hover:underline">
              About Us
            </Link>
            <Link to="" className="py-1 hover:text-black hover:underline">
              Our Team
            </Link>
            <Link to="" className="py-1 hover:text-black hover:underline">
              Careers
            </Link>
            <Link to="" className="py-1 hover:text-black hover:underline">
              Media Center
            </Link>
            <Link to="" className="py-1 hover:text-black hover:underline">
              Contact Us
            </Link>
          </div>
          <div className="flex flex-col">
            <div className="font-bold mb-4">Resources</div>
            <Link to="" className="py-1 hover:text-black hover:underline">
              Training
            </Link>
            <Link to="" className="py-1 hover:text-black hover:underline">
              Certifications
            </Link>
            <Link to="" className="py-1 hover:text-black hover:underline">
              Blogs
            </Link>
            <Link to="" className="py-1 hover:text-black hover:underline">
              Events
            </Link>
            <Link to="" className="py-1 hover:text-black hover:underline">
              News
            </Link>
          </div>
          <div className="flex flex-col">
            <div className="font-bold mb-4">Legal Compliance</div>
            <Link to="" className="py-1 hover:text-black hover:underline">
              Data Privacy Framework
            </Link>
            <Link to="" className="py-1 hover:text-black hover:underline">
              Terms & Conditions
            </Link>
            <Link to="" className="py-1 hover:text-black hover:underline">
              Privacy Policy
            </Link>
          </div>
          <div className="flex flex-col">
            <div className="font-bold mb-4">Support</div>
            <Link to="" className="py-1 hover:text-black hover:underline">
              FAQ Section
            </Link>
            <Link to="" className="py-1 hover:text-black hover:underline">
              Organization
            </Link>
            <Link to="" className="py-1 hover:text-black hover:underline">
              Headquarters & Branches
            </Link>
          </div>
        </div>

        <SocialHandles />
        <div className="text-xs text-[#0c0c0c]/40">
          © 2025 HackSecure. All rights reserved.
        </div>
      </div>
    </footer>
  );
};
