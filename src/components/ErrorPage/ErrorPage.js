import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className='text-center mt-5'>
            <h1>4O4</h1>
            <h3>opps! This page is not available</h3>
            <p>Go to <Link to='/'>Home Page</Link></p>
        </div>
    );
};

export default ErrorPage;