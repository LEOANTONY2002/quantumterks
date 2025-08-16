"use client";

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
      className="relative bg-gradient-to-br from-white via-purple-50/20 to-white py-24 scroll-mt-24"
      aria-labelledby="industries-heading"
    >
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-[80vw] lg:max-w-2xl text-center">
          <h2
            id="industries-heading"
            className="text-xl font-bold tracking-tight text-gray-900"
          >
            Industries We Serve
          </h2>
        </div>

        {/* Stacked groups (one after another) with titles */}
        <div className="mx-auto mt-10 max-w-6xl space-y-10">
          {industries.map((group) => (
            <section
              key={group.name}
              aria-labelledby={`flex flex-col items-center`}
            >
              <h3
                id={`${group.name}-title`}
                className="text-xl text-center w-full font-semibold text-[#0e3e69] mb-4 flex items-center gap-2"
              >
                {group.name}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-4 gap-5">
                {group.items.map((item) => {
                  const tech = group.name === "Technology Sector";
                  const accent = tech
                    ? "from-white-50 to-teal-50"
                    : "from-white-50 to-amber-200";
                  const icon = tech ? (
                    // Chip/circuit icon
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden
                    >
                      <path
                        d="M8 8h8v8H8V8z"
                        stroke="#0e3e69"
                        strokeWidth="1.5"
                      />
                      <path
                        d="M12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M19 5l-2 2M7 17l-2 2"
                        stroke="#0e3e69"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                    </svg>
                  ) : (
                    // Health cross/heart pulse icon
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden
                    >
                      <path
                        d="M12 21s-6-4.35-8.485-6.835A6 6 0 1 1 12 5a6 6 0 1 1 8.485 9.165C18 16.65 12 21 12 21z"
                        stroke="#0e3e69"
                        strokeWidth="1.5"
                      />
                      <path
                        d="M7 12h2l1-2 2 4 1-2h4"
                        stroke="#0e3e69"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  );

                  return (
                    <div
                      key={`${group.name}-${item}`}
                      role="article"
                      aria-label={item}
                      className="group relative bg-gradient-to-br from-teal-400 to-sky-600 p-[2px]  rounded-2xl"
                    >
                      <div className="flex flex-col items-center text-center gap-2 bg-[#ffffffcf] p-2 pb-6 rounded-[13px]">
                        <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[#ffffff4b] border border-white">
                          {icon}
                        </div>
                        <h4 className="text-sm font-semibold text-[#0e3e69] leading-snug text-center w-full h-full">
                          {item}
                        </h4>
                      </div>
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
