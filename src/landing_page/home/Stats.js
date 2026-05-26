import React from 'react'

export default function Stats(){
    return(
        <div className='container mt-5 p-3'>
            <div className='row p-5'>
                <div className='col-6 p-5'>
                    <h1 className='fs-2 mb-5'>Trust with confidence</h1>
                    <h2 className='fs-4'>Unbeatable pricing</h2>
                    <p className='text-muted'>Zero charges for equity & mutual fund investments. Flat ₹20 fees for intraday and F&O trades.</p>
                    <h2 className='fs-4'>Best investing experience</h2>
                    <p className='text-muted'>Simple and intuitive trading platform with an easy-to-understand user interface.</p>
                    <h2 className='fs-4'>No spam or gimmicks</h2>
                    <p className='text-muted'>Committed to transparency — no gimmicks, spam, "gamification", or intrusive push notifications.</p>
                    <h2 className='fs-4'>The Zerodha universe</h2>
                    <p className='text-muted'>More than just an app — gain free access to the entire ecosystem of our partner products.</p>
                </div>
                <div className='col-6 p-5'>
                    <img src='/images/ecosystem.png' alt="ecoSystem image" style={{width:'95%'}}></img>
                    <div>
                        <a href='#' className='mx-5' style={{textDecoration:"none"}}>Explore our Products →
                            {/* <i className="fa fa-long-arrow-right mx-2" aria-hidden="true"></i> */}
                        </a>
                        <a href='#'  style={{textDecoration:"none"}}>Try kite Demo</a>

                    </div>
                </div>

            </div>
        </div>
    );
}