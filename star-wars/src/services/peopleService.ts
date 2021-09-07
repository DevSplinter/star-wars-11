import { SWAPI_API } from '../const/apis';
import { get } from './httpService';
import { IPeople, IPerson } from '../types/types';

export const fetchPeople = async (pageNumber = 1): Promise<IPeople> =>
  await get(`${SWAPI_API}people/?page=${pageNumber}`);

export const fetchPerson = async (id: number): Promise<IPerson> =>
  await get(`${SWAPI_API}people/${id}`);
