import React from 'react';
import { useState } from 'react';
import {Link} from 'react-router-dom';
export default function LeftImage({title, description, googleplaylink, appstorelink, tryDemo, learnMore, img}){
    console.log(appstorelink);
    return(
        <div className='container p-5'>
            <div className='row'>
            <div className='col-6 p-5'>
                <img src={img} style={{width:'100%'}}></img>
            </div>
            <div className='col-6 p-5 mt-5'>
                <h1 className='fs-4 mb-4'>{title}</h1>
                <p>{description}</p>
                <Link to={tryDemo} className='me-5'>Try Demo →</Link>
                <Link to={learnMore}>learn More →</Link>
                <div className='mt-5'>
                    <Link to='' className='me-5'>
                        <img src={googleplaylink} alt='google play app img'></img>
                    </Link>
                    <Link to=''>
                        <img src={appstorelink} alt='AppStore app img'></img>
                    </Link>
                </div>
            </div>
        </div>
        </div>
    );
}