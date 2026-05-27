import React from 'react';

export default function Hero(){
    return(
        <div className='container'>
            <div className='row p-5 text-center'>
                <h1 className='fs-3 mt-5'>Charges</h1>
                <p className='text-muted fs-4 mt-2'>List of all charges and taxes</p>
            </div>
            <div className='row text-center'>
                <div className='col p-5'>
                    <img src='/images/pricing0.svg' alt='price'></img>
                    <h2 className='mb-4'>Free equity delivery</h2>
                    <p>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
                </div>
                <div className='col p-5'>
                    <img src='/images/pricingEquity.svg' alt='price'></img>
                    <h2 className='mb-4'>Intraday and F&O trades</h2>
                    <p>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
                </div>
                <div className='col p-5'>
                    <img src='/images/pricingMF.svg' alt='price'></img>
                    <h2 className='mb-4'>Free direct MF</h2>
                    <p>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
                </div>
            </div>
        </div>
    )
}