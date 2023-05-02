import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import check from '../images/icons/check.svg'
import checked from '../images/icons/checked.svg'

const Roadmap = () => {
    return (
        <div id='roadmap' className='sections' data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
            <Container>
                <div className='text-center mb-5'>
                    <h4>Roadmap</h4>
                </div>
                <Row>
                    <Col md={4} className='mb-4'>
                        <div className='sections-card' data-aos="zoom-in" data-aos-duration="1000" data-aos-once="true">
                            <h5 className='pb-2'>Phase 1</h5>
                            <p><span><img src={checked} width={20} alt='suidoge' /></span> Research</p>
                            <p><span><img src={checked} width={20} alt='suidoge' /></span> Series of Test</p>
                            <p><span><img src={checked} width={20} alt='suidoge' /></span> Creation of social media</p>
                            <p><span><img src={checked} width={20} alt='suidoge' /></span> Website Launch</p>
                            <p><span><img src={checked} width={20} alt='suidoge' /></span> Private Sale</p>
                            <p><span><img src={check} width={20} alt='suidoge' /></span> Token launch</p>
                            <p><span><img src={check} width={20} alt='suidoge' /></span> Lock Liquidity</p>
                        </div>
                    </Col>
                    <Col md={4} className='mb-4'>
                        <div className='sections-card' data-aos="zoom-in" data-aos-duration="1000" data-aos-once="true">
                            <h5 className='pb-2'>Phase 2</h5>
                            <p><span><img src={check} width={20} alt='suidoge' /></span> Lottery Launch</p>
                            <p><span><img src={check} width={20} alt='suidoge' /></span> Marketing Campaign</p>
                            <p><span><img src={check} width={20} alt='suidoge' /></span> NFT Mint</p>
                            <p><span><img src={check} width={20} alt='suidoge' /></span> NFT Staking</p>
                            <p><span><img src={check} width={20} alt='suidoge' /></span> 200 Holders</p>
                            <p><span><img src={check} width={20} alt='suidoge' /></span> Social Media competitions & rewards</p>
                            <p><span><img src={check} width={20} alt='suidoge' /></span> Token Staking</p>
                            <p><span><img src={check} width={20} alt='suidoge' /></span> Sui Ecosystem Collaboration</p>
                            <p><span><img src={check} width={20} alt='suidoge' /></span> Token Audit</p>
                        </div>
                    </Col>
                    <Col md={4} className='mb-4'>
                        <div className='sections-card' data-aos="zoom-in" data-aos-duration="1000" data-aos-once="true">
                            <h5 className='pb-2'>Phase 3</h5>
                            <p><span><img src={check} width={20} alt='suidoge' /></span> Token whitlisting</p>
                            <p><span><img src={check} width={20} alt='suidoge' /></span> Social media expansion</p>
                            <p><span><img src={check} width={20} alt='suidoge' /></span> NFT mints out</p>
                            <p><span><img src={check} width={20} alt='suidoge' /></span> Marketing Campaign</p>
                            <p><span><img src={check} width={20} alt='suidoge' /></span> Coinmarketcap Listing</p>
                            <p><span><img src={check} width={20} alt='suidoge' /></span> Coingecko Listing</p>
                            <p><span><img src={check} width={20} alt='suidoge' /></span> Suidoge Swap launch</p>
                            <p><span><img src={check} width={20} alt='suidoge' /></span> Whitepaper v2</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Roadmap
