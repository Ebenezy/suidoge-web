import React from 'react'
import { Container } from 'react-bootstrap'
import telegram from '../images/icons/telegram.svg'
import twitter from '../images/icons/twitter.svg'
// import discord from '../images/icons/discord.svg'

const Footer = () => {
    return (
        <div className='border-top'>
            <div className='text-center'>
                <Container>
                    <div className="d-flex justify-content-center mt-5 mb-3">
                        <a href="https://t.me/sui_doge" target="_blank" rel="noreferrer">
                            <div className="circle">
                                <img src={telegram}
                                    alt="alephshib telegram"
                                />
                            </div>
                        </a>
                        <a href="https://twitter.com/Sui__Doge?t=CokaXRBM20AcNuzmw-5aMg&s=09" target="_blank" rel="noreferrer">
                            <div className="circle">
                                <img
                                    src={twitter}
                                    alt="alephshib twitter"
                                />
                            </div>
                        </a>
                        {/* <a href="http://discord.com/suidoge" target="_blank" rel="noreferrer">
                            <div className="circle">
                                <img src={discord} alt="suidoge discord" width={30} />
                            </div>
                        </a> */}
                    </div>
                    <div className='mb-5'>
                        <a href='mailto:help@alephshib.org' className='mail'>hello@suidoge.org</a>
                    </div>
                </Container>
            </div>
            <footer>
                <p className='mb-0'>Copyright © 2023 SuiDoge Coin. All Rights Reserved</p>
            </footer>
        </div>
    )
}

export default Footer
