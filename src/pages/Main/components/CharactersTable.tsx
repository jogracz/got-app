import React from 'react';
import styled from 'styled-components';
import { Character } from '../../../context/types';
import Row from './Row';
import TableHeader from './TableHeader';

interface CharactersTableProps {
  characters: Character[];
}

const Table = styled.table`
  padding-top: 105px;
  width: 100%;
  @media(min-width: 800px) {
    padding-top: 110px;
  }
`
const TBody = styled.tbody`
  padding-top: 350px;
  @media(min-width: 800px) {
    padding-top: 300px;
  }
`

const CharactersTable = (props: CharactersTableProps) => {
  const { characters } = props;

  return (
    <Table>
      <TableHeader />
      {characters.length > 0 && (
          <TBody>
        {characters.map((character, index) => (
          <Row key={index} character={character} even={index % 2 === 0} />
        ))}
      </TBody>
      )}
      
    </Table>
  )
}

export default CharactersTable;
