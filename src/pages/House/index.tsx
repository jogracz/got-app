import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import { useParams } from 'react-router';
import styled from 'styled-components';
import { FiChevronsLeft } from 'react-icons/fi';
import { useAppContext } from '../../context/AppContext';
import { ParamTypes } from '../../App';
import Loader from '../../components/Loader';
import { blue2 } from '../../style/colors';
import Card from './components/Card';

const HouseWrapper = styled.div``
const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-bottom: 20px;
  font-size: 20px;
  text-align: center;
  svg {
    cursor: pointer;
    color: ${blue2};
    font-size: 30px;
    margin-bottom: 20px;
  }
  font-weight: 700;
  @media(min-width: 800px) {
    flex-direction: row;
    font-size: 26px;
    margin-left: -30px;
    padding-bottom: 30px;
    svg {
      position: relative;
      left: -100px;
      margin-top:10px;
      margin-bottom: 0;
    }
  }
`
const InfoWrapper = styled.div`
  text-align: left;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  
`

const House = () => {
  const { houseId } = useParams<ParamTypes>();
  const { getHouse, house, cleanHouse } = useAppContext();

  useEffect(() => {
    getHouse(parseInt(houseId));
  }, [houseId, getHouse])

  if (!house) {
    return <Loader />
  } else {
    return (
      <HouseWrapper>
        <Header>
          <Link to='/got-app/' onClick={cleanHouse}><FiChevronsLeft /></Link>
          {house.name}
        </Header>
        <InfoWrapper>
          <Card label={'Region'} value={house.region}/>
          <Card label={'Coat of Arms'} value={house.coatOfArms}/>
          <Card label={'Words'} value={house.words}/>
          <Card label={'Titles'} value={house.titles}/>
          <Card label={'Has Died Out'} value={house.hasDiedOut}/>
          <Card label={'Has Overlord'} value={house.hasOverlord}/>
          <Card label={'Number Of Cadet Branches'} value={house.numberOfCadetBranches}/>
        </InfoWrapper>
      </HouseWrapper>
    )
  }
}

export default House;