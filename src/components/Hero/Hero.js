import React from 'react';
import './Hero.css';

const Hero = (props) => (
    <div className='hero'>
        <h1>{props.title}</h1>
    </div>
);

export default Hero;
