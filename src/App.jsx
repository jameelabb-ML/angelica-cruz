import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import HowItWorks from "./components/HowItWorks";
import BookingForm from "./components/BookingForm";
import FinalCTA from "./components/FinalCTA";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import FloatingWhatsApp from "./components/FloatingWhatsApp";

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <HowItWorks />
        <BookingForm />
        <FinalCTA />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}

export default App;
