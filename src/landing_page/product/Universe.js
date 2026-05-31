import React from 'react';

export default function Universe(){
    return(
        <div className='container mt-5'>
            <p className='text-center fs-5'>Want to know more about our technology stack? Check out the Zerodha.tech blog.</p>
            <div className='row text-center'>
                <h1 className='fs-3 mt-5'>The Zerodha Universe</h1>
                <p className='text-muted mt-3'>Extend your trading and investment experience even further with our partner platforms</p>
            </div>
            <div className='row p-lg-5 text-center'>
                <div className='col-sm'>
                    <img src='/images/zerodhaFundhouse.png' alt='' style={{width:'40%'}}></img>
                    <p className='text-muted mt-4' style={{fontSize:'15px'}}>Our assests management venture that is creating simple and transparent index funds to help you save for your goals.</p>
                </div>
                <div className='col-sm'>
                    <img src='/images/sensibullLogo.svg' alt='' style={{width:'40%'}}></img>
                    <p className='text-muted mt-4' style={{fontSize:'15px'}}>Options trading platform that lets you create stratergies, analayze positions, and examine data points like open interest, FII/DII and more.</p>
                </div>
                <div className='col-sm'>
                    <img src='/images/smallcaseLogo.png' alt='' style={{width:'40%'}}></img>
                    <p className='text-muted mt-4' style={{fontSize:'15px'}}>Thematic investing platform that helps you invest in deversfied baskets of stocks on ETFs.</p>
                </div>
            </div>
            <div className='row p-lg-5 text-center'>
                <div className='col-sm'>
                    <img src='/images/streakLogo.png' alt='' style={{width:'40%'}}></img>
                    <p className='text-muted mt-4' style={{fontSize:'15px'}}>Systematic trading platform that allows you create and backtest stratergies without coding.</p>

                </div>
                <div className='col-sm'>
                    <img src='/images/dittoLogo.png' alt='' style={{width:'40%'}}></img>
                    <p className='text-muted mt-4' style={{fontSize:'15px'}}>Personalized advice on life and health insurance. No spam and no miss-selling.</p>
                </div>
                <div className='col-sm'>
                    <img src='/images/goldenpiLogo.png' alt='' style={{width:'40%'}}></img>
                    <p className='text-muted mt-4' style={{fontSize:'15px'}}>Bonds trading platform</p>
                </div>
            </div>
            <div className='row text-center'>
                <button className='btn btn-primary mx-auto mb-5 p-2' style={{width:'auto'}}>Sign up for Free</button>

            </div>
        </div>
    );
}