import React from 'react';
import './Socket.css';
import firstImg from '../../../assets/images/footer_img_1.png';
import secondImg from '../../../assets/images/footer_img_2.png';
import thirdImg from '../../../assets/images/footer_img_3.png';
import fourthImg from '../../../assets/images/apple_pad.png';
import { FaLocationArrow, FaMailBulk, FaPhoneAlt } from 'react-icons/fa';

const Socket = () => {
    return (
        <div className='main-container'>
            <div className='main-socket'>
                <div className='left-side'>
                    <h3>LEARNER-BD</h3>
                    <p>Today's internet world. If you want to know something, you have to use the internet. In this age of competition there is no substitute for knowledge. Programming can be the most accepted subject to build one's career in this era. So learn programming and build your career. We are on your side. Build your career by taking our courses.</p>
                </div>
                <div className='right-side'>
                    <div className='main-right'>
                        <div className='contact-section'>
                            <h1>Contact Us</h1>
                            <p><FaPhoneAlt/> 01185251500</p>
                            <p><FaMailBulk /> harunrashid4419@gmail.com</p>
                            <p><FaLocationArrow/> 1204, Senpara, Mirpur 10, Dhaka.</p>
                        </div>
                        <div className='hours'>
                            <h1>HOURS</h1>
                            <h4>Monday-Friday: <span>9am to 5pm</span></h4>
                            <h4>Saturday: <span>10am to 2pm</span></h4>
                            <h4>Sunday: <span>Closed</span></h4>
                        </div>
                    </div>
                    <div className='img'>
                        <img src={firstImg} alt="" />
                        <img src={secondImg} alt="" />
                        <img src={thirdImg} alt="" />
                        <img src={fourthImg} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Socket;