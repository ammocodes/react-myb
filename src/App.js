import React from 'react';
import './App.css';
import AppRoutes from './routes';
import Header from './components/Header';
import Services from './components/Services';
import Footer from './components/Footer';
import Blog from './components/Blog';
import BlogPosts from './components/BlogPosts';

function App() {
  return (
    <div className="App">
      <Header />
      <Services />
      <AppRoutes />
      <Blog />
      <BlogPosts />
      <Footer />
    </div>
  );
}

export default App;
