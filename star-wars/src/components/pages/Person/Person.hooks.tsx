import { useCallback, useEffect, useState } from 'react';
import { IPerson } from '../../../types/types';
import { fetchPerson } from '../../../services/peopleService';
import { useHistory } from 'react-router-dom';
import { fetchFilm } from '../../../services/filmsService';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import BREAKPOINTS from '../../../const/breakpoints';

export const useFetchPerson = (id: string) => {
  const [person, setPerson] = useState<IPerson>();
  const [isPersonLoading, setPersonLoading] = useState(false);
  const history = useHistory();

  const getPerson = useCallback(
    async (id: string) => {
      try {
        setPersonLoading(true);
        const person = await fetchPerson(Number(id));
        const personWithId = { ...person, id } as IPerson;
        setPerson(personWithId);
      } catch (error) {
        history.push(`/not-found`);
      } finally {
        setPersonLoading(false);
      }
    },
    [history]
  );

  useEffect(() => {
    getPerson(id);
  }, [getPerson, id]);

  return { person, isPersonLoading };
};

export const useFetchFilms = (films: string[]) => {
  const [filmsTitles, setFilmsTitles] = useState<string[]>();
  const matches = useMediaQuery(BREAKPOINTS.device.md);

  const getFilms = useCallback(async () => {
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
  }, [matches, films]);

  useEffect(() => {
    getFilms();
  }, [films, matches, getFilms]);
  return { filmsTitles };
};
