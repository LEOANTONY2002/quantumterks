"use client";

import Image from "next/image";
import Title from "./Title";
import dot from "../../assets/icons/circle.svg";
// Import all technology icons
import t1 from "../../assets/icons/t1.png";
import t2 from "../../assets/icons/t2.png";
import t3 from "../../assets/icons/t3.png";
import t4 from "../../assets/icons/t4.png";
import t5 from "../../assets/icons/t5.png";
import t6 from "../../assets/icons/t6.png";
import t7 from "../../assets/icons/t7.png";
// Import all healthcare icons
import h1 from "../../assets/icons/h1.png";
import h2 from "../../assets/icons/h2.png";
import h3 from "../../assets/icons/h3.png";
import h4 from "../../assets/icons/h4.png";
import h5 from "../../assets/icons/h5.png";
import h6 from "../../assets/icons/h6.png";
import h7 from "../../assets/icons/h7.png";
import h8 from "../../assets/icons/h8.png";

const techIcons = [t1, t2, t3, t4, t5, t6, t7];
const healthIcons = [h1, h2, h3, h4, h5, h6, h7, h8];

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
      className="relative text-black py-20 scroll-mt-24 bg-[url('../assets/images/industry.png')] bg-cover bg-center bg-no-repeat"
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
          {industries.map((group, group_index) => (
            <section key={group.name}>
              <h3
                id={`${group.name}-title`}
                className="text-4xl z-0 text-center font-serif font-semibold w-full mb-4 flex items-center justify-center gap-2"
              >
                {group.name}
              </h3>
              <div className="flex flex-wrap justify-center items-center gap-5">
                {group.items.map((item, index) => {
                  return (
                    <div
                      key={`${group.name}-${item}`}
                      className="flex flex-col justify-center items-center h-[120px] w-[170px] text-center gap-2 backdrop-blur-xs p-3 rounded-2xl border border-[#fafcfd7a] bg-gradient-to-br from-sky-50/20 to-teal-20/80 shadow-[5px_5px_30px_#0000001a,inset_0_0_15px_rgba(0,0,0,0.05)] hover:shadow-[8px_8px_40px_#00000026,inset_0_0_20px_rgba(0,0,0,0.05)] hover:opacity-100 transform hover:scale-[1.05] hover:-translate-y-0.5 transition-all duration-300 ease-out"
                    >
                      <Image
                        src={
                          group_index === 0
                            ? techIcons[index] || dot
                            : healthIcons[index] || dot
                        }
                        alt={""}
                        width={50}
                        height={50}
                      />
                      <h4 className="text-sm font-semibold leading-snug text-center">
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
