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
            field: '',
            submitted: false,
            isWorking: false,
            form: {
                source: 'form',
                firstName: '',
                lastName: '',
                email: '',
                phoneNumber: '',
                message: '',
                type: 'Fan'
            },
            errors: {
                firstName: false,
                lastName: false,
                email: false
            },
            messages: {
                firstName: 'This field is required',
                lastName: 'This field is required',
                email: 'This field is required'
            }
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount () {
        this.setState({ submitted: false });
        window.scrollTo(0, 0)
    }

    handleValidation(callback) {
        const errors = this.state.errors;
        const messages = this.state.messages;
        const field = this.state.field;
        errors.email = errors.firstName = errors.lastName = false;
        messages.email = 'This field is required';

        if (this.state.form.email.length === 0 && (field === 'email' || field.length === 0)) {
            errors.email = true;
        } else if (this.state.form.email.length > 0 && (field === 'email' || field.length === 0)
            && /\S+@\S+\.\S+/.test(this.state.form.email) === false) {
            errors.email = true;
            messages.email = 'Valid email address is required';
        }

        if (this.state.form.firstName.length === 0 && (field === 'firstName' || field.length === 0)) {
            errors.firstName = true;
        }

        if (this.state.form.lastName.length === 0 && (field === 'lastName'  || field.length === 0)) {
            errors.lastName = true;
        }

        this.setState({ errors, messages }, callback);
    }

    handleChange(event) {
        const form = {...this.state.form};
        form[event.target.name] = event.target.value;
        this.setState({ field: event.target.name, form }, this.handleValidation);
    }

    handleSubmit(event) {
        event.preventDefault();
        this.handleValidation(this.submitForm);
    }

    submitForm() {
        const errors = this.state.errors;
        this.setState({ isWorking: true });

        console.log(errors);
        if (errors.firstName && errors.lastName && errors.email) {
            console.log('submit');
        }

        fetch('https://pw58uvhmm5.execute-api.us-west-2.amazonaws.com/dev/contact-us', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state.form)
        })
        .then(() => {
            document.getElementById('contact-us-form').reset();
            document.getElementById('fan-checked').checked = true;
            this.setState({ submitted: true, isWorking: false });
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
                        {this.state.submitted &&
                        <div className='col-12 col-md-10'>
                            <h2>Thank you</h2>
                            <p className={'text-center'}>We've received your contact information and we'll stay in touch.</p>
                        </div>
                        }

                        {!this.state.submitted &&
                        <div className='col-12 col-md-10'>
                            <h2>We'd love to hear from you</h2>
                            <form onSubmit={this.handleSubmit} id='contact-us-form'>
                                <p>Complete the form below and we will get back to you shortly</p>
                                <p><span className='required'>*</span> Requred field</p>
                                <div className="form-group">
                                    <div className='row'>
                                        <div className='col-6'>
                                            <label>First Name<span className='required'>*</span></label>
                                            <input className='form-control' type="text"
                                                   value={this.state.form.firstName} name='firstName'
                                                   onChange={this.handleChange}/>
                                            {this.state.errors.firstName &&
                                            <small className={'text-danger'}>{this.state.messages.firstName}</small>
                                            }
                                        </div>
                                        <div className='col-6'>
                                            <label>Last Name<span className='required'>*</span></label>
                                            <input className='form-control' type="text" value={this.state.form.lastName}
                                                   name='lastName' onChange={this.handleChange}/>
                                            {this.state.errors.lastName &&
                                            <small className={'text-danger'}>{this.state.messages.lastName}</small>
                                            }
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className='row'>
                                        <div className='col-6'>
                                            <label>Email Address<span className='required'>*</span></label>
                                            <input className='form-control' type="text" value={this.state.form.email}
                                                   name='email' onChange={this.handleChange}/>
                                            {this.state.errors.email &&
                                            <small className={'text-danger'}>{this.state.messages.email}</small>
                                            }
                                        </div>
                                        <div className='col-6'>
                                            <label>Phone Number</label>
                                            <input className='form-control' type="text"
                                                   value={this.state.form.phoneNumber} name='phoneNumber'
                                                   onChange={this.handleChange}/>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label>Message</label>
                                    <textarea className='form-control' type="text" value={this.state.form.message}
                                              name='message' onChange={this.handleChange}/>
                                </div>
                                <div className='form-group'>
                                    <label>I am a ...<span className='required'>*</span></label>
                                    <div>
                                        <label><input type='radio' value='Fan' id='fan-checked'
                                                      checked={this.state.form.type === 'Fan'} name='type'
                                                      onChange={this.handleChange} onClick={this.handleChange}/>
                                            &nbsp;Fan&nbsp;&nbsp;&nbsp;</label>
                                        <label><input type='radio' value='Sponsor' name='type'
                                                      checked={this.state.form.type === 'Sponsor'}
                                                      onChange={this.handleChange} onClick={this.handleChange}/>
                                            &nbsp;Sponsor&nbsp;&nbsp;&nbsp;</label>
                                        <label><input type='radio' value='Team/Venue' name='type'
                                                      checked={this.state.form.type === 'Team/Venue'}
                                                      onChange={this.handleChange} onClick={this.handleChange}/>
                                            &nbsp;Team/Venue&nbsp;&nbsp;&nbsp;</label>
                                        <label><input type='radio' value='Other' name='type'
                                                      checked={this.state.form.type === 'Other'}
                                                      onChange={this.handleChange} onClick={this.handleChange}/>
                                            &nbsp;Other</label>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <br/>
                                    <input type="submit" className="btn btn-primary" disabled={this.state.isWorking} />
                                </div>
                            </form>
                        </div>
                        }
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}

export default ContactUs;
