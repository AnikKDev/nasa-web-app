import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Header from "./Pages/SharedPages/Header";
import './App.css';
function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
