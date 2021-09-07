import { SWAPI_API } from '../const/apis';
import { get } from './httpService';
import { IPeopleDTO, IPersonDTO } from '../types/types';

export const fetchPeople = async (pageNumber = 1): Promise<IPeopleDTO> =>
  await get(`${SWAPI_API}people/?page=${pageNumber}`);

export const fetchPerson = async (id: number): Promise<IPersonDTO> =>
  await get(`${SWAPI_API}people/${id}`);
