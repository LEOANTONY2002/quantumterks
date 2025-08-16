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
      <Industries />
      <Service />
      <Footer />
    </main>
  );
}
