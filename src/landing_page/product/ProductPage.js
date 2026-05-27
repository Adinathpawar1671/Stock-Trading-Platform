import React from 'react';
import Hero from './Hero.js';
import RightImage from './Rightimage.js';
import LeftImage from './Leftimage.js';
import Universe from './Universe.js';

export default function ProductPage(){
    return(
        <>
            <Hero/>
            <LeftImage img='/images/Kite.png' 
            title='Kite' 
            description='Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices.'
            tryDemo=''
            learnMore=''
            googleplaylink='/images/googlePlayBadge.svg'
            appstorelink='images/appstoreBadge.svg'/>

            <RightImage 
            title='console'
            description='The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations.'
            link=''
            img='/images/console.png'/>

            <LeftImage img='/images/coin.png' 
            title='Coin' 
            description='Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices.'
            tryDemo=''
            learnMore=''
            googleplaylink='/images/googlePlayBadge.svg'
            appstorelink='images/appstoreBadge.svg'/>

            <RightImage 
            title='Kite Connect API'
            description='Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase.'
            link=''
            img='/images/kiteconnect.png'/>

            <LeftImage img='/images/varsity.png' 
            title='Varsity mobile' 
            description='An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go.'
            tryDemo=''
            learnMore=''
            googleplaylink='/images/googlePlayBadge.svg'
            appstorelink='images/appstoreBadge.svg'
            />

            <Universe/>
        </>
    )
}