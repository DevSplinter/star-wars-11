import React from 'react';
import { useFetchPeople, usePageChange } from './People.hooks';
import {
  Hidden,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
} from '@material-ui/core';
import Favourite from '../../atoms/Favourite';
import { useFavourites } from '../../../hooks/useFavourites';

interface PeopleProps {}

const People: React.FC<PeopleProps> = ({}) => {
  const { people, getPeople } = useFetchPeople();
  const { page, handlePageChange } = usePageChange(getPeople);
  const { isFavourite, updateFavourites } = useFavourites();

  return (
    <Paper>
      <TableContainer>
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Birth Year</TableCell>
              <TableCell>Height</TableCell>
              <Hidden mdDown>
                <TableCell>Favourite</TableCell>
              </Hidden>
            </TableRow>
          </TableHead>
          <TableBody>
            {people?.results?.map((person) => (
              <TableRow hover key={person.url}>
                <TableCell>{person.name}</TableCell>
                <TableCell>{person.birth_year}</TableCell>
                <TableCell>{person.height}</TableCell>
                <Hidden mdDown>
                  <TableCell>
                    <Favourite
                      personId={person.id}
                      updateFavourite={updateFavourites}
                      isFavourite={isFavourite}
                    />
                  </TableCell>
                </Hidden>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        count={people?.count || 0}
        page={page}
        onPageChange={handlePageChange}
        rowsPerPage={10}
        rowsPerPageOptions={[10]}
      />
    </Paper>
  );
};

export default People;
