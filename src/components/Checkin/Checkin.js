import React from 'react';
import IconFanoramas from './icon-fanoramas.svg';
import Isvg from 'react-inlinesvg';
import './Checkin.css';

const Checkin = () => (
    <a className='checkin text-center' href='/'
       onClick={($event) => { $event.preventDefault(); window.drift.api.sidebar.open(); }}>
        <Isvg src={IconFanoramas} />
        <span>Check-in Now </span>
        <span className='chevron'>&gt;</span>
    </a>
);

export default Checkin;
