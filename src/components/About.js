import React from 'react'
import art from '../images/icons/art.svg'
import profile from '../images/icons/profile.svg'
import reward from '../images/icons/reward.svg'
import voting from '../images/icons/voting.svg'
import growth from '../images/icons/growth.svg'
import { Col, Container, Row } from 'react-bootstrap'

const About = () => {
    return (
        <div id='about' className='sections'>
            <Container>
                <div className='text-center mb-5'>
                    <h4>About SuiDoge</h4>
                    <p className='p-2 m-auto'>One of the unique features of SuiDoge is that it is built around a meme coin, which has several advantages for the project. Firstly, meme coins like SuiDoge have a strong community of followers who are passionate about the brand and its vision. This community is often highly engaged and actively participates in the development and promotion of the project. This can help to drive adoption and create a sense of loyalty among users.</p>
                </div>
                <Row>
                    <Col md={4} className='mb-4'>
                        <div className='text-center sections-card'>
                            <img src={art} alt='suidoge' height={100} />
                            <h5 className='pt-3 pb-2'>Art</h5>
                            <p>The NFTs will feature unique and high-quality art, making them valuable to art collectors and enthusiasts. Each NFT will be one-of-a-kind, adding to their collectability and value. Owning one of these NFTs will give collectors the opportunity to own a piece of digital art that is both rare and unique.</p>
                        </div>
                    </Col>
                    <Col md={4} className='mb-4'>
                        <div className='text-center sections-card'>
                            <img src={profile} alt='suidoge' height={100} />
                            <h5 className='pt-3 pb-2'>Identity</h5>
                            <p>The NFTs will also provide identity to our community members by giving them a cool pfp (profile picture) that will differentiate them from other members of the community. This will help to build a sense of community and belonging among Suidoge holders and create a more engaging and interactive user experience.</p>
                        </div>
                    </Col>
                    <Col md={4} className='mb-4'>
                        <div className='text-center sections-card'>
                            <img src={reward} alt='suidoge' height={100} />
                            <h5 className='pt-3 pb-2'>Earn Token Staking</h5>
                            <p>NFT holders will be able to stake their tokens to earn rewards in the form of Suidoge tokens. This will provide an additional incentive for collectors to hold onto their NFTs and encourage the long-term growth of the Suidoge ecosystem.</p>
                        </div>
                    </Col>
                    <Col md={4} className='mb-4'>
                        <div className='text-center  sections-card'>
                            <img src={voting} alt='suidoge' height={100} />
                            <h5 className='pt-3 pb-2'>Voting Rights</h5>
                            <p>NFT holders will also be given voting rights, enabling them to participate in the governance of the Suidoge project. This will provide a more democratic and community-community-driven approach to decision-making, ensuring that the project is guided by the interests of its users.</p>
                        </div>
                    </Col>
                    <Col md={4} className='mb-4'>
                        <div className='text-center sections-card'>
                            <img src={growth} alt='suidoge' height={100} />
                            <h5 className='pt-3 pb-2'>Future Benefits</h5>
                            <p>Finally, NFT holders may also be entitled to future benefits arising from collaborations with other projects or partnerships that Suidoge may establish in the future. This could include exclusive access to new products or services, or even additional NFTs featuring unique collaborations between artists and other projects.</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default About
