import React from 'react';
import styled from 'styled-components';
import { useAppContext } from '../../../context/AppContext';
import { PAGE_SIZES } from '../../../context/types';

const PageSizesWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 200px;
`

interface PageSizeProps {
  selected: boolean;
}

const PageSize = styled.div`
  cursor: pointer;
  opacity: ${(props: PageSizeProps) => props.selected ? 1 : 0.6};
  font-size: ${(props: PageSizeProps) => props.selected ? '24px' : '18px'};
  &:hover {
    opacity: 1;
  }
`

const PageSizes = () => {
  const { pageSize, changePageSize } = useAppContext();

  return (
    <PageSizesWrapper>
        {PAGE_SIZES.map(size => (
          <PageSize key={size} selected={pageSize === size} onClick={() => changePageSize(size)}>
            {size}
          </PageSize>
      ))}
    </PageSizesWrapper>
  )
}

export default PageSizes;