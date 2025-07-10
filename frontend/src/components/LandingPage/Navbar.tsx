import { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ShinyText from "../../UI/ShinyText";

const navLinks = ["Services", "Partners", "LearnX", "Pricing", "Company"];

export default function Navbar() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const lastIndex = useRef<number | null>(null);

  const [hasScrolled, setHasScrolled] = useState(false);

  const handleMouseEnter = (index: number) => {
    lastIndex.current = activeIndex;
    setActiveIndex(index);
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

          <div className="nav-links md:flex text-sm hidden gap-6 text-[#f9f9f9]">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href="#"
                onMouseEnter={() => handleMouseEnter(index)}
                className="hover:underline"
              >
                {link}
              </a>
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

        <div className="expandable absolute mt-20 ml-53 inset-0">
          {navLinks.map((link, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-all duration-500 ease-in-out ${
                activeIndex === index
                  ? "opacity-100 translate-x-0"
                  : lastIndex.current !== null &&
                      lastIndex.current < index &&
                      activeIndex !== null
                    ? "opacity-0 -translate-x-15"
                    : lastIndex.current !== null &&
                        lastIndex.current > index &&
                        activeIndex !== null
                      ? "opacity-0 translate-x-15"
                      : "opacity-0"
              }`}
            >
              <div className="text-[#f9f9f9] text-3xl font-semibold">
                {link} Content
              </div>
              <p className="text-[#f9f9f9] mt-4">
                todo: add {link} details, cards, components, etc.
              </p>
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
}
