import React from 'react';
import styled from 'styled-components';
import { white, blue2 } from '../../../style/colors';
import GenderFilter from './GenderFilter';
import CultureFilter from './CultureFilter';

const THead = styled.thead`
  z-index: 10;
  color: ${white};
  background-color: ${blue2};
  font-size: 10px;
  position: fixed;
  top: 50px;
  @media(min-width: 800px) {
    top: 90px;
    font-size: 20px;
  }
`
const TH = styled.th`
  font-weight: 400;
  padding-top: 10px;
  padding-bottom: 10px;
  width: 100px;
  @media(min-width: 800px) {
    width: 180px;
  }
`

const TableHeader = () => {
  return (
    <THead>
      <tr>
        <TH>Character</TH>
        <TH>Alive</TH>
        <TH>
          Gender
          <GenderFilter />
        </TH>
        <TH>
          Culture
          <CultureFilter />
        </TH>
        <TH>Allegiances</TH>
        <TH># of books</TH>
      </tr>
  </THead>
  )
}

export default TableHeader;
