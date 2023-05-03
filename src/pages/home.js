import React from 'react'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import SwapNft from '../components/SwapNft'
import About from '../components/About'
import Tokenomics from '../components/Tokenomics'
import Roadmap from '../components/Roadmap'
import Whitepaper from '../components/Whitepaper'

const Home = () => {
    return (
        <div>
            <Hero />
            <SwapNft />
            <About />
            <Tokenomics />
            <Roadmap />
            <Whitepaper />
            <Footer />
        </div>
    )
}

export default Home