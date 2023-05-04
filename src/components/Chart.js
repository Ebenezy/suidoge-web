import React from 'react'
import { Container } from 'react-bootstrap'

const Chart = () => {
    return (
        <div id='chart' className='sections w-100'>
            <Container>
                <div className='text-center mb-5'>
                    <h4>SuiDoge Live Chart</h4>
                </div>
                <div id="dexscreener-embed">
                    <iframe title='chart' src="https://dexscreener.com/sui/0xb80dfb0456a58e5ff7409b42a4caa44e0240a9a69e305a0d2cbfb3f7af222cd2?embed=1"></iframe>
                </div>
            </Container>
        </div>
    )
}

export default Chart
