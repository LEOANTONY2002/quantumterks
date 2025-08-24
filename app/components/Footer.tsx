export default function Footer() {
  return (
    <footer
      id="contact"
      className="w-full bg-gradient-to-t from-slate-100 to-white pt-10 pb-16 scroll-mt-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Contact card */}
        <div className="rounded-xl bg-[#0f172a] text-white shadow-2xl ring-1 ring-black/10 overflow-hidden">
          {/* Quick links inside the contact card */}
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Left: info */}
            <div className="p-6 sm:p-8">
              <h2 className="font-serif text-2xl sm:text-3xl">Contact Us</h2>

              <div className="mt-6 space-y-3 text-slate-300 text-sm leading-relaxed">
                <p>
                  <span className="text-white font-medium">For Employers:</span>{" "}
                  Ready to find your next great hire? Contact us to discuss your
                  staffing needs.
                </p>
                <p>
                  <span className="text-white font-medium">
                    For Job Seekers:
                  </span>{" "}
                  Explore new career opportunities in IT or Healthcare/Pharma.
                </p>
                <div className="pt-2 space-y-1">
                  <p>Phone: +1 - 469-830-8607</p>
                  <p>Email: talent@quantumterks.com</p>
                  <p>Address: 8 The Green, Suite B, Dover, DE 19901</p>
                  <p>Hours: Mon – Fri, 8:00 AM – 6:00 PM</p>
                </div>
              </div>
            </div>

            {/* Right: form */}
            <div className="bg-[#0b1226] p-6 sm:p-8">
              <form className="space-y-3">
                <input
                  className="w-full rounded border border-white/10 bg-transparent px-3 py-2 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500"
                  placeholder="Name"
                  type="text"
                />
                <input
                  className="w-full rounded border border-white/10 bg-transparent px-3 py-2 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500"
                  placeholder="Company (for employers) / Current Title (for job seekers)"
                  type="text"
                />
                <input
                  className="w-full rounded border border-white/10 bg-transparent px-3 py-2 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500"
                  placeholder="Email"
                  type="email"
                />
                <input
                  className="w-full rounded border border-white/10 bg-transparent px-3 py-2 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500"
                  placeholder="Phone Number"
                  type="tel"
                />
                <select
                  className="w-full rounded border border-white/10 bg-transparent px-3 py-2 text-sm text-slate-200 focus:outline-none focus:ring-2 focus:ring-sky-500 text-slate-400"
                  defaultValue=""
                >
                  <option
                    value=""
                    disabled
                    className="bg-[#0b1226] text-slate-400"
                  >
                    Select Industry
                  </option>
                  <option value="IT" className="bg-[#0b1226] text-slate-200">
                    IT
                  </option>
                  <option
                    value="Healthcare & Pharma"
                    className="bg-[#0b1226] text-slate-200"
                  >
                    Healthcare & Pharma
                  </option>
                </select>
                <textarea
                  className="w-full min-h-28 rounded border border-white/10 bg-transparent px-3 py-2 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500"
                  placeholder="Message"
                />
                <div className="pt-2">
                  <button
                    type="button"
                    className="inline-flex w-full items-center justify-center rounded-md bg-gradient-to-r from-teal-500 to-sky-600 px-4 py-2 text-sm font-medium text-white shadow hover:from-teal-600 hover:to-sky-700"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
          <nav
            aria-label="Footer quick links"
            className="bg-[#0b12269e] backdrop-blur-[1px] border-b border-white/10 px-4 sm:px-6 py-7"
          >
            <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-slate-200">
              <li>
                <a
                  href="#about"
                  className="hover:text-[#ffffff91] border-b border-white hover:border-[#ffffff91]"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#industries"
                  className="hover:text-[#ffffff91] border-b border-white"
                >
                  Industries We Serve
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-[#ffffff91] border-b border-white hover:border-[#ffffff91]"
                >
                  Our Services
                </a>
              </li>
              <li>
                <a
                  href="#why-partner"
                  className="hover:text-[#ffffff91] border-b border-white hover:border-[#ffffff91]"
                >
                  Why Partner With Us
                </a>
              </li>
              <li>
                <a
                  href="#process"
                  className="hover:text-[#ffffff91] border-b border-white hover:border-[#ffffff91]"
                >
                  Our Process
                </a>
              </li>
            </ul>
          </nav>
        </div>

        {/* bottom bar */}
        <div className="mt-6 text-center text-xs text-slate-500">
          © {new Date().getFullYear()} Quantumterks. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
