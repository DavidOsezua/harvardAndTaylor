import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Requirements from "./pages/Requirements";
import Contact from "./pages/Contact";
import HomePage from "./pages/HomePage";
import Team from "./pages/Team";

const App = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="pt-20 grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/requirements" element={<Requirements />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/team" element={<Team />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;
