import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./About/About";
import Home from "./Home/Home";
import Services from "./Services/Services";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/services" element={<Services />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
