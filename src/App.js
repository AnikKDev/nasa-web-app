import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Header from "./Pages/SharedPages/Header";
import './App.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Quiz from "./Pages/Quiz/Quiz";
import QuizContent from "./Pages/Quiz/QuizContent";
function App() {
  AOS.init();
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quiz" element={<QuizContent />} />
        {/* <Route path="/"/> */}
      </Routes>
    </div>
  );
}

export default App;
