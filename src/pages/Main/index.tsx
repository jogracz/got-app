import React from 'react';
import styled from 'styled-components';
import { useAppContext } from '../../context/AppContext';
import TableNavigation from './components/TableNavigation';
import CharactersTable from './components/CharactersTable';

const TableWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 1100px;
  display: flex;
  justify-content: center;
`
const Main = () => {
  const { filteredCharacters } = useAppContext();
console.log(filteredCharacters)
  return (
    <TableWrapper>
      <TableNavigation />
      <CharactersTable characters={filteredCharacters}/>
    </TableWrapper>
  )
}

export default Main;
