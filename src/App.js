import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Header from "./Pages/SharedPages/Header";
import './App.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Quiz from "./Pages/Quiz/Quiz";
function App() {
  AOS.init();
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quiz" element={<Quiz />} />
      </Routes>
    </div>
  );
}

export default App;
