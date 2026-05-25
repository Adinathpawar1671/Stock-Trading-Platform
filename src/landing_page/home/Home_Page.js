import React from 'react';
import Hero from './Hero';
import Awards from './Awards';
import Education from './Education';
import Stats from './Stats.js';
import Pricing from './Pricing.js';

import OpenAcount from '../OpenAccount.js';
import Footer from '../Footer.js';
import Navbar from '../Navbar.js';

export default function HomePage(){
    return(
        <>
            <Navbar/>
            <Hero/>
            <Awards/>
            <Stats/>
            <Pricing/>
            <Education/>
            <OpenAcount/>
            <Footer/>
        </>
    );
}