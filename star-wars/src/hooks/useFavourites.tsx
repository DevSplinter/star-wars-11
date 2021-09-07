import { useState } from 'react';
import { setLocalStorageItem } from '../utils/localStorage';
import { LOCAL_STORAGE_KEYS } from '../const/localStorageKeys';
import { getFavourites } from '../utils/favourites';

export const useFavourites = () => {
  const [favourites, setFavourites] = useState(getFavourites());

  const updateFavourites = (personId: string) => {
    const favouriteList = favourites.includes(personId)
      ? favourites.filter((favourite) => favourite !== personId)
      : [...favourites, personId];

    setFavourites(favouriteList);
    setLocalStorageItem(
      LOCAL_STORAGE_KEYS.FAVOURITES,
      JSON.stringify(favouriteList)
    );
  };

  const isFavourite = (personId: string) => favourites.includes(personId);

  return { updateFavourites, isFavourite };
};
