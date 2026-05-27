import React from 'react';
import {Link} from 'react-router-dom';
export default function Hero(){
    return(
        <div className='container p-5'>
            <div className='row text-center p-5'>
                <h1 className='fs-2'>Zerodha Products</h1>
                <h2 className='fs-4 text-muted mt-3'>Sleek, modern, and intuitive trading platforms</h2>
                <p className='mt-2'>Check out our <Link to='*' style={{textDecoration:'none'}}>investment offerings →</Link></p>
            </div>
            <hr></hr>
        </div>
    );
}