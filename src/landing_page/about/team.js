import React from 'react';
import {Link} from 'react-router-dom';

export default function Team(){
    return(
        <div className='container'>
            <div className='row p-4'>
                <h2 className='text-center fs-3 mb-5'>People</h2>
                <div className='col p-5 text-center'>
                    <img src='/images/nithinKamath.jpg' alt='nithinKamath' className='nithinimg'></img>
                    <h2 className='fs-5 mt-4'>Nithin Kamath</h2>
                    <p className='text-muted'>Founder, CEO</p>
                </div>
                <div className='col p-5'>
                    <p>Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.
                    </p>
                    <p>
                    He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).
                    </p>
                    <p>
                    Playing basketball is his zen.
                    </p>
                    <p>
                    Connect on <Link to='/'>Homepage</Link> / TradingQnA / Twitter
                    </p>
                </div>
            </div>
            <div className='row text-center p-5'>
                <div className='col'>
                    <img src='/images/nithinKamath.jpg' alt='nithinKamath' className='nithinimg'></img>
                    <h2 className='fs-5 mt-4'>Nikhil Kamath</h2>
                    <p className='text-muted'>Co-founder & CFO</p>
                </div>
                <div className='col'>
                    <img src='/images/nithinKamath.jpg' alt='nithinKamath' className='nithinimg'></img>
                    <h2 className='fs-5 mt-4'>Dr. Kailash Nadh</h2>
                    <p className='text-muted'>CTO</p>
                </div>
                <div className='col'>
                    <img src='/images/nithinKamath.jpg' alt='nithinKamath' className='nithinimg'></img>
                    <h2 className='fs-5 mt-4'>Venu Madhav</h2>
                    <p className='text-muted'>COO</p>
                </div>
            </div>
             <div className='row text-center p-5'>
                <div className='col'>
                    <img src='/images/nithinKamath.jpg' alt='nithinKamath' className='nithinimg'></img>
                    <h2 className='fs-5 mt-4'>Seema Patil</h2>
                    <p className='text-muted'>Director</p>
                </div>
                <div className='col'>
                    <img src='/images/nithinKamath.jpg' alt='nithinKamath' className='nithinimg'></img>
                    <h2 className='fs-5 mt-4'>Karthik Rangappa</h2>
                    <p className='text-muted'>Chief of Education</p>
                </div>
                <div className='col'>
                    <img src='/images/nithinKamath.jpg' alt='nithinKamath' className='nithinimg'></img>
                    <h2 className='fs-5 mt-4'>Austin Prakesh</h2>
                    <p className='text-muted'>Director Strategy</p>
                </div>
            </div>
        </div>
    );
}