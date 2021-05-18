// URLs
export const URL= 'https://anapioficeandfire.com/api'
export const CHARACTERS_URL = `${URL}/characters`
export const HOUSES_URL = `${URL}/houses`
export const DEFAULT_CHARACTERS_URL = `${CHARACTERS_URL}?page=1&pageSize=25`;

// API LINK NAVIGATION
export const DEFAULT_PAGE_SIZE = 25;
export const MIN_PAGE_SIZE = 10;
export const MAX_PAGE_SIZE = 50;
export const PAGE_SIZES = [MIN_PAGE_SIZE, DEFAULT_PAGE_SIZE, MAX_PAGE_SIZE];
export const PREV = 'prev';
export const NEXT = 'next';
export const FIRST = 'first';
export const LAST = 'last';
export const DEFAULT_LINKS = {
  first: DEFAULT_CHARACTERS_URL,
  prev: DEFAULT_CHARACTERS_URL,
  next: `${CHARACTERS_URL}?page=2&pageSize=25`,
  last: `${CHARACTERS_URL}?page=10&pageSize=25`,
}

// ELSE
export const UNKNOWN = 'Unknown';
export const GENDER_FILTERS = {
  ALL: 'All',
  MALE: 'Male',
  FEMALE: 'Female',
  UNKNOWN: UNKNOWN
}

// INTERFACES
export interface ApiCharacter {
  url: string
  name: string
  culture: string
  born: string
  died: string
  titles: string[];
  aliases: string[];
  father: string
  mother: string
  spouse: string
  allegiances: string[];
  books: string[];
  povBooks: string[];
  tvSeries: string[];
  playedBy: string[];
  gender?: string;
}

export interface Character {
  character: string;
  alive: boolean;
  gender: string;
  culture: string;
  allegiances: number[];
  numberOfBooks: number;
}
export interface ApiHouse {
  url: string;
  name: string;
  region: string;
  coatOfArms: string;
  words: string;
  titles: string[];
  seats: string[];
  currentLord: string;
  heir: string;
  overlord: string;
  founded: string;
  founder: string;
  diedOut: string;
  ancestralWeapons: string;
  cadetBranches: string;
  swornMembers: string;
}

export interface House {
  name: string;
  region: string;
  coatOfArms: string;
  words: string;
  titles: string[] | string;
  hasDiedOut: string;
  hasOverlord: string;
  numberOfCadetBranches: number;
}

export interface Links {
  first: string;
  prev: string;
  next: string;
  last: string;
}