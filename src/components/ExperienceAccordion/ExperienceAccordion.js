import React from 'react';
import Isvg from 'react-inlinesvg';
import IconFanExperience from '../Icons/icon-fan-experience.svg';
import IconPrint from '../Icons/icon-print.svg';
import IconHeartOutline from '../Icons/icon-heart-outline.svg';
import IconCustomerAcquistion from '../Icons/icon-custom-acquisition.svg';
import IconLoyalCustomer from '../Icons/icon-loyal-customer.svg';
import IconFanBehavior from '../Icons/icon-fan-behavior.svg';
import IconShare from '../Icons/icon-step4.svg';
import IconDigitalActivation from '../Icons/icon-digitital-activation.svg';
import IconMerchandising from '../Icons/icon-merchandising.svg';
import IconInsights from '../Icons/icon-insights.svg';
import { Accordion, AccordionItem } from 'react-sanfona';
import './ExperienceAccordion.scss';

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
                        <div className='col-12 col-sm-6'>
                            <Isvg src={IconShare} className='icon float-left' />
                            <p>Share the event, a moment, or a picture.</p>
                        </div>
                    </div>
                </AccordionItem>
                <AccordionItem
                    title={<div><h3>Sponsors</h3><span>A meaningful mobile activation that fans love.</span></div>}
                    slug='sponsors'>
                    <div>
                        <p>Increase customer lifetime value and deliver more engagement in your activations by giving fans high quality content they want</p>
                        <div className='row points'>
                            <div className='col-12 col-sm-6'>
                                <Isvg src={IconHeartOutline} className='icon float-left' />
                                <p>Build stronger emotional ties with your audience.</p>
                            </div>
                            <div className='col-12 col-sm-6'>
                                <Isvg src={IconCustomerAcquistion} className='icon float-left' />
                                <p>Reduce cost of customer acquisition</p>
                            </div>
                            <div className='col-12 col-sm-6'>
                                <Isvg src={IconLoyalCustomer} className='icon float-left' />
                                <p>Win, serve, and retain loyal customers.</p>
                            </div>
                            <div className='col-12 col-sm-6'>
                                <Isvg src={IconFanBehavior} className='icon float-left' />
                                <p>Personalize customer interactions with precise fan data and analytics.</p>
                            </div>
                        </div>
                    </div>
                </AccordionItem>
                <AccordionItem
                    title={<div><h3>Teams and Venues</h3><span>Forge stronger ties with fans, teams, and brands. Increase exposure of your events.</span></div>}
                    slug='teams'>
                    <div className='row points'>
                        <div className='col-12 col-sm-6'>
                            <Isvg src={IconDigitalActivation} className='icon float-left' />
                            <p>Offer a new digital activation channel and generate new revenue.</p>
                        </div>
                        <div className='col-12 col-sm-6'>
                            <Isvg src={IconLoyalCustomer} className='icon float-left' />
                            <p>Find your super fans and create an integrated view of their behaviour.</p>
                        </div>
                        <div className='col-12 col-sm-6'>
                            <Isvg src={IconMerchandising} className='icon float-left' />
                            <p>Create exclusive licensed merchandising opportunities.</p>
                        </div>
                        <div className='col-12 col-sm-6'>
                            <Isvg src={IconInsights} className='icon float-left' />
                            <p>Fraud free marketing insights.</p>
                        </div>
                    </div>
                </AccordionItem>
            </Accordion>
        </div>
    </div>
);

export default ExperienceAccordion;
