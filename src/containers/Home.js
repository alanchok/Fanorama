import React, { Component } from 'react';
import Isvg from 'react-inlinesvg';
import './Home.css';
import Header from '../components/Header/Header';
import Checkin from '../components/Checkin/Checkin';
import SimpleSlider from '../components/SimpleSlider/SimpleSlider';
import ExperienceAccordion from '../components/ExperienceAccordion/ExperienceAccordion';
import Hero from '../components/Hero/Hero';
import Footer from '../components/Footer/Footer';
import IconFavorite from '../components/Icons/icon-favorite.svg';
import IconShare from '../components/Icons/icon-share.svg';
import IconStep1 from '../components/Icons/icon-step1.svg';
import IconStep2 from '../components/Icons/icon-step2.svg';
import IconStep3 from '../components/Icons/icon-step3.svg';

class Home extends Component {
    componentDidMount () {
        window.scrollTo(0, 0)
    }

    render() {
        return (
            <div className="home-page">
                <Header />
                <Hero title='Show your game Face' />
                <Checkin />
                <SimpleSlider children={[
                    <div className='hero-copy' key='about-us'>
                        <h2>About Us</h2>
                        <hr />
                        <h3>Stand Out From The Crowd</h3>
                        <h4>A fan-focused company</h4>
                        <p>Our mission is to capture every moment that matters to fans during the big event. Consectetur adipiscing elit. Vivamus molestie dui vitae velit facilisis convallis. Sed et maximus purus, vel posuere nunc. In tristique vel lacus ac dapibus. Etiam sed auctor neque. Curabitur sollicitudin tellus sed ante dapibus, vitae tincidunt eros ultrices.</p>
                    </div>,
                    <div className='hero-copy' key='about-us-2'>
                        <h2>About Us</h2>
                        <hr />
                        <h3>Stand Out From The Crowd</h3>
                        <h4>A fan-focused company</h4>
                        <p>Our mission is to enhance the fan experience. We capture photos of every fan during authentic moments at events. We help fans preserve their special memories in digital galleries and work with sponsors to create exclusive keepsakes!</p>
                    </div>
                ]} />
                <div className='our-product'>
                    <div className='hero-copy inverse'>
                        <h2>Our Product</h2>
                        <hr />
                        <h3>A fan engagement platform</h3>
                        <p>We provide every fan with over 100 personal photos from the big event. The Fanorama platform provides a new space for our sponsors and partners to activate, engage and with fans!</p>
                        <ul className='list-inline'>
                            <li className='list-inline-item'>
                                <Isvg src={IconFavorite} />
                            </li>
                            <li className='list-inline-item'>
                                <Isvg src={IconShare} />
                            </li>
                        </ul>
                    </div>
                    <img src='/img/hand.png' className='hand' alt={'Hand'} />
                </div>
                <div className='steps container-fluid'>
                    <div className='row'>
                        <div className='col-12 col-sm-4'>
                            <div className='icon'>
                                <Isvg src={IconStep1} />
                            </div>
                            <h2>1. Register your seat</h2>
                            <p>Opt in via SMS, Google or Facebook.</p>
                        </div>
                        <div className='col-12 col-sm-4'>
                            <div className='icon'>
                                <Isvg src={IconStep2} />
                            </div>
                            <h2>2. Receive links to photos</h2>
                            <p>We'll send you notifications when new galleries are ready to view.</p>
                        </div>
                        <div className='col-12 col-sm-4'>
                            <div className='icon'>
                                <Isvg src={IconStep3} />
                            </div>
                            <h2>3. Collect Free Downloads</h2>
                            <p>Curate your best pics for download and get exclusive freebies from our sponsors.</p>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col cta'>
                            <a href='/contact-us' className='btn btn-primary'>Learn More</a>
                        </div>
                    </div>
                </div>
                <ExperienceAccordion />
                <Footer />
            </div>
        );
    }
}

export default Home;
