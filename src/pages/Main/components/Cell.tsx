import React from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';
import { UNKNOWN } from '../../../context/types';

interface CellProps {
  k: string;
  value: string | string[];
}

interface TCellProps {
  unknown: boolean;
}

export const TCell = styled.td`
  padding: 2px;
  font-size: 10px;
  height: 40px;
  opacity: ${(props: TCellProps) => props.unknown ? 0.6 : 1};
  text-align: center;
  width: 70px;
  @media(min-width: 800px) {
    width: 180px;
    padding: 10px;
    font-size: 14px;
  }
`

const Cell = (props: CellProps) => {
  const { k, value } = props;
  
  return (
    <TCell unknown={value === UNKNOWN}>
      {k === 'allegiances' && Array.isArray(value)
        ? value.map((houseId: string) => (
          <div key={houseId}>
            <Link to={`/got-app/houses/${houseId}`}>{houseId}</Link>
          </div>
        ))
        : value
      }
    </TCell>
  )
}

export default Cell;