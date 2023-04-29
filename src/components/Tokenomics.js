import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import supply from '../images/icons/total-supply.svg'
import liquidity from '../images/icons/liquidity.svg'
import staking from '../images/icons/staking.svg'
import nft from '../images/icons/nft.svg'
import team from '../images/icons/team.svg'
import marketing from '../images/icons/marketing.svg'

const Tokenomics = () => {
    return (
        <div id='tokenomics' className='sections gradient-bg'>
            <Container>
                <div className='text-center mb-5'>
                    <h4 className='text-white'>Tokenomics</h4>
                    <p className='p-2 m-auto text-white'>Tokenomics is a critical aspect of any blockchain project, determining how tokens are distributed and utilized within the ecosystem. The Suidoge project is no exception, with a carefully crafted tokenomics model designed to promote long-term value and sustainability.</p>
                </div>
                <Row>
                    <Col md={4} className='mb-4'>
                        <div className='text-center'>
                            <img src={supply} alt='suidoge' height={60} />
                            <h2>1,000,000,000</h2>
                            <h6>Total Supply</h6>
                        </div>
                    </Col>
                    <Col md={4} className='mb-4'>
                        <div className='text-center'>
                            <img src={liquidity} alt='suidoge' height={60} />
                            <h2>600,000,000</h2>
                            <h6>Liquidity</h6>
                        </div>
                    </Col>
                    <Col md={4} className='mb-4'>
                        <div className='text-center'>
                            <img src={staking} alt='suidoge' height={60} />
                            <h2>100,000,000</h2>
                            <h6>Token Staking</h6>
                        </div>
                    </Col>
                    <Col md={4} className='mb-4'>
                        <div className='text-center'>
                            <img src={nft} alt='suidoge' height={60} />
                            <h2>100,000,000</h2>
                            <h6>NFT Staking</h6>
                        </div>
                    </Col>
                    <Col md={4} className='mb-4'>
                        <div className='text-center'>
                            <img src={team} alt='suidoge' height={60} />
                            <h2>40,000,000</h2>
                            <h6>Team</h6>
                        </div>
                    </Col>
                    <Col md={4} className='mb-4'>
                        <div className='text-center'>
                            <img src={marketing} alt='suidoge' height={60} />
                            <h2>160,000,000</h2>
                            <h6>Marketing</h6>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Tokenomics
