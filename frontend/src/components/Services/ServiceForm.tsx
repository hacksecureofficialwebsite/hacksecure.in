import React, { useState } from "react";
import ServicesIcon from "../../icons/ServicesIcon";
import ServiceFormFields from "./ServiceFormFields";
import { serviceContent } from "../../utils/serviceContent";
import Silk from "../../UI/Silk";
import { Link, useSearchParams } from "react-router-dom";
import SubmitApplicationButton from "../../UI/SubmitApplicationButton";
import Dropdown from "../../icons/Dropdown";

const SERVICE_OPTIONS = {
  workshops: { name: "Workshops", query: "workshops" },
  webinars: { name: "Webinars", query: "webinars" },
  cyberinvestigations: {
    name: "Cyber Investigations",
    query: "investigations",
  },
  sessions: { name: "Sessions", query: "sessions" },
} as const;

type ServiceQuery = keyof typeof SERVICE_OPTIONS;
// type ServiceOption = (typeof SERVICE_OPTIONS)[ServiceQuery];

const ServiceForm: React.FC = () => {
  const [searchParams] = useSearchParams();

  const typeParam = searchParams.get("type")?.toLowerCase() ?? "";
  const isValidQuery = typeParam && typeParam in SERVICE_OPTIONS;
  const initialQuery = isValidQuery ? (typeParam as ServiceQuery) : "";
  const [selectedService, setSelectedService] = useState<ServiceQuery | "">(
    initialQuery
  );

  const current = selectedService ? serviceContent[selectedService] : null;
  return (
    <div className="min-h-screen w-full text-white p-8 flex justify-center items-center">
      {/* Background animation */}
      <div className="absolute -z-5 h-screen inset-0">
        <Silk
          speed={2}
          scale={0.8}
          color="#5C7AEA"
          noiseIntensity={4}
          rotation={4.5}
        />
      </div>

      {/* Main container */}
      <div className="p-1  backdrop-contrast-200 rounded-3xl w-full md:max-w-7xl md:h-full ">
        {" "}
        <div className="w-full md:max-w-7xl md:h-[90vh] rounded-3xl bg-[#0c0c0c]/90 flex flex-col md:flex-row overflow-hidden">
          {/* Left Panel */}
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
                <div className="rounded-full bg-gradient-to-br p-2 from-[#3D56B2] via-[#5C7AEA] to-[#E6E6E6] w-12 h-12 overflow-hidden flex items-center justify-center">
                  <ServicesIcon />
                </div>
                <h2 className="text-lg md:text-3xl font-semibold capitalize text-white">
                  {selectedService || "Select a service"}
                </h2>
              </div>

              {current && (
                <p className="text-sm mt-3 text-white/40">{current.about}</p>
              )}
            </div>

            <div className="mt-8 rounded-2xl text-white">
              {current ? (
                <div className="gap-3 flex flex-wrap ">
                  {Object.entries(
                    current.topics.reduce((acc, topic) => {
                      acc[topic.category] = acc[topic.category] || [];
                      acc[topic.category].push(topic.name);
                      return acc;
                    }, {} as Record<string, string[]>)
                  ).map(([category, topicNames]) => (
                    <div
                      key={category}
                      style={{
                        // background: gradientMap[category],
                        opacity: "90%",
                      }}
                      className=""
                    >
                      <div
                        className="flex w-fit px-3 rounded-2xl justify-center capitalize italic my-3"
                        // style={{ background: gradientMap[category] }}
                      >
                        {category}:
                      </div>
                      <div className="gap-3 flex flex-wrap">
                        {topicNames.map((name, idx) => (
                          <div
                            key={idx}
                            className="p-4 rounded-2xl text-sm md:text-md flex-grow font-bricolage-light ring-2 ring-[#3D56B2]/30 hover:bg-[#3D56B2]/5 transition-all"
                          >
                            {name}
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-zinc-400 text-sm">
                  Choose a service to see details.
                </p>
              )}
            </div>
          </div>

          {/* Right Panel */}
          <div className="w-full md:w-1/2 p-8 space-y-6 overflow-y-auto scroll-thin">
            <div>
              <label className="block mb-1 text-sm font-medium text-white">
                Select Service Type
              </label>
              <div className="relative group">
                <select
                  value={selectedService}
                  onChange={(e) =>
                    setSelectedService(e.target.value as ServiceQuery | "")
                  }
                  className="appearance-none w-full  p-3 rounded-2xl bg-[#1a1a1a] border border-neutral-800 focus:outline-none focus:ring-3 focus:ring-[#3D56B2]/30"
                >
                  <option value="">-- Choose --</option>

                  {Object.entries(SERVICE_OPTIONS).map(([query, option]) => (
                    <option key={query} value={query} className="">
                      {option.name}
                    </option>
                  ))}
                </select>
                <div className="pointer-events-none absolute inset-y-3 p-1 right-3 flex items-center text-white group-hover:bg-[#3D56B2]/30 rounded-full">
                  <Dropdown />
                </div>
              </div>
            </div>

            {selectedService ? (
              <>
                <ServiceFormFields selectedService={selectedService} />
                <div className="w-full flex justify-end">
                  <SubmitApplicationButton />
                </div>
              </>
            ) : (
              <p className="text-neutral-500 text-sm italic">
                Select a service to view form fields.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceForm;
