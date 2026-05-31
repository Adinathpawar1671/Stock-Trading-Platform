import React from 'react'

export default function Pricing(){
    return(
        <div className='container p-lg-5 mt-5'>
            <div className='row p-lg-5'>
                <div className='col-md-4'>
                    <h1 className='mb-3'>Unbeateable Price</h1>
                    <p className='mb-3' >We pioneered the concept of discount and price transperancy in india. Flat fees and no hidden charges.</p>
                    <a href="#">See pricing →
                        {/* <i className="fa fa-long-arrow-right mx-2" aria-hidden="true"></i> */}
                    </a>
                </div>
                <div className='col-md-2'></div>
                <div className='col-md-6'>
                    <div className='row text-center'>
                        <dic className='col border p-3'>
                            <h1  className='mb-3'>₹0</h1>
                            <p>Free equity delivery and direct mutual funds</p>
                        </dic>
                        <dic className='col border p-3'>
                            <h1  className='mb-3'>₹20</h1>
                            <p>Intrady and F&O</p>
                        </dic>
                    </div>
                </div>
            </div>
        </div>
    );
}