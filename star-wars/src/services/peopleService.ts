import { SWAPI_API } from '../const/apis';
import { get } from './httpService';
import { IPeopleDTO, IPersonDTO } from '../types/types';

export const fetchPeople = async (url?: string): Promise<IPeopleDTO> =>
  url ? await get(url) : await get(`${SWAPI_API}people/`);

export const fetchPerson = async (id: number): Promise<IPersonDTO> =>
  await get(`${SWAPI_API}people/${id}`);

export const fetchPeopleSearchResult = async (
  query: string
): Promise<IPeopleDTO> => await get(`${SWAPI_API}people/?search=${query}`);
