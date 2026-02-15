import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Services from "./components/pages/Services";
import Industries from "./components/pages/Industries";
import Insights from "./components/pages/Insights";
import Careers from "./components/pages/Careers";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Prank from "./components/pages/Prank";
import AdminQuiz from "./components/pages/AdminQuiz";
import AdminPortal from "./components/pages/AdminPortal";
import AdminPortalPrank from "./components/pages/AdminPortalPrank";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/industries" element={<Industries />} />
        <Route path="/insights" element={<Insights />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/prank" element={<Prank />} />
        <Route path="/admin-quiz" element={<AdminQuiz />} />
        <Route path="/admin-portal" element={<AdminPortal />} />
        <Route path="/apply/backend-dev" element={<AdminPortalPrank />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
