import React from 'react';
import Isvg from 'react-inlinesvg';
import IconFanExperience from '../Icons/icon-fan-experience.svg';
import IconPrint from '../Icons/icon-print.svg';
import { Accordion, AccordionItem } from 'react-sanfona';
import './ExperienceAccordion.css';

const ExperienceAccordion = () => (
    <div className='accordion container'>
        <div className='row'>
            <div className='col-md-12 hero-copy text-center'>
                <h2>Customers</h2>
                <hr />
                <h3>Enhance the fan experience</h3>
            </div>
            <Accordion activeItems={'fans'}>
                <AccordionItem
                    title={<div><h3>Fans</h3><span>Preserve memories of their experience with personalized galleries and exclusive merchandise</span></div>}
                    slug='fans'>
                    <div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in.</p>
                    </div>
                    <div className='row points'>
                        <div className='col-12 col-sm-6'>
                            <Isvg src={IconFanExperience} className='icon float-left' />
                            <p>Enhance and preserve memories of the fan experience.</p>
                        </div>
                        <div className='col-12 col-sm-6'>
                            <Isvg src={IconPrint} className='icon float-left' />
                            <p>Free digital and printed keepsakes.</p>
                        </div>
                    </div>
                    <div className='row cta'>
                        <div className='col-12 text-center'>
                            <a href='/contact-us' className='btn btn-primary'>Contact Us</a>
                        </div>
                    </div>
                </AccordionItem>
                <AccordionItem
                    title={<div><h3>Sponsors</h3><span>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod aliqua.</span></div>}
                    slug='sponsors'>
                    <div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in.</p>
                    </div>
                </AccordionItem>
                <AccordionItem
                    title={<div><h3>Teams/Venues</h3><span>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.</span></div>}
                    slug='teams'>
                    <div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in.</p>
                    </div>
                </AccordionItem>
            </Accordion>
        </div>
    </div>
);

export default ExperienceAccordion;
