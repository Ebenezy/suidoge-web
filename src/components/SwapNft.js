import React from 'react'
import { Col, Row } from 'react-bootstrap'
import suidoge from '../images/suidoge.svg'

const SwapNft = () => {
    return (
        <div>
            <Row className='g-0'>
                <Col md={6}>
                    <div className='left-container swap-contents text-center'>
                        <img src={suidoge} alt='logo' className='mt-5 mb-2' width={100} />
                        <h2>SuiDoge Swap</h2>
                        <p>SuiDoge Swap still trending</p>
                        <div className='pt-3 d-flex justify-content-center w-100'>
                            <a href='https://andromedaswap.org/swap' target='_blank' rel="noreferrer" className="buy-now-btn hvr-back-pulse">
                                Swap SuiDoge
                            </a>
                        </div>
                    </div>
                </Col>
                <Col md={6}>
                    <div className='right-container swap-contents text-center'>
                        <img src={suidoge} alt='logo' className='mt-5 mb-2' width={100} />
                        <h2>SuiDoge NFT</h2>
                        <p>SuiDoge NFT Staking still trending</p>
                        <div className='pt-3 d-flex justify-content-center w-100'>
                            <a href='https://andromedaswap.org/swap' target='_blank' rel="noreferrer" className="buy-now-btn hvr-back-pulse">
                                Stake NFT
                            </a>
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default SwapNft
