import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Index from "./pages/Index";
import Shop from "./pages/Shop";
import Studio from "./pages/Studio";
import Journal from "./pages/Journal";
import PageNotFound from "./pages/PageNotFound";

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="studio" element={<Studio />} />
          <Route path="shop" element={<Shop />} />
          <Route path="index" element={<Index />} />
          <Route path="journal" element={<Journal />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
