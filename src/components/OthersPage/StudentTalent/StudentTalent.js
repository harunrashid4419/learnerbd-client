import React from 'react';
import { FaIdeal } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './StudentTalent.css';

const StudentTalent = () => {
    return (
        <div className='talent-section container'>
            <div className='icon'>
                <FaIdeal className='icon-faideal'/>
            </div>
            <div className='content'>
                <h3>OUR STUDENTS ARE TALENTED,</h3>
                <h3>passionate, hard-working and full of good ideas.</h3>
            </div>
            <div className='button'>
                <Link>Learn More</Link>
            </div>
        </div>
    );
};

export default StudentTalent;