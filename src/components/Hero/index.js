import React from 'react'
import {
    HeroContainer,
    HeroContent,
    HeroItems,
    HeroH1,
    HeroP,
    HeroBtn
  } from './HeroElements';
import Navbar from '../Navbar';

const Hero = () => {
    return (
        <HeroContainer>
            <Navbar/>
        </HeroContainer>

    );
};

export default Hero
