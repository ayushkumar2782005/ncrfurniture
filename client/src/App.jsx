import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Designs from "./components/Designs.jsx";
import Contact from "./components/Contact.jsx";
import Info from "./pages/Info.jsx";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Designs />
              <Contact />
            </>
          }
        />

        <Route path="/info" element={<Info />} />
      </Routes>
    </>
  );
}

export default App;