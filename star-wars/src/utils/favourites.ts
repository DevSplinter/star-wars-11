import { LOCAL_STORAGE_KEYS } from '../const/localStorageKeys';
import { getLocalStorageItem } from './localStorage';

export const getFavourites = (): string[] =>
  JSON.parse(getLocalStorageItem(LOCAL_STORAGE_KEYS.FAVOURITES) || '') || [];
