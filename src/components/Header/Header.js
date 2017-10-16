import React from 'react';
import './Header.css';
import Isvg from 'react-inlinesvg';
import IconFacebook from '../Icons/icon-facebook.svg';
import IconTwitter from '../Icons/icon-twitter.svg';
import IconInstagram from '../Icons/icon-instagram.svg';
import Logo from '../Icons/logo.svg';

const Header = () => (
    <div className='container-fluid header'>
        <div className='row social'>
            <div className='col text-right'>
                <ul className='list-inline'>
                    <li className='list-inline-item'>
                        <a href='http://www.facebook.com' target='_blank'>
                            <Isvg src={IconFacebook} />
                        </a>
                    </li>
                    <li className='list-inline-item'>
                        <a href='http://www.twitter.com' target='_blank'>
                            <Isvg src={IconTwitter} />
                        </a>
                    </li>
                    <li className='list-inline-item'>
                        <a href='http://www.instagram.com' target='_blank'>
                            <Isvg src={IconInstagram} />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
        <div className='row nav'>
            <div className='col-3'>
                <Isvg src={Logo} className='logo' />
            </div>
            <div className='col-9 text-right menu'>
                <ul className='list-inline'>
                    <li className='list-inline-item'>
                        <a href='#'>Our Product</a>
                    </li>
                    <li className='list-inline-item'>
                        <a href='#'>Contact Us</a>
                    </li>
                    <li className='list-inline-item'>
                        <a href='#' className='btn btn-primary'>Log In</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
);

export default Header;
