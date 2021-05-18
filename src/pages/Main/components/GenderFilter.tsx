import React from 'react';
import styled from 'styled-components';
import { useAppContext } from '../../../context/AppContext';
import { GENDER_FILTERS } from '../../../context/types';

const Select = styled.select`
  width: 100%;
`

const GenderFilter = () => {
  const { changeGenderFilter } = useAppContext();

  return (
    <Select defaultValue={GENDER_FILTERS.ALL} onChange={(e) => changeGenderFilter(e.target.value)}>
      {Object.values(GENDER_FILTERS).map(option => <option value={option}>{option}</option>)}
    </Select>
  )
}

export default GenderFilter;