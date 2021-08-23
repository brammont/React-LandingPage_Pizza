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
            <HeroContent>
                <HeroItems>
                <HeroH1>La mejor Pizza del mundo mundial!</HeroH1>
                <HeroP>Lista en 60 secondos</HeroP>
                <HeroBtn>Pedir Orden</HeroBtn>
            </HeroItems>
            </HeroContent>
        </HeroContainer>

    );
};

export default Hero
