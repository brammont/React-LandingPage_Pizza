import React from 'react'
import { FeatureContainer, FeatureButton } from './FeatureElements';


const Feature = () => {
    return (
      <FeatureContainer>
        <h1>Pizza del dia</h1>
        <p>Salsa alfredo de trufa cubierta con polvo de oro de 24 quilates.</p>
        <FeatureButton>Ordenar Ahora</FeatureButton>
      </FeatureContainer>
    );
  };
  
  export default Feature;
