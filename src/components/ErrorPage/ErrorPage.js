import React from 'react';
import { Link } from 'react-router-dom';
import errorPage from '../../assets/images/plc-errors.jpg';

const ErrorPage = () => {
    return (
        <div className='text-center mt-5'>
            <img className='w-25 mb-3' src={errorPage} alt="" />
            <h1>4O4</h1>
            <h3>opps! This page is not available</h3>
            <p>Go to <Link to='/'>Home Page</Link></p>
        </div>
    );
};

export default ErrorPage;