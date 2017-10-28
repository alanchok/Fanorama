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
                <h2> Our Customers</h2>
                <hr />
                <h3>Enhance the fan experience</h3>
            </div>
            <Accordion activeItems={'fans'}>
                <AccordionItem
                    title={<div><h3>Fans</h3><span>Preserve the memories and share the bragging rights of their event experience.</span></div>}
                    slug='fans'>
                    <div>
                        <p></p>
                    </div>
                    <div className='row points'>
                        <div className='col-12 col-sm-6'>
                            <Isvg src={IconFanExperience} className='icon float-left' />
                            <p>Enhance the Fan experience.</p>
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
                    title={<div><h3>Sponsors</h3><span>A meaningful mobile activation that fans love.</span></div>}
                    slug='sponsors'>
                    <div>
                        <p>Build stronger emotional ties with your audience.</p> 
                        <p>Reduce customer acquisition costs.</p>
                        <p>Win, serve, and retain loyal customers.</p>
                        <p>Personalize customer interactions with precise fan data and analytics.</p>
                    </div>
                
                </AccordionItem>
                <AccordionItem
                    title={<div><h3>Teams, Leagues, and Venues</h3><span>Forge stronger ties with fans, teams, and brands and increase exposure of your events.
 
</span></div>}
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
