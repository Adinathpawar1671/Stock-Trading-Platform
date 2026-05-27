import React from 'react';
import {Link} from 'react-router-dom';
export default function NotFound(){
    return (
        <div className='container p-5 '>
            <div className='row text-center'>
                <h1>404. Page not Found</h1>
                <p>Sorry, the page you're looking for does not exists.</p>
                <Link to='/'>Go Home Page</Link>
            </div>
        </div>
    );
}