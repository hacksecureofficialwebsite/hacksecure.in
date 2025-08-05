import React, { useState } from "react";
import PartnerFormFields from "./PartnerFormFields";
import Silk from "../../UI/Silk";
import { Link, useSearchParams } from "react-router-dom";
import SubmitApplicationButton from "../../UI/SubmitApplicationButton";
import Dropdown from "../../icons/Dropdown";
import PartnersIcon from "../../icons/PartnersIcon";
import { partnerContent } from "../../utils/partnerContent";

const PARTNER_OPTIONS = {
  global: {
    name: "Global / International Partner",
    query: "global",
  },
  brandambassador: {
    name: "Brand Ambassador",
    query: "brandambassador",
  },
  "events&sponsors": {
    name: "Event Partner / Sponsor",
    query: "events&sponsor",
  },
  community: {
    name: "Community Partner",
    query: "community",
  },
  corporate: {
    name: "Corporate Partner",
    query: "corporate",
  },
  academic: {
    name: "Academic Partner",
    query: "academic",
  },
} as const;

type Partnerquery = keyof typeof PARTNER_OPTIONS;
// type PartnerOption = (typeof PARTNER_OPTIONS)[Partnerquery];

const PartnerForm: React.FC = () => {
  const [searchParams] = useSearchParams();

  const typeParam = searchParams.get("type")?.toLowerCase() ?? "";

  const isValidquery = typeParam && typeParam in PARTNER_OPTIONS;
  const initialquery = isValidquery ? (typeParam as Partnerquery) : "";

  const [selectedPartnerquery, setSelectedPartnerquery] = useState<
    Partnerquery | ""
  >(initialquery);

  const selectedPartner = selectedPartnerquery
    ? PARTNER_OPTIONS[selectedPartnerquery]
    : null;

  const selectedPartnerType = selectedPartner?.name || "";

  const current = selectedPartnerquery
    ? partnerContent[selectedPartnerquery]
    : null;

  return (
    <div className="min-h-screen w-full text-white p-8 flex justify-center items-center">
      {/* Background animation */}
      <div className="absolute -z-5 h-screen inset-0">
        <Silk
          speed={2}
          scale={0.8}
          color="#4290bc"
          noiseIntensity={4}
          rotation={4.5}
        />
      </div>

      {/* Main container */}
      <div className="p-1  backdrop-contrast-200 rounded-3xl w-full md:max-w-7xl md:h-full ">
        {" "}
        <div className="w-full md:max-w-7xl md:h-[90vh] rounded-3xl bg-[#0c0c0c]/90 flex flex-col md:flex-row overflow-hidden">
          {/* Left Panel */}{" "}
          <div className="w-full md:w-1/2 p-8 flex flex-col bg-[#0a0a0a] h-full md:max-h-screen md:overflow-y-auto scroll-none">
            <div className="logo-container pb-3">
              <Link
                to="/"
                className="site-logo max-w-[25vw] text-lg md:text-2xl font-semibold text-[#f9f9f9]/50 font-bricolage-logo"
              >
                Hack Secure
              </Link>
            </div>

            <div>
              <div className="flex items-center gap-1 md:gap-4 py-2 md:py-4">
                <div className="rounded-full bg-gradient-to-bl p-2 from-[#3D56B2] via-[#5C7AEA] to-[#E6E6E6] w-12 h-12 overflow-hidden flex items-center justify-center">
                  <PartnersIcon />
                </div>
                <h2 className="text-lg md:text-3xl font-semibold capitalize text-white">
                  {selectedPartnerType || "Select a Partner Type"}
                </h2>
              </div>

              {/* {selectedPartnerType && ( */}
              {/*   <p className="text-sm mt-3 text-white/40"> */}
              {/*     Please fill out the form to partner with us as a{" "} */}
              {/*     <span className="italic">{selectedPartnerType}</span>. */}
              {/*   </p> */}
              {/* )} */}
              {current && (
                <p className="text-sm mt-3 text-white/40">{current.about}</p>
              )}
            </div>

            <div className="mt-8 rounded-2xl text-white">
              {current ? (
                <div className="space-y-6">
                  {/* Benefits Section */}
                  <div className="gap-3 flex flex-wrap">
                    {current.benefits.map((benefit, idx) => (
                      <div
                        key={idx}
                        className="p-4 rounded-2xl text-sm md:text-md flex-grow font-bricolage-light ring-2 ring-[#3D56B2]/30 hover:bg-[#3D56B2]/5 transition-all"
                        style={{ opacity: "90%" }}
                      >
                        {benefit}
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <p className="text-[#f9f9f9]/30 text-xs">
                  Choose a Partner to see benefits.
                </p>
              )}
            </div>
          </div>
          {/* Right Panel */}
          <div className="w-full md:w-1/2 p-8 space-y-6 overflow-y-auto scroll-thin">
            <div>
              <label className="block mb-1 text-sm font-medium text-white">
                Select Partnership Type
              </label>
              <div className="relative group">
                <select
                  value={selectedPartnerquery}
                  onChange={(e) =>
                    setSelectedPartnerquery(e.target.value as Partnerquery)
                  }
                  className="appearance-none w-full  p-3 rounded-2xl bg-[#1a1a1a] border border-neutral-800 focus:outline-none focus:ring-3 focus:ring-[#3D56B2]/30"
                >
                  <option value="">-- Choose --</option>
                  {Object.entries(PARTNER_OPTIONS).map(([query, option]) => (
                    <option key={query} value={query}>
                      {option.name}
                    </option>
                  ))}
                </select>

                <div className="pointer-events-none absolute inset-y-3 p-1 right-3 flex items-center text-white group-hover:bg-[#3D56B2]/30 rounded-full">
                  <Dropdown />
                </div>
              </div>
            </div>

            {selectedPartnerType ? (
              <>
                <PartnerFormFields selectedPartnerType={selectedPartnerType} />
                <div className="w-full flex justify-end">
                  <SubmitApplicationButton />
                </div>
              </>
            ) : (
              <p className="text-neutral-500 text-sm italic">
                Select a partner type to view form fields.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnerForm;
