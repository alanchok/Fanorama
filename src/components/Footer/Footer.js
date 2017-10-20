import React from 'react';
import Isvg from 'react-inlinesvg';
import { Link } from 'react-router-dom';
import Logo from '../Icons/logo-monochrome.svg';
import './Footer.css';

const Footer = () => (
    <footer>
        <div className='container'>
            <div className='row'>
                <div className='col-12 col-md-6 col-lg-8'>
                    <Isvg src={Logo} className='logo' />
                </div>
                <div className='col-6 col-md-3 col-lg-2'>
                    <p><strong>FANORAMA</strong></p>
                    <p>
                        <Link to={'/'}>Home</Link><br />
                        <Link to={'/our-product'}>Our Product</Link><br />
                        <Link to={'/contact-us'}>Contact Us</Link>
                    </p>
                </div>
                <div className='col-6 col-md-3 col-lg-2'>
                    <p><strong>CONTACT</strong></p>
                    <p>
                        12345 Fan Street<br />
                        Calgary, AB<br />
                        T1A 2B3
                    </p>
                    <a href="mailto:info@fanorama.ca">info@fanorama.ca</a>
                </div>
            </div>
            <hr />
            &copy; 2017 Fanorama All Rights Reserved.
        </div>
    </footer>
);

export default Footer;
