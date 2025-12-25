import { useState, useEffect } from "react";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Technology from "./pages/Technology";
import Careers from "./pages/Careers";
import Contact from "./pages/Contact";

export default function App() {
  const [currentPage, setCurrentPage] = useState("home");

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <Home onNavigate={setCurrentPage} />;
      case "about":
        return <About />;
      case "services":
        return <Services />;
      case "technology":
        return <Technology />;
      case "careers":
        return <Careers onNavigate={setCurrentPage} />;
      case "contact":
        return <Contact />;
      default:
        return <Home onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen w-full bg-black text-white overflow-x-hidden">
      <Navigation currentPage={currentPage} onNavigate={setCurrentPage} />

      <main className="w-full">
        {renderPage()}
      </main>

      <Footer />
    </div>
  );
}
