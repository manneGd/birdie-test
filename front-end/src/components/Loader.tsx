import * as React from 'react';
import styled from 'styled-components';

const StyledLoader = styled.svg`
  animation: rotate 2s linear infinite;
  margin: -25px 0 0 -25px;
  width: 50px;
  height: 50px;
  
  & .path {
    stroke: #5ac5c1;
    stroke-linecap: round;
    animation: dash 1.5s ease-in-out infinite;
  }
  
  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }
  @keyframes dash {
    0% {
      stroke-dasharray: 1, 150;
      stroke-dashoffset: 0;
    }
    50% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -35;
    }
    100% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -124;
    }
  }
`;

const LoaderContainer = styled.svg`
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Loader = () => (
  <LoaderContainer>
      <StyledLoader viewBox="0 0 50 50">
          <circle
              className="path"
              cx="25"
              cy="25"
              r="20"
              fill="none"
              strokeWidth="4"
          />
      </StyledLoader>
  </LoaderContainer>
);