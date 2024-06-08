import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ReactLenis } from 'lenis/react';

import Navbar from './components/Navbar';
import Container from './components/Container';
import Homepage from './pages/Homepage';
import Index from './pages/Index';
import Studio from './pages/Studio';
import PageNotFound from './pages/PageNotFound';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <ReactLenis root>
        <Container>
          <Routes>
            <Route index element={<Homepage />} />
            <Route path="/studio" element={<Studio />} />
            <Route path="/index" element={<Index />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </Container>
      </ReactLenis>
    </BrowserRouter>
  );
}

export default App;
