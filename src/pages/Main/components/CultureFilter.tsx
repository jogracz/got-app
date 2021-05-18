import React from 'react';
import styled from 'styled-components';
import { useAppContext } from '../../../context/AppContext';

const Input = styled.input`
  width: 100%;
`
const CultureFilter = () => {
const { changeCultureFilter } = useAppContext();

  return (
    <Input
      type='text'
      placeholder='search'
      onChange={(e) => changeCultureFilter(e.target.value)}
    />
  )
}

export default CultureFilter;