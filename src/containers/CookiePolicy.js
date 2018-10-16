import React, { Component } from 'react';
import Header from '../components/Header/Header';
import Hero from '../components/Hero/Hero';
import Footer from '../components/Footer/Footer';
import request from 'request';
import './CookiePolicy.css';

export default class CookiePolicy extends Component {
    state = {
        isWorking: true,
        content: ''
    }

    componentWillMount() {
        request('https://www.iubenda.com/api/privacy-policy/10691543/cookie-policy/no-markup', (error, response, body) => {
            this.setState({ content: JSON.parse(body).content, isWorking: false });
            window.scrollTo(0, 0);
        });
    }

    render() {
        return (
            <div className="cookie-policy-page">
                <Header />
                <Hero
                    title='Cookie Policy'
                    className={['secondary']}
                />
                <div className='container'>
                    <div className='row justify-content-center'>
                        {this.state.isWorking
                            ? <div className='col-12 col-md-8'>Loading</div>
                            : <div className='col-12 col-md-8' dangerouslySetInnerHTML={{__html: this.state.content}}></div>
                        }
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}
