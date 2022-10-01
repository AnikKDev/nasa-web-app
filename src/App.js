import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Header from "./Pages/SharedPages/Header";
import './App.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Quiz from "./Pages/Quiz/Quiz";
import QuizContent from "./Pages/Quiz/QuizContent";
import Prototype from "./Pages/Prototype/Prototype";
import Gallery from "./Pages/Gallery/Gallery";
import Calamities from "./Pages/Disasters/Calamities";
import Coordinate from "./Pages/Disasters/Coordinate";
function App() {
  AOS.init();
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/quiz" element={<QuizContent />} />
        <Route path="/prototype" element={<Prototype />} />
        <Route path="/calamities" element={<Calamities />} />
        <Route path="/coordinate/:id" element={<Coordinate />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
    </div>
  );
}

export default App;
