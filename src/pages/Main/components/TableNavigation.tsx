import React from 'react';
import styled from 'styled-components';
import { MdLastPage, MdFirstPage, MdNavigateBefore, MdNavigateNext } from 'react-icons/md';
import { useAppContext } from '../../../context/AppContext';
import { FIRST, NEXT, PREV, LAST }from '../../../context/types';
import { blue2, white } from '../../../style/colors';
import PageSizes from './PageSizes'

const NavigationWrapper = styled.div`
  z-index: 10;
  position: fixed;
  width: 100%;
  background-color: ${white};
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  color: ${blue2};
  font-size: 30px;
  svg {
    opacity: 0.6;
    cursor: pointer;
    &:hover {
      opacity: 1;
    }
  }
`

const TableNavigation = () => {
  const { goToPage } = useAppContext();
  return (
    <NavigationWrapper>
      <MdFirstPage onClick={() => goToPage(FIRST)} />
      <MdNavigateBefore onClick={() => goToPage(PREV)} />
      <PageSizes />
      <MdNavigateNext onClick={() => goToPage(NEXT)} />
      <MdLastPage onClick={() => goToPage(LAST)} />
    </NavigationWrapper>
  )
}

export default TableNavigation;