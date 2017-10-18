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
                    title='Our Product'
                    className={['secondary']}
                />
                <Checkin />
                <div className='container'>
                    <div className='row product-login'>
                        <div className='col-12 col-sm-5 hero-copy'>
                            <h2>Register</h2>
                            <hr/>
                            <h3>Lorem ipsum dolor sit amet</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut at condimentum mauris. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent viverra, leo a commodo hendrerit.
                            </p>
                        </div>
                    </div>
                </div>
                <div className='container-fluid'>
                    <div className='row product-checkin'>
                        <div className='col-12 col-sm-6 ml-md-auto hero-copy inverse'>
                            <h2>Register</h2>
                            <hr/>
                            <h3>Lorem ipsum dolor sit amet</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut at condimentum mauris. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent viverra, leo a commodo hendrerit.
                            </p>
                        </div>
                    </div>
                </div>
                <SimpleSlider children={[
                    <div className='hero-copy' key='about-us'>
                        <h3>Stand Out From The Crowd</h3>
                        <p>Our mission is to capture every moment that matters to fans during the big event. Consectetur adipiscing elit. Vivamus molestie dui vitae velit facilisis convallis. Sed et maximus purus, vel posuere nunc. In tristique vel lacus ac dapibus. Etiam sed auctor neque. Curabitur sollicitudin tellus sed ante dapibus, vitae tincidunt eros ultrices.</p>
                    </div>,
                    <div className='hero-copy' key='about-us-2'>
                        <h3>Stand Out From The Crowd</h3>
                        <p>Our mission is to capture every moment that matters to fans during the big event. Consectetur adipiscing elit. Vivamus molestie dui vitae velit facilisis convallis. Sed et maximus purus, vel posuere nunc. In tristique vel lacus ac dapibus. Etiam sed auctor neque. Curabitur sollicitudin tellus sed ante dapibus, vitae tincidunt eros ultrices.</p>
                    </div>
                ]} />
                <Footer />
            </div>
        );
    }
}

export default OurProduct;
