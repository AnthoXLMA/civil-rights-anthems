import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Collection from './pages/Collection';
import Vinyle from './pages/Vinyle';
import Listen from './pages/Listen';
import Shop from './pages/Shop';
import Contact from './pages/Contact';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/collection" element={<Collection />} />
          <Route path="/vinyle/:id" element={<Vinyle />} />
          <Route path="/listen" element={<Listen />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;

