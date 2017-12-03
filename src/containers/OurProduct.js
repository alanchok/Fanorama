import React, { Component } from 'react';
import Header from '../components/Header/Header';
import Checkin from '../components/Checkin/Checkin';
import SimpleSlider from '../components/SimpleSlider/SimpleSlider';
import Hero from '../components/Hero/Hero';
import Footer from '../components/Footer/Footer';
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
                    title='Fanorama Platform'
                    className={['secondary']}
                />
                <Checkin />
                <div className='container'>
                    <div className='row product-login'>
                        <div className='col-12 col-sm-5 hero-copy'>
                            <h2>Register</h2>
                            <hr/>
                            <h3>SIT ANYWHERE. WE'VE GOT YOU COVERED</h3>
                            <p>Simply register with Fanorama and we’ll capture your photos during the most important highlights of the big events you attend. You’ll leave with your own personalized gallery from the event.</p>
                        </div>
                    </div>
                </div>
                <div className='container-fluid'>
                    <div className='row product-checkin'>
                        <div className='col-12 col-sm-6 ml-md-auto hero-copy inverse'>
                            <h2>Sponsorship Activation</h2>
                            <hr/>
                            <h3>Digital Activation at Scale</h3>
                            <p>Our technology is scalable to any size venue and is capable of capturing thousands of unique images of fans at the most crucial moments during any event.</p>
                        </div>
                    </div>
                </div>
                <SimpleSlider children={[
                    <div className='hero-copy' key='about-us'>
                        <h3>Consumer Segments of One</h3>
                        <p>Sponsored micro-moments will help your brand, team, and venue create one to one relationships. What once seemed impossible is now within reach.</p>
                    </div>,
                    <div className='hero-copy' key='about-us-2'>
                        <h3>Obsessed with the fan experience</h3>
                        <p>Be your fans biggest Fan. Use the Fanorama platform to give people what they really want, bragging rights and a piece of the action. </p>
                    </div>
                ]} />
                <Footer />
            </div>
        );
    }
}

export default OurProduct;
