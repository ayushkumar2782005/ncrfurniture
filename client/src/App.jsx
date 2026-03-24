import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Designs from "./components/Designs";
import Contact from "./components/Contact";
import Info from "./pages/Info";

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