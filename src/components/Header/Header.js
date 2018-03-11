import React from 'react';
import './Header.css';
import Isvg from 'react-inlinesvg';
import { Link } from 'react-router-dom';
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
                        <a href='https://www.facebook.com/fanoramas/' target='_blank' rel='noopener noreferrer'>
                            <Isvg src={IconFacebook} />
                        </a>
                    </li>
                    <li className='list-inline-item'>
                        <a href='https://twitter.com/Fanoramas' target='_blank' rel='noopener noreferrer'>
                            <Isvg src={IconTwitter} />
                        </a>
                    </li>
                    <li className='list-inline-item'>
                        <a href='https://www.instagram.com/fanoramas_/' target='_blank' rel='noopener noreferrer'>
                            <Isvg src={IconInstagram} />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
        <div className='row nav'>
            <div className='col-3'>
                <Link to="/">
                    <Isvg src={Logo} className='logo' />
                </Link>
            </div>
            <div className='col-9 text-right menu'>
                <ul className='list-inline'>
                    <li className='list-inline-item'>
                        <Link to='/our-product'>Our Product</Link>
                    </li>
                    <li className='list-inline-item'>
                        <a href='#' class='drift-open-chat'>Contact Us</a>
                    </li>
                    <li className='list-inline-item'>
                        <a href='#' class='drift-open-chat btn btn-primary'>Log In</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
);

export default Header;
