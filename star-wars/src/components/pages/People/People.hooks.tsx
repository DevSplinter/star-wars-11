import React, { useEffect, useState } from 'react';
import { IPeople } from '../../../types/types';
import { fetchPeople } from '../../../services/peopleService';
import { extractPersonId } from './People.utils';

export const useFetchPeople = () => {
  const [people, setPeople] = useState<IPeople>();
  const getPeople = async (pageNumber?: number) => {
    try {
      const people = pageNumber
        ? await fetchPeople(pageNumber + 1)
        : await fetchPeople(1);
      const peopleWithIds = {
        ...people,
        results: people.results.map((person) => ({
          ...person,
          id: extractPersonId(person.url),
        })),
      } as IPeople;
      setPeople(peopleWithIds);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getPeople();
  }, []);

  return { people, getPeople };
};

export const usePageChange = (getPeople: (page: number) => void) => {
  const [page, setPage] = useState(0);
  const handlePageChange = (
    _event: React.MouseEvent<HTMLButtonElement, MouseEvent> | null,
    newPage: number
  ) => {
    setPage(newPage);
    getPeople(newPage);
  };

  return { page, handlePageChange };
};
