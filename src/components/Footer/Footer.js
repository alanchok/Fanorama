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
                    <p><strong>FANORAMAS</strong></p>
                    <p>
                        <Link to={'/'}>Home</Link><br />
                        <Link to={'/our-product'}>Our Product</Link><br />
                        <a href='/' onClick={($event) => { $event.preventDefault(); window.drift.api.sidebar.open(); }}>Contact Us</a><br />
                        <Link to={'/privacy-policy'}>Privacy Policy</Link><br />
                        <Link to={'/cookie-policy'}>Cookie Policy</Link>
                    </p>
                </div>
                <div className='col-6 col-md-3 col-lg-2'>
                    <p><strong>CONTACT</strong></p>
                    <p>

                    </p>
                    <a href="mailto:info@fanoramas.com">contact@fanoramas.com</a>
                </div>
            </div>
            <hr />
            &copy; {(new Date()).getFullYear()} Fanoramas Social Media Corp. All Rights Reserved.
        </div>
    </footer>
);

export default Footer;
