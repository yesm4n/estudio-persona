import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

import Navbar from "./components/Navbar";
import Homepage from "./pages/Homepage";
import Index from "./pages/Index";
import Studio from "./pages/Studio";
import PageNotFound from "./pages/PageNotFound";

function App() {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <div className="container">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route index element={<Homepage />} />
          <Route path="/studio" element={<Studio />} />
          <Route path="/index" element={<Index />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
