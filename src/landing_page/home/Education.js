import React from 'react'

export default function Education(){
    return(
        <div className='container p-lg-5 mt-5'>
            <div className='row'>
                <div className='col-md-6'>
                <img src='images/education.svg' alt='' style={{width:'100%'}}></img>
                </div>
                <div className='col-md-6 mt-5'>
                    <h1 className='mb-4 fs-2'>Free and Open Market Education</h1>
                    <p>Varsity, the largest online stock market education book in the world covering everything from basics to advanced trading</p>
                    <a href=''>versity → </a>
                    <p className='mt-5'>TRading and Q&N, the most active trading and investment community in india for all your market related queries.</p>
                    <a href=''>TradingQ&N →</a>
                </div>
            </div>
        </div>
            
    );
}