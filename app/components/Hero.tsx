import Link from "next/link";
import Image from "next/image";
import hero from "../../assets/images/hero.png";

export default function Hero() {
  return (
    <section id="home" className="w-full lg:-mt-10 h-screen sm:scroll-mt-0">
      <div className="w-screen lg:max-w-7xl px-8 lg:mx-auto gap-10 h-screen flex flex-col lg:flex-row items-center justify-center">
        {/* Left text */}
        <div
          className="z-[1] animate-hero-in"
          style={{ animationDelay: "80ms" }}
        >
          <h1 className="mt-4 font-serif text-3xl font-bold sm:text-4xl lg:text-5xl leading-tight text-slate-900 text-center lg:text-left">
            Creating Pathways for Talent and Opportunity
          </h1>
          <p className="mt-4 text-slate-600 max-w-prose text-center lg:text-left">
            Expert staffing solutions for technology and healthcare
            organizations. We bridge the gap between specialized qualifications
            and the demands of modern workplaces.
          </p>
          <div className="mt-6 flex flex-wrap gap-3 justify-center lg:justify-start">
            <Link
              href="#contact"
              className="inline-flex items-center justify-center rounded-md bg-gradient-to-r from-teal-300 to-sky-400 px-6 py-4 text-white text-sm shadow font-extrabold transition-all duration-200 ease-out will-change-transform hover:scale-[1.03] hover:shadow-lg"
            >
              Get Started Today
            </Link>
            <Link
              href="#contact"
              className="inline-flex items-center justify-center rounded-md border border-sky-300 px-6 py-4 text-sky-800 text-sm font-medium transition-all duration-200 ease-out hover:bg-sky-50 hover:scale-[1.02]"
            >
              Find Talent
            </Link>
            <Link
              href="#services"
              className="inline-flex items-center justify-center rounded-md border border-sky-400 px-6 py-4 text-sky-800 text-sm font-medium transition-all duration-200 ease-out hover:bg-sky-50 hover:scale-[1.02]"
            >
              Explore Opportunities
            </Link>
          </div>
        </div>

        {/* Right visual */}
        <div
          className="bg-gradient-to-b from-white to-sky-100 lg:bg-gradient-to-b lg:from-sky-50 lg:to-white lg:bg-white flex items-center w-full lg:h-screen sm:w-screen lg:w-[50vw] lg:z-0 pointer-events-none animate-hero-in lg:flex lg:align-center lg:justify-center"
          style={{ animationDelay: "120ms" }}
        >
          <Image src={hero} className="lg:ml-5" alt="Hero" priority />
        </div>
      </div>
    </section>
  );
}
