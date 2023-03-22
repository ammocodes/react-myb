import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Services from './components/Services';
import Blog from './components/Blog';
import About from './components/About';
import Contact from './components/Contact';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/services" element={<Services />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
};

export default AppRoutes;
