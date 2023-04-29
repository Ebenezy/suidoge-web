import React from 'react'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import SwapNft from '../components/SwapNft'
import About from '../components/About'
import Tokenomics from '../components/Tokenomics'

const Home = () => {
    return (
        <div>
            <Hero />
            <SwapNft />
            <About />
            <Tokenomics />
            <Footer />
        </div>
    )
}

export default Home