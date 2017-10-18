import React, { Component } from 'react';
import fetch from 'isomorphic-fetch';
import Header from '../components/Header/Header';
import Checkin from '../components/Checkin/Checkin';
import Hero from '../components/Hero/Hero';
import Footer from '../components/Footer/Footer';
import './ContactUs.css';

class ContactUs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            source: 'form',
            firstName: '',
            lastName: '',
            email: '',
            phoneNumber: '',
            message: '',
            type: 'fan'
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount () {
        window.scrollTo(0, 0)
    }

    handleChange(event) {
        this.state[event.target.name] = event.target.value;
    }

    handleSubmit(event) {
        event.preventDefault();

        fetch('https://pw58uvhmm5.execute-api.us-west-2.amazonaws.com/dev/contact-us', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state)
        })
        .then(() => {
            document.getElementById('contact-us-form').reset();
            document.getElementById('fan-checked').checked = true;
        });
    }

    render() {
        return (
            <div className="contact-us-page">
                <Header />
                <Hero
                    title='Contact Us'
                    className={['secondary']}
                />
                <Checkin />
                <div className='container'>
                    <div className='row justify-content-md-center'>
                        <div className='col-12 col-md-10'>
                            <h2>We'd love to hear from you</h2>
                            <form onSubmit={this.handleSubmit} id='contact-us-form'>
                                <p>Complete the form below and we will get back to you shortly</p>
                                <p><span className='required'>*</span> Requred field</p>
                                <div className="form-group">
                                    <div className='row'>
                                        <div className='col-6'>
                                            <label>First Name<span className='required'>*</span></label>
                                            <input className='form-control' type="text" value={this.firstName} name='firstName' onChange={this.handleChange} />
                                        </div>
                                        <div className='col-6'>
                                            <label>Last Name<span className='required'>*</span></label>
                                            <input className='form-control' type="text" value={this.lastName} name='lastName' onChange={this.handleChange} />
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className='row'>
                                        <div className='col-6'>
                                            <label>Email Address<span className='required'>*</span></label>
                                            <input className='form-control' type="text" value={this.email} name='email' onChange={this.handleChange} />
                                        </div>
                                        <div className='col-6'>
                                            <label>Phone Number</label>
                                            <input className='form-control' type="text" value={this.phoneNumber} name='phoneNumber' onChange={this.handleChange} />
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label>Message</label>
                                    <textarea className='form-control' type="text" value={this.message} name='message' onChange={this.handleChange} />
                                </div>
                                <div className='form-group'>
                                    <label>I am a ...<span className='required'>*</span></label>
                                    <div>
                                        <label><input type='radio' value='Fan' id='fan-checked' checked="checked" name='type' onChange={this.handleChange} onClick={this.handleChange} /> Fan&nbsp;&nbsp;&nbsp;</label>
                                        <label><input type='radio' value='Sponsor' name='type' onChange={this.handleChange} onClick={this.handleChange} /> Sponsor&nbsp;&nbsp;&nbsp;</label>
                                        <label><input type='radio' value='Team/Venue' name='type' onChange={this.handleChange} onClick={this.handleChange} /> Team/Venue&nbsp;&nbsp;&nbsp;</label>
                                        <label><input type='radio' value='Other' name='type' onChange={this.handleChange} onClick={this.handleChange} /> Other</label>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <br />
                                    <input type="submit" className="btn btn-primary" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}

export default ContactUs;
