import React from 'react';
import { StyledWrapper } from "./LoaderStyled"

const Loader = () => {
    
  return (
    <StyledWrapper>
      <div className="loader-container">
        <div className="loader-dot" />
        <div className="loader-dot" />
        <div className="loader-dot" />
        <div className="loader-dot" />
      </div>
    </StyledWrapper>
  );
}

export default Loader;
