import React from 'react';
import Hero from './Hero';
import Awards from './Awards';
import Education from './Education';
import Stats from './Stats.js';
import Pricing from './Pricing.js';

import OpenAcount from '../OpenAccount.js';


export default function HomePage(){
    return(
        <>
            <Hero/>
            <Awards/>
            <Stats/>
            <Pricing/>
            <Education/>
            <OpenAcount/>
            
        </>
    );
}