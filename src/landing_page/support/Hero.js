import React from 'react';
import {Link} from 'react-router-dom';
export default function Hero(){
    return(
        <div style={{backgroundColor:'#3f91eeef', color:'white'}}>
        <div className='container ' >
            <div className='row p-5'>
                <div className='col-7 px-5 mt-5'>
                    <h1 className='fs-4'>Support Portal</h1>
                </div>
                <div className='col mt-5 text-end'>
                    <Link to='' className='support-link'>Track tickets</Link>
                </div>
            </div>

            <div className='row px-5'>
                <div className='col-7 p-5'>
                    <h2>Search for an answer or browse help topics to create a ticket</h2>
                    <input placeholder='Eg : how to I activate F&O, why is my order getting rejeceted...'style={{width:'100%', height:'50px', borderRadius:'10px', border:'none', margin:'20px 0 20px 0', paddingLeft:'40px'}}></input>

                    <Link to='' className='support-link'>Track account opening</Link>
                    <Link to='' className='support-link'>Track segment activation</Link>
                    <Link to='' className='support-link'>Intrady</Link>
                    <Link to='' className='support-link'>Margins</Link>
                    <Link to='' className='support-link'>Kite user manual</Link>
                </div>
                <div className='col-5 p-5'>
                    <ol>
                        <h2 className='fs-4'>Featured</h2>
                        <li className='mb-3'>
                            <Link to='' className='support-link'>Current takover and Delisting - january 2026</Link>
                        </li>
                        <li>
                            <Link to='' className='support-link'>Latest intrady leverages - MIS & CO</Link>
                        </li>
                    </ol>
                </div>

            </div>            
        </div>
        </div>
    );
}