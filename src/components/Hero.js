import React from 'react'
import Navigation from './Navigation'
import { Container, Row, Col } from 'react-bootstrap'
import suidoge from '../images/suidoge.svg'
import telegram from '../images/icons/telegram.svg'
import twitter from '../images/icons/twitter.svg'
// import discord from '../images/icons/discord.svg'
// import certik from '../images/certik.svg'

const Hero = () => {
    return (
        <>
            <div className='hero-section'>
                <Navigation />
                <div className='hero-inner'>
                    <Container>
                        <Row>
                            <Col md={7} id='first'>
                                <div className="hero-left" data-aos="zoom-in" data-aos-duration="1000" data-aos-once="true">
                                    <div className="">
                                        <div className="mb-3">
                                            <h1 className="hero-title">SuiDoge Ecosystem</h1>
                                        </div>
                                        <Row>
                                            <Col md={9}>
                                                <p className="hero-text">SuiDoge is a  project that leverages the advantages of a meme coin to create a unique and engaging ecosystem for decentralized finance (DeFi) and non-fungible tokens (NFTs).</p>
                                                <div className='pt-3 d-flex btns-mobile-center'>
                                                    <a href='https://flameswap.io/#/swap' target='_blank' rel="noreferrer" className="buy-now-btn hvr-back-pulse me-3">
                                                        Buy SuiDoge
                                                    </a>
                                                    <a href='#chart' className="buy-now-btn hvr-back-pulse ">
                                                        View Chart
                                                    </a>
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>
                                </div>

                            </Col>
                            <Col md={5} id='second'>
                                <div className="landing-hero-img" data-aos="zoom-in" data-aos-duration="1000" data-aos-once="true">
                                    <img src={suidoge} alt='logo' className='w-100 floating' />
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <div></div>
                <div></div>
            </div>
            <div className='d-flex justify-content-center hero-below mb-3'>
                <div className='hero-below-inner text-center'>
                    <div className='btns-mobile-center d-flex justify-content-center flex-wrap w-100 mb-3'>
                        <div className="crypto_address px-3 mb-2 d-flex align-items-center justify-content-center">0x83e6571118eaca12d7d428ae06341a8063711bc9983e0d6cefb3790a26b9d62c::SDOGE::SDOGE</div>
                        <button className='buy-now-btn hvr-back-pulse ms-3 mb-2' onClick={() => navigator.clipboard.writeText('0x83e6571118eaca12d7d428ae06341a8063711bc9983e0d6cefb3790a26b9d62c::SDOGE::SDOGE')}>Copy Address</button>
                    </div>
                    <h3>Join Our Community</h3>
                    <div className="d-flex justify-content-center mt-4 mb-1">
                        <a href="https://t.me/sui_doge" target="_blank" rel="noreferrer">
                            <div className="circle" style={{ width: '55px', height: '55px' }}>
                                <img src={telegram} alt="suidoge telegram" width={45} />
                            </div>
                        </a>
                        <a href="https://twitter.com/Sui__Doge?t=CokaXRBM20AcNuzmw-5aMg&s=09" target="_blank" rel="noreferrer">
                            <div className="circle" style={{ width: '55px', height: '55px' }}>
                                <img src={twitter} alt="suidoge twitter" width={45} />
                            </div>
                        </a>
                        {/* <a href="http://discord.com/suidoge" target="_blank" rel="noreferrer">
                            <div className="circle" style={{ width: '55px', height: '55px' }}>
                                <img src={discord} alt="suidoge discord" width={45} />
                            </div>
                        </a> */}
                    </div>
                    {/* <img src={certik} alt='certik' width={190} className='my-2' /> */}
                    {/* <div className='pt-4 d-flex justify-content-center btns-mobile-center w-100'>
                        <a href='/' target='_blank' rel="noreferrer" className="buy-now-btn hvr-back-pulse me-2">
                            Buy SuiDoge
                        </a>
                        <a href='/' target='_blank' rel="noreferrer" className="buy-now-btn hvr-back-pulse ms-2">
                            View Chart
                        </a>
                    </div> */}
                </div>
            </div>
        </>
    )
}

export default Hero
