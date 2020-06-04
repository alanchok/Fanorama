import React from 'react';
import './Hero.scss';

const Hero = (props) => (
    <div className={['hero'].concat(typeof (props.className) === 'undefined' ? [] : props.className).join(' ')}>
        <h1>{props.title}</h1>
    </div>
);

export default Hero;
