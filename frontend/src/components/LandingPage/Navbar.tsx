import { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ShinyText from "../../UI/ShinyText";
import { getCardData } from "../../utils/CardData";

const navLinks = ["Services", "Partners", "LearnX", "Pricing", "Company"];
const expandableLinks = ["Services", "Partners", "Company"];

export default function Navbar() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const lastIndex = useRef<number | null>(null);

  const [hasScrolled, setHasScrolled] = useState(false);

  const handleMouseEnter = (index: number) => {
    const link = navLinks[index];
    if (expandableLinks.includes(link)) {
      lastIndex.current = activeIndex;
      setActiveIndex(index);
    } else {
      setActiveIndex(null);
    }
  };

  const handleMouseLeave = () => {
    setActiveIndex(null);
    lastIndex.current = null;
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setHasScrolled(true);
      } else {
        setHasScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 w-full z-50"
      onMouseLeave={handleMouseLeave}
    >
      <div
        className={`relative my-4 overflow-hidden transition-all duration-400
          ${
            hasScrolled || activeIndex !== null
              ? "bg-[#051118]/20 ring ring-[#f9f9f9]/10 backdrop-blur-md shadow-md"
              : "bg-transparent"
          }
          ${
            activeIndex !== null
              ? "w-full h-[70vh] rounded-b-4xl mt-0 pt-4 shadow-2xl "
              : "max-w-6xl mx-auto rounded-4xl md:rounded-2xl  "
          }`}
      >
        <div className="relative w-full max-w-6xl mx-auto pl-6 pr-4 py-2 md:py-3 flex items-center justify-between z-10 ">
          <Link
            to={"/"}
            className="site-logo text-lg md:text-xl font-semibold text-[#f9f9f9] font-bricolage-logo"
          >
            Hack Secure
          </Link>

          <div className="nav-links md:flex text-sm hidden gap-6 text-[#f9f9f9] group/nav">
            {navLinks.map((link, index) => (
              <Link
                to={`/${link.toLowerCase()}`}
                key={index}
                onMouseEnter={() => handleMouseEnter(index)}
                className={`transition-opacity duration-300 
        ${
          activeIndex !== null && activeIndex !== index
            ? "opacity-30"
            : "opacity-80"
        } 
        group-hover/nav:opacity-40 group-hover/nav:hover:opacity-100
        group-focus-within/nav:opacity-40 focus:opacity-100
        `}
              >
                {link}
              </Link>
            ))}
          </div>

          <Link
            to={"/signup"}
            className="sign-up-btn group text-sm backdrop-blur-3xl bg-[#9ebecb]/10 flex px-2 p-0.5 lg:px-5 lg:py-2 justify-center items-center hover:bg-[#9ebecb]/20 rounded-4xl md:rounded-xl"
          >
            <ShinyText
              text="Sign up"
              disabled={false}
              speed={3}
              className="group-hover:text-[#f9f9f9]"
            />
          </Link>
        </div>

        <div className="expandable absolute mt-20 mx-53 inset-0 ">
          {navLinks.map((link, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-all duration-500 ease-in-out
              ${
                activeIndex === index && expandableLinks.includes(link)
                  ? "opacity-100 translate-x-0 pointer-events-auto"
                  : lastIndex.current !== null &&
                      lastIndex.current < index &&
                      activeIndex !== null
                    ? "opacity-0 -translate-x-15 pointer-events-none"
                    : lastIndex.current !== null &&
                        lastIndex.current > index &&
                        activeIndex !== null
                      ? "opacity-0 translate-x-15 pointer-events-none"
                      : "opacity-0 pointer-events-none"
              }`}
            >
              {expandableLinks.includes(link) && (
                <div className="h-full pb-5 ">
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 h-full ">
                    {getCardData(link).map((card, idx) => (
                      <Link
                        to={`/${link}?type=${encodeURIComponent(card.title.replaceAll(" ", "").toLowerCase())}`}
                        key={idx}
                        className="group rounded-2xl bg-gradient-to-bl from-[#4290bc]/30 to-[#5C7AEA]/30 backdrop-blur-2xl p-6 text-[#f9f9f9] transition-all duration-300 overflow-hidden h-full flex flex-col hover:scale-[0.95] border border-[#4290bc]/30"
                      >
                        <div className="flex items-center gap-5">
                          <h3 className="text-xl font-bold">{card.title}</h3>

                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-5 h-5 -translate-x-3 transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 text-[#4290bc]/80"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="4"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M19 5L5 19" />
                            <path d="M13 5H19V11" />
                            {/* <path d="m9 18 6-6-6-6" /> */}
                          </svg>
                        </div>

                        <p
                          className="text-sm text-[#f9f9f9]/70 border-l-2 border-l-[#f9f9f9] pl-2 group-hover:pl-3 mt-auto 
               transition-all duration-300 transform group-hover:translate-x-1"
                        >
                          {card.description}
                        </p>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
}
