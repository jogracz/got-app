import React from 'react';
import styled from 'styled-components';
import { Character } from '../../../context/types';
import { white } from '../../../style/colors';
import Cell from './Cell';

interface RowProps {
  character: Character;
  even: boolean;
}

interface TRowProps {
  even: boolean;
}

const TRow = styled.tr`
  background-color: ${(props: TRowProps) => props.even ? '#ddd' : white};
`

const Row = (props: RowProps) => {
  const { character, even } = props;

  return (
    <TRow even={even}>
      {Object.entries(character).map(([key, value])=> (
        <Cell key={key} k={key} value={value} />
      ))}
    </TRow>
  )
}

export default Row;
