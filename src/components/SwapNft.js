import React from 'react'
import { Col, Row } from 'react-bootstrap'
import suidoge from '../images/suidoge.svg'

const SwapNft = () => {
    return (
        <div data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
            <Row className='g-0'>
                <Col md={6}>
                    <div className='left-container swap-contents text-center'>
                        <img src={suidoge} alt='logo' className='mt-5 mb-2' width={100} />
                        <h2>SuiDoge Swap</h2>
                        <p>SuiDoge Swap - coming soon</p>
                        <div className='pt-3 d-flex justify-content-center w-100'>
                            <a href='https://flameswap.io/#/swap' target='_blank' rel="noreferrer" className="buy-now-btn hvr-back-pulse">
                                Swap SuiDoge
                            </a>
                        </div>
                    </div>
                </Col>
                <Col md={6}>
                    <div className='right-container swap-contents text-center'>
                        <img src={suidoge} alt='logo' className='mt-5 mb-2' width={100} />
                        <h2>SuiDoge NFT</h2>
                        <p>SuiDoge NFT Staking and Minting</p>
                        <div className='pt-3 d-flex justify-content-center w-100'>
                            <a href='/' target='_blank' rel="noreferrer" className="buy-now-btn hvr-back-pulse">
                                Mint NFT
                            </a>
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default SwapNft
