import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Service from "./components/Service";
import Industries from "./components/Industries";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="font-sans relative">
      <Header />
      <Hero />
      <div className="absolute top-0 left-0 z-0 bg-[url('../assets/images/ellipse.png')] w-[50vw] h-[200vh] bg-no-repeat bg-contain bg-left-top"></div>
      <About />

      <div className="relative overflow-visible">
        <div className="absolute top-0 left-0 z-2 bg-[url('../assets/images/ellipse.png')] w-[50vw] h-full bg-no-repeat bg-contain bg-center-top pointer-events-none"></div>
        <div className="absolute top-0 right-0 z-2 bg-[url('../assets/images/ellipseR.png')] w-[50vw] h-[100vh] bg-no-repeat bg-cover bg-center-top pointer-events-none"></div>
        <Industries />
        <Service />
      </div>

      <Footer />
    </main>
  );
}
