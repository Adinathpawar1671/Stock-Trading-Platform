import React from 'react';
import {Link} from 'react-router-dom';
export default function RightImage({title,description,link,img}){
    return(
        <div className='container p-lg-5 py-0'>
            <div className='row'>
                <div className='col-md-6 p-lg-5 mt-5' >
                    <h1 className='fs-4 mt-5'>{title}</h1>
                    <p className='mt-4'>{description}</p>
                    <Link to={link} className='mt-5'>Learn More →</Link>
                </div>
                <div className='col-md-6 p-5'>
                    <img src={img} style={{width:'90%'}}></img>
                </div>
            </div>
        </div>
    );
}