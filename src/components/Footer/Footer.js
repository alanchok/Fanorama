import React from 'react';
import Isvg from 'react-inlinesvg';
import Logo from '../Icons/logo-monochrome.svg';
import './Footer.css';

const Footer = () => (
    <footer>
        <div className='container'>
            <div className='row'>
                <div className='col-md-10'>
                    <Isvg src={Logo} className='logo' />
                </div>
                <div className='col-md-2'>
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
