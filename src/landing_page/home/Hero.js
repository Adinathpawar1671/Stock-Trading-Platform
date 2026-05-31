import React from 'react'

export default function Hero(){
    return(
        <div className='container p-md-5'>
            <div className='row text-center'>
                <img src='images/homeHero.png' alt='heroImage' className='mb-5'></img>
                <h1 className='mt-5'>Invest in Everything</h1>
                <p>Online platform to invest in stocks, mutual funds, and more</p>
                <button className='btn btn-primary p-2' style={{width:"auto", margin:"0 auto"}}>Signup Now</button>
            </div>
        </div>
    );
}