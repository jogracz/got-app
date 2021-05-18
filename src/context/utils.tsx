import { UNKNOWN, ApiCharacter, ApiHouse, Character} from './types';

const getDyingAge = (born: string, died: string) => {
  const bornSplitted = born.split(' ')
  const diedSplitted = died.split(' ')
  const bornAt = bornSplitted[0] === 'In' ? bornSplitted[1] : bornSplitted[0];
  const diedAt = diedSplitted[0] === 'In' ? diedSplitted[1] : diedSplitted[0];
  return parseInt(diedAt) - parseInt(bornAt);
}

const getAliveValue = (born: string, died: string) => {
  if (died === '') return 'Yes';
  return `No, died at ${getDyingAge(born, died)} years old`;  
}

const getCharacterName = (name: string, aliases: string[]) => {
  if (aliases.length === 0) return name;
  const aliasesConnected = aliases.join(', ')
  if (!name) return aliasesConnected;
  return `${name}, ${aliasesConnected}`;
}

const getHouseId = (url: string) => {
  const urlSplitted = url.split('/');
  return urlSplitted[urlSplitted.length - 1];
}

const getAlliegances = (alliegances: string[]) => {
  if (alliegances.length === 0) return UNKNOWN;
  const houseIdArray = alliegances.map(a => getHouseId(a));
  return houseIdArray;
}

export const prepareCharacter = (apiCharacter: ApiCharacter) => {
  return {
    character: getCharacterName(apiCharacter.name, apiCharacter.aliases),
    alive: getAliveValue(apiCharacter.born, apiCharacter.died),
    gender: apiCharacter.gender || UNKNOWN,
    culture: apiCharacter.culture || UNKNOWN,
    allegiances: getAlliegances(apiCharacter.allegiances),
    numberOfBooks: apiCharacter.books.length,
  }
}

export const prepareHouse = (apiHouse: ApiHouse) => {
  return {
    name: apiHouse.name || UNKNOWN,
    region: apiHouse.region || UNKNOWN,
    coatOfArms: apiHouse.coatOfArms || UNKNOWN,
    words: apiHouse.words || UNKNOWN,
    titles: (apiHouse.titles.length > 0 && apiHouse.titles[0] !== '')? apiHouse.titles : UNKNOWN,
    hasDiedOut: apiHouse.diedOut ? 'Yes' : 'No',
    hasOverlord: apiHouse.overlord ? 'Yes' : 'No',
    numberOfCadetBranches: apiHouse.cadetBranches.length,
  }
}

export const getLinks = (links: string) => {
  if (!links) return [];
  const linksObject: {[x: string]: string} = {
    first: '',
    prev: '',
    next: '',
    last: ''
  }
  const arrayOfLinks = links.split(',')
  arrayOfLinks.forEach(string => {
    const key = string.split(';')[1].split('"')[1];
    const link = string.split(';')[0].split('<')[1].split('>')[0];
    linksObject[key] = link;
  })
  return linksObject;
}

export const filterByGender = (characters: Character[], genderFilter: string) => {
  return characters.filter(character => character.gender === genderFilter);
}

export const filterByCulture = (characters: Character[], cultureFilter: string) => {
  return characters.filter(
    character => character.culture.toLocaleLowerCase().includes(
      cultureFilter.toLocaleLowerCase()
    )
  )
}