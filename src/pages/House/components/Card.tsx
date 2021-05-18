import React from 'react';
import styled from 'styled-components';
import { UNKNOWN } from '../../../context/types';
import { grey, white, blue2, orange} from '../../../style/colors';

interface CardProps {
  label: string;
  value: string | string[] | boolean | number;
}

interface WrapperProps {
  unknown: boolean
}
const CardWrapper = styled.div`
  opacity: ${(props: WrapperProps) => props.unknown ? 0.6 : 1};
  background-color: ${blue2};
  /* box-shadow: 4px 4px 12px ${orange}; */
  padding: 15px;
  margin: 20px;
  width: 200px;
  min-height: 200px;
  border-radius: 3px;
`
const Label = styled.div`
  color: ${white};
  font-weight: 600;
  padding-bottom: 15px;
`
const Value = styled.div`
  color: ${grey};
  font-weight: 400;
`

const Card = (props: CardProps) => {
  const {label, value} = props;
  console.log(value);

  return (
    <CardWrapper unknown={value === UNKNOWN}>
      <Label>{label}</Label>
      <Value>{Array.isArray(value) ? value.map(v => <div>{v}</div>) : value}</Value>
    </CardWrapper>
  )
}

export default Card;