import { useState } from 'react'
import Navbar from './components/Navbar';
import Home from './components/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import './App.css'
import Contact from './components/Contact';
import ServicesProducts from './components/ServicesProducts';
import ContactUs from './components/ContactUs';

function App() {
  return (
    <>
   <Router>
      <div>
        <Navbar />        
        <Routes>
          <Route path="/" element={<Home />} />  
          <Route path="/services&products" element={<ServicesProducts />} />          
          <Route path="/contactUs" element={<ContactUs />} />            
          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
        <Footer/>
      </div>
    </Router>
     
    </>
  );
}

export default App
