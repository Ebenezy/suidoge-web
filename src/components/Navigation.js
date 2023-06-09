import React from 'react'
// import './navigation.css'
import logo from '../images/suidoge-logo.svg'
import { Navbar, Container, Nav, Button } from 'react-bootstrap'
import {
    Link,
} from "react-router-dom";

const Navigation = () => {
    return (
        <div className='w-100 bg-white'>
            <Navbar expand="lg" variant="light" className='pt-2 bg-white fixed-top border-bottom'>
                <Container>
                    <Navbar.Brand as={Link} to="/"><img src={logo} alt="alephshib logo" className='logo' /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto my-2 my-lg-0">
                            <Nav.Link href="#about">About</Nav.Link>
                            <Nav.Link href="#tokenomics">Tokenomics</Nav.Link>
                            <Nav.Link href="#roadmap">Roadmap</Nav.Link>
                            {/* <Nav.Link href="#howtobuy">How to Buy</Nav.Link> */}
                            <Nav.Link href='#chart'>Chart</Nav.Link>
                            {/* <Nav.Link href="#whitepaper">Whitepaper</Nav.Link> */}
                            <Button className='launchapp-btn hvr-back-pulse' as={Link} to='https://flameswap.io/#/swap'>Launch App</Button>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default Navigation
