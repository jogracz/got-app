import React from 'react';
import styled, { keyframes } from 'styled-components';
import { GiSpinningSword } from 'react-icons/gi';
import { blue2 } from '../style/colors';


const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const LoaderWrapper = styled.div`
  color: ${blue2};
  width: 100%;
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 40px;
  svg {
    width: 100px;
    height: 100px;
    animation: ${rotate} 0.5s linear infinite;
  }
`

const Loader = () => {
  return (
    <LoaderWrapper>
      <GiSpinningSword />
    </LoaderWrapper>
  )
}

export default Loader;