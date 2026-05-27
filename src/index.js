import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './index.css';
import HomePage from './landing_page/home/Home_Page.js';
import Signup from './landing_page/signup/Signup.js';
import PricingPage from './landing_page/pricing/Pricing_Page.js';
import ProductPage from './landing_page/product/ProductPage.js';
import SupportPage from './landing_page/support/Support_Page.js';
import AboutPage from './landing_page/about/About_Page.js';
import Navbar from './landing_page/Navbar.js';
import Footer from './landing_page/Footer.js';
import NotFound from './landing_page/notfound.js'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Navbar/>
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/pricing' element={<PricingPage/>}/>
      <Route path='/product' element={<ProductPage/>}/>
      <Route path='/support' element={<SupportPage/>}/>
      <Route path='/about' element={<AboutPage/>}/>
      <Route path='*' element={<NotFound/>}/>
    </Routes>
  <Footer/>
  </BrowserRouter>
);