import React from 'react'
import { Container } from 'react-bootstrap'
import YoutubeEmbed from './YoutubeEmbed'

const HowToBuy = () => {
    return (
        <div id='howtobuy' className='sections whitepaper w-100'>
            <Container>
                <div className='text-center'>
                    <h4 className='pb-3'>How to Buy SuiDoge</h4>
                    <YoutubeEmbed embedId="Zed6AjP6iDo" />
                </div>
            </Container>
        </div>
    )
}

export default HowToBuy
