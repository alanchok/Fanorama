import React, { Component } from 'react';
import Header from '../components/Header/Header';
import Checkin from '../components/Checkin/Checkin';
import Isvg from 'react-inlinesvg';
import Hero from '../components/Hero/Hero';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer/Footer';
import IconFanExperience from '../components/Icons/icon-fan-experience.svg';
import IconFanBehavior from '../components/Icons/icon-fan-behavior.svg';
import IconIncreaseLifeline from '../components/Icons/icon-increase-lifeline.svg';
import './OurProduct.css';

class OurProduct extends Component {
    componentDidMount () {
        window.scrollTo(0, 0)
    }

    render() {
        console.log(this.props.params);
        return (
            <div className="our-product-page">
                <Header />
                <Hero
                    title='Fanoramas Platform'
                    className={['secondary']}
                />
                <Checkin />
                <div className='container'>
                    <div className='row product-login'>
                        <div className='col-12 col-sm-5 hero-copy'>
                            <h2>Register</h2>
                            <hr/>
                            <h3>SIT ANYWHERE. WE'VE GOT YOU COVERED</h3>
                            <p>Simply register with Fanoramas and we’ll capture your photos during the most important highlights of the big events you attend. You’ll leave with your own personalized gallery from the event.</p>
                        </div>
                    </div>
                </div>
                <div className='container-fluid'>
                    <div className='row justify-content-md-center product-checkin'>
                        <div className='col-12 col-sm-10 hero-copy inverse text-center'>
                            <h2>Sponsorship Activation</h2>
                            <hr/>
                            <h3>Digital Activation at Scale</h3>
                            <p>Our technology is scalable to any size venue and is capable of capturing thousands of unique images of fans at the most crucial moments during any event.</p>
                            <br /><br />
                            <div className='row justify-content-md-center'>
                                <div className='col-12 col-sm-4 icon'>
                                    <Isvg src={IconFanExperience} />
                                    <ul>
                                        <li>Branded personalized galleries for every fan</li>
                                    </ul>
                                </div>
                                <div className='col-12 col-sm-4 icon'>
                                    <Isvg src={IconIncreaseLifeline} />
                                    <ul>
                                        <li>Fan data</li>
                                        <li>Survey, contest & campaign platform</li>
                                        <li>Market research & insights platform</li>
                                    </ul>
                                </div>
                                <div className='col-12 col-sm-4 icon'>
                                    <Isvg src={IconFanBehavior} />
                                    <ul>
                                        <li>Post event engagement opportunities</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                <div className='container-fluid'>
                    <div className='row justify-content-md-center product-obsessed'>
                        <div className='col-12 col-sm-10 hero-copy inverse text-center'>
                            <h3>Obsessed with the<br />fan experience</h3>
                            <p>Be your fans biggest fan. Use the Fanoramas platform to give people what they really want, bragging rights and a piece of the action.</p>
                            <br /><br />
                            <div className='row justify-content-md-center'>
                                <Link to='contact-us' className='btn btn-primary inverse'>Contact Us</Link>
                            </div>
                        </div>
                    </div>

                </div>

                <Footer />
            </div>
        );
    }
}

export default OurProduct;
