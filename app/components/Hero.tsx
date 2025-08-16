import Link from "next/link";
import Image from "next/image";
import hero from "../../assets/images/hero.png";

export default function Hero() {
  return (
    <section
      id="home"
      className="w-full relative lg:-mt-10 pt-30 h-screen scroll-mt-24 sm:scroll-mt-0"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:h-screen lg:-mt-30 flex items-center">
        {/* Left text */}
        <div className="z-[1]">
          <h1 className="mt-4 font-serif text-3xl sm:text-4xl lg:text-5xl leading-tight text-slate-900 text-center lg:text-left">
            Connect Talent with Opportunity in IT & Healthcare
          </h1>
          <p className="mt-4 text-slate-600 max-w-prose text-center lg:text-left">
            Expert staffing solutions for technology and healthcare
            organizations. We bridge the gap between specialized qualifications
            and the demands of modern workplaces.
          </p>
          <div className="mt-6 flex flex-wrap gap-3 justify-center lg:justify-start">
            <Link
              href="#contact"
              className="inline-flex items-center justify-center rounded-md bg-gradient-to-r from-teal-300 to-sky-400 px-6 py-4 text-white text-sm font-medium shadow hover:bg-sky-700"
            >
              Get Started Today
            </Link>
            <Link
              href="#contact"
              className="inline-flex items-center justify-center rounded-md border border-sky-300 px-6 py-4 text-sky-800 text-sm font-medium hover:bg-sky-50"
            >
              Find Talent
            </Link>
            <Link
              href="#services"
              className="inline-flex items-center justify-center rounded-md border border-sky-400 px-6 py-4 text-sky-800 text-sm font-medium hover:bg-sky-50"
            >
              Explore Opportunities
            </Link>
          </div>
        </div>

        {/* Right visual */}
        <div className="bg-gradient-to-b from-white to-sky-100 lg:bg-gradient-to-b lg:from-sky-50 lg:to-white lg:bg-white flex items-end w-full absolute sm:w-screen bottom-18 top-auto right-0 lg:top-0 lg:right-0 lg:w-[50vw] lg:z-0 pointer-events-none overflow-hidden">
          <Image src={hero} className="lg:ml-5" alt="Hero" />
        </div>
      </div>
    </section>
  );
}
