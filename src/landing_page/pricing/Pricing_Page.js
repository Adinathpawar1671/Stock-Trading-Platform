import React from 'react';
import Brokerage from './Brokerage';
import Hero from './Hero';
import OpenAccount from '../OpenAccount.js';

export default function PricingPage(){
    return(
        <>
            <Hero/>
            <OpenAccount/>
            <Brokerage/>
        </>
    )
}