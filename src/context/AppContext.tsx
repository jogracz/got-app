import React, { useState, createContext, useContext, useEffect } from 'react';
import axios from 'axios';
import {
  DEFAULT_PAGE_SIZE,
  FIRST,
  NEXT,
  PREV,
  LAST,
  DEFAULT_CHARACTERS_URL,
  HOUSES_URL,
  GENDER_FILTERS,
  ApiCharacter,
  Character,
  ApiHouse,
  House,
} from './types';
import { prepareCharacter, prepareHouse, getLinks, filterByGender, filterByCulture } from './utils';

interface AppProviderValue {
  filteredCharacters: Character[];
  house: House | null;
  pageSize: number;
  changePageSize: (newPageSize: number) => void;
  getHouse: (houseId: number) => void;
  cleanHouse: () => void;
  goToPage: (type: string) => void;
  changeGenderFilter: (selectedGender: string) => void;
  changeCultureFilter: (searchedWord: string) => void;
}

const defaultValue: AppProviderValue = {
  filteredCharacters: [],
  house: null,
  pageSize: DEFAULT_PAGE_SIZE,
  changePageSize: () => null,
  getHouse: () => null,
  cleanHouse: () => null,
  goToPage: () => null,
  changeGenderFilter: () => null,
  changeCultureFilter: () => null,
}

const AppContext = createContext(defaultValue);

interface AppProviderProps {
  children: any;
}

export const AppProvider = (props: AppProviderProps) => {
  const { children } = props;
  const [characters, setCharacters] = useState<Character[]>([]);
  const [filteredCharacters, setFilteredCharacters] = useState<Character[]>(characters);
  const [house, setHouse] = useState<House | null>(null);
  const [pageSize, setPageSize] = useState(DEFAULT_PAGE_SIZE);
  const [links, setLinks] = useState<any>({});
  const [currentCharactersURL, setCurrentCharactersURL] = useState(DEFAULT_CHARACTERS_URL)
  const [genderFilter, setGenderFilter] = useState(GENDER_FILTERS.ALL)
  const [cultureFilter, setCultureFilter] = useState('')

  const getCharacters = async (currentCharactersURL: string) => {
    axios(currentCharactersURL)
    .then(response => {
      const newLinks = getLinks(response.headers.link);
      setLinks(newLinks);
      return (response.data)
    })
    .then(data =>  setCharacters(
      data.map((character: ApiCharacter) => prepareCharacter(character))
    ))
    .catch(error => console.log(error));
  }

  const getHouse = async (houseId: number) => {
    const url = `${HOUSES_URL}/${houseId}`
    fetch(url)
      .then(response => response.json())
      .then((data: ApiHouse) => setHouse(prepareHouse(data)))
      .catch(error => console.log(error));
  }

  const cleanHouse = () => {
    setHouse(null);
  }

  const goToPage = (type: string) => {
    switch (type) {
      case FIRST:
        links[FIRST] && setCurrentCharactersURL(links[FIRST]);
        break;
      case PREV:
        links[PREV] && setCurrentCharactersURL(links[PREV]);
        break;
      case NEXT:
        links[NEXT] && setCurrentCharactersURL(links[NEXT]);
        break;
      case LAST:
        links[LAST] && setCurrentCharactersURL(links[LAST]);
        break;
    }
  }

  const changePageSize = (newPageSize: number) => {
    setPageSize(newPageSize);
    setCurrentCharactersURL(`${currentCharactersURL.split('pageSize')[0]}pageSize=${newPageSize}`)
  }

  const changeGenderFilter = (selectedGender: string) => {
    setGenderFilter(selectedGender)
  }

  const changeCultureFilter = (searchedWord: string) => {
    setCultureFilter(searchedWord);
  }

  useEffect(() => {
    if (genderFilter === GENDER_FILTERS.ALL && cultureFilter === '') {
      setFilteredCharacters(characters);
    } else {
      let filtered = characters;
      if (genderFilter !== GENDER_FILTERS.ALL ) {
        filtered = filterByGender(filtered, genderFilter)
      }
      if (cultureFilter !== '') {
        filtered = filterByCulture(filtered, cultureFilter);
      }
      setFilteredCharacters(filtered);
    }
  }, [characters, genderFilter, cultureFilter])

  useEffect(() => {
    const fetch = async (currentCharactersURL: string) => {
      await getCharacters(currentCharactersURL);
    }
    fetch(currentCharactersURL);
  }, [currentCharactersURL])

  const value = {
    filteredCharacters,
    house,
    pageSize,
    changePageSize,
    getHouse,
    cleanHouse,
    goToPage,
    changeGenderFilter,
    changeCultureFilter
  }

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  )
}

export const useAppContext = () => useContext(AppContext);