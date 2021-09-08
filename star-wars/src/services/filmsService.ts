import { IFilm } from '../types/types';
import { get } from './httpService';

export const fetchFilm = async (url: string): Promise<IFilm> => await get(url);
