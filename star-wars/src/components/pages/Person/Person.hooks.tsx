import { useEffect, useState } from 'react';
import { IPerson } from '../../../types/types';
import { fetchPerson } from '../../../services/peopleService';
import { useHistory } from 'react-router-dom';
import { fetchFilm } from '../../../services/filmsService';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import BREAKPOINTS from '../../../const/breakpoints';

export const useFetchPerson = (id: string) => {
  const [person, setPerson] = useState<IPerson>();
  const history = useHistory();

  const getPerson = async (id: string) => {
    try {
      const person = await fetchPerson(Number(id));
      const personWithId = { ...person, id } as IPerson;
      setPerson(personWithId);
    } catch (error) {
      history.push(`/not-found`);
    }
  };
  useEffect(() => {
    getPerson(id);
  }, []);

  return person;
};

export const useFetchFilms = (films: string[]) => {
  const [filmsTitles, setFilmsTitles] = useState<string[]>();
  const matches = useMediaQuery(BREAKPOINTS.device.md);

  const getFilms = async () => {
    try {
      if (matches) {
        const filmsList = await Promise.all(
          films.map((film) => fetchFilm(film))
        );
        const extractedFilmsTitles = filmsList.map(({ title }) => title);

        setFilmsTitles(extractedFilmsTitles);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getFilms();
  }, [films, matches]);
  return filmsTitles;
};
