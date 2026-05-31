import React from 'react'

export default function Awards(){
    return(
        <div className='container p-md-5 mt-5 '>
            <div className="row p-lg-5">
                <div className='col-md-6 col-sm-12 mt-sm-5'>
                    <img src='images/largestBroker.svg' alt='broker image' className='award-img'></img>
                </div>
                <div className='col-md-6 col-sm-12 mt-5'>
                    <h1>Largest Stock Broker in India</h1>
                    <p>2+ million zerodha client contributed to over 15% of all retail volumes in india daily by trading and investing in :</p>

                    <div className='row mt-5'>
                        <div className='col-lg-6' >
                        <ul>
                            <li>
                                <p>Future and Option</p>
                            </li>
                            <li>
                                <p>Commoditiy and derivates</p>
                            </li>
                            <li>
                                <p>Currency derivates</p>
                            </li>
                        </ul>
                        </div>
                        <div className='col-lg-6 col-sm-12'>
                            <ul>
                            <li>
                                <p>Stocks and IPOs</p>
                            </li>
                            <li>
                                <p>Direct mutual funds</p>
                            </li>
                            <li>
                                <p>Bonds and Govt. Securities</p>
                            </li>
                            </ul>
                        </div>
                    
                    <img src='images/pressLogos.png' alt='pressLOgo images' style={{width:"80%"}} ></img>
                    </div>
                </div>
            </div>

        </div>
    );
}