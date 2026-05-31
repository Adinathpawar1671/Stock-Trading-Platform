import React from 'react';

export default function Brokerage(){
    return(
        <div className='container'>
            <div className='row p-md-5'>
                <div className='col-md-8 p-md-5 mt-5 mt-md-0'>
                    <a href='' className='text-center'><h5>Brokerage</h5></a>
                    <ul className='text-muted'>
                        <li className='mb-3 mt-4'>Call and trade & RMS auto squareOff: Additional charges of ₹50 + GST per order.
                        </li>
                        <li className='mb-3'>Digital contact notes will be sent via e-mail.</li>
                        <li className='mb-3'>Physical copy of contract notes, if required, shall be charged ₹20 per contract note. Courier charges apply.</li>
                        <li className='mb-3'>For NRI account (non-PIS). 0.5% OR ₹100 per executed order for equity(whichever is lower)</li>
                        <li className='mb-3'>For NRI account (PIS). 0.5% OR ₹200 per executed order for equity(whichever is lower)</li>
                        <li className='mb-3'>If the account is in debt balance, any order placed will be charged ₹40 per executed order instead of ₹20 per executed order.</li>

                    </ul>
                </div>
                <div className='col-md-4 p-md-5'>
                   <a href=''  className='text-center'><h5>List of Charges</h5></a> 
                </div>

            </div>     
        </div>
    )
}