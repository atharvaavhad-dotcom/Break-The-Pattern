import Navbar from "../Navbar";
import Hero from "../Hero";
import Services from "../Services";
import Industries from "../Industries";
import Insights from "../Insights";
import Careers from "../Careers";
import Footer from "../Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="pt-28">
        <Hero />
        <Services />
        <Industries />
        <Insights />
        <Careers />
        <Footer />
      </main>
    </>
  );
}
