import React from 'react';
import { useParams } from 'react-router-dom';
import { useFetchFilms, useFetchPerson } from './Person.hooks';
import { PersonWrapper } from './Person.styles';
import { Hidden } from '@material-ui/core';
import Favourite from '../../atoms/Favourite';
import { useFavourites } from '../../../hooks/useFavourites';

interface PersonProps {}
type ParamsType = {
  id: string;
};

const Person: React.FC<PersonProps> = ({}) => {
  const { id } = useParams<ParamsType>();
  const person = useFetchPerson(id);
  const filmsTitles = useFetchFilms(person?.films || []);
  const { isFavourite, updateFavourites } = useFavourites();

  return (
    <PersonWrapper>
      <h1>
        {person?.name}
        <Favourite
          personId={id}
          updateFavourite={updateFavourites}
          isFavourite={isFavourite}
        />
      </h1>
      <h2>Character details:</h2>
      <ul>
        <li>gender: {person?.gender}</li>
        <li>height: {person?.height}</li>
        <li>mass: {person?.mass}</li>
        <li>skin color: {person?.skin_color}</li>
        <li>hair color: {person?.hair_color}</li>
      </ul>
      <Hidden mdDown>
        <h2>Films</h2>
        <ul>
          {filmsTitles?.map((title) => (
            <li key={title}>{title}</li>
          ))}
        </ul>
      </Hidden>
    </PersonWrapper>
  );
};

export default Person;
