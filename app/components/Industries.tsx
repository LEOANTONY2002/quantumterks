"use client";

import Image from "next/image";
import Title from "./Title";
import dot from "../../assets/icons/circle.svg";

export default function Industries() {
  const industries = [
    {
      name: "Technology Sector",
      items: [
        "Software Development Companies",
        "Fintech Organizations",
        "E-commerce Platforms",
        "Telecommunications",
        "Cybersecurity Firms",
        "Data Analytics Companies",
        "Cloud Service Providers",
      ],
    },
    {
      name: "Healthcare & Life Sciences",
      items: [
        "Hospitals & Health Systems",
        "Pharmaceutical Companies",
        "Biotechnology Firms",
        "Medical Device Manufacturers",
        "Clinical Research Organizations",
        "Long-term Care Facilities",
        "Outpatient Clinics",
        "Diagnostic Laboratories",
      ],
    },
  ];

  return (
    <section
      id="industries"
      className="relative py-20 scroll-mt-24 bg-[url('../assets/images/industry.png')] bg-cover bg-center bg-no-repeat"
      aria-labelledby="industries-heading"
    >
      <div className="absolute z-0 top-0 left-0 w-full h-1/4 bg-gradient-to-b from-white to-transparent" />
      <div className="absolute z-0 bottom-0 left-0 w-full h-1/2 bg-gradient-to-b from-transparent to-white" />

      <div className="relative mx-auto px-6 lg:px-8">
        <div className="mx-auto max-w-[80vw] lg:max-w-2xl text-center">
          <Title title="Industries We Serve" />
        </div>

        {/* Stacked groups (one after another) with titles */}
        <div className="mx-auto lg:px-30 mt-20 space-y-10">
          {industries.map((group) => (
            <section key={group.name}>
              <h3
                id={`${group.name}-title`}
                className="text-4xl opacity-50 z-0 text-center font-serif font-semibold w-full text-[#0e3e69] mb-4 flex items-center justify-center gap-2"
              >
                {group.name}
              </h3>
              <div className="flex flex-wrap justify-center items-center gap-5">
                {group.items.map((item) => {
                  return (
                    <div
                      key={`${group.name}-${item}`}
                      className="flex flex-col justify-center items-center h-[120px] w-[170px] text-center gap-2 backdrop-blur-xs p-3 rounded-[13px] border border-[#fafcfd7a] inset-shadow-[0_0px_10px_rgba(0,0,0,0.1)] hover:border-[#fafcfd41] hover:inset-shadow-[0_0px_10px_rgba(0,0,0,0)] hover:transition-all hover:duration-300 hover:translate-y-[-5px]"
                    >
                      <Image src={dot} alt={"Dot"} width={20} height={20} />
                      <h4 className="text-sm font-semibold text-[#0e3e69] leading-snug text-center">
                        {item}
                      </h4>
                    </div>
                  );
                })}
              </div>
            </section>
          ))}
        </div>
      </div>
    </section>
  );
}
