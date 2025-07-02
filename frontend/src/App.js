import './App.css';
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import Products from './pages/Products';
import Careers from './pages/Careers';
import PSL from './subpages/psl/page';
import Anubhav from './subpages/Anubhav/Anubhav';
import GeoMagic from './subpages/geo/Geomagic';
import Prastuti from './subpages/prastuti/Pras';
import React from 'react';
import Shiksha from './subpages/shiksha/component/Shiksha'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
      <BrowserRouter>
        <ScrollToTop/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/psl" element={<PSL />} />
            <Route path="/prastuti" element={<Prastuti />} />
            <Route path="/geomagic" element={<GeoMagic />} />
            <Route path="/shiksha" element={<Shiksha />} />
            <Route path="/anubhav" element={<Anubhav />} />
          </Routes>
      </BrowserRouter>
  );
}

export default App;
