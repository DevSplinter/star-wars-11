import { useEffect, useState } from 'react';
import { IPeople } from '../../../types/types';
import {
  fetchPeople,
  fetchPeopleSearchResult,
} from '../../../services/peopleService';
import { extractPersonId } from './People.utils';

export const useFetchPeople = () => {
  const [people, setPeople] = useState<IPeople>();
  const [arePeopleLoading, setPeopleLoading] = useState(false);

  const getPeople = async (url?: string) => {
    try {
      setPeopleLoading(true);
      const people = url ? await fetchPeople(url) : await fetchPeople();
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
    } finally {
      setPeopleLoading(false);
    }
  };

  useEffect(() => {
    getPeople();
  }, []);

  return { people, getPeople, setPeople, arePeopleLoading, setPeopleLoading };
};

export const usePageChange = (
  getPeople: (url?: string) => void,
  peopleCount: number | undefined
) => {
  const [page, setPage] = useState(0);
  const handlePageChange = (newPage: number, people: IPeople | undefined) => {
    if (newPage > page) {
      people?.next && getPeople(people.next);
    } else {
      people?.previous && getPeople(people.previous);
    }
    setPage(newPage);
  };

  useEffect(() => {
    setPage(0);
  }, [peopleCount]);

  return { page, handlePageChange };
};

export const useSearch = (
  setPeople: (people: IPeople) => void,
  getPeople: (url?: string) => void,
  setPeopleLoading: (isLoading: boolean) => void
) => {
  const [searchText, setSearchText] = useState('');

  const getSearchResult = async () => {
    try {
      if (searchText !== '') {
        setPeopleLoading(true);
        const searchResponse = await fetchPeopleSearchResult(searchText);
        const searchResponseWithIds = {
          ...searchResponse,
          results: searchResponse.results.map((person) => ({
            ...person,
            id: extractPersonId(person.url),
          })),
        } as IPeople;

        setPeople(searchResponseWithIds);
      } else {
        getPeople();
      }
    } catch (error) {
      console.error(error);
    } finally {
      setPeopleLoading(false);
    }
  };

  useEffect(() => {
    const timeout = setTimeout(getSearchResult, 400);

    return () => clearTimeout(timeout);
  }, [searchText]);

  return { searchText, setSearchText };
};
