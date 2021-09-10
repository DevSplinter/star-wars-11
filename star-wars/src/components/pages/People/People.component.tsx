import React from 'react';
import { useHistory } from 'react-router-dom';
import { useFetchPeople, usePageChange, useSearch } from './People.hooks';
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  TextField,
} from '@material-ui/core';
import Favourite from '../../atoms/Favourite';
import { useFavourites } from '../../../hooks/useFavourites';
import { PATHS } from '../../../const/paths';

interface PeopleProps {}

const People: React.FC<PeopleProps> = ({}) => {
  const { people, getPeople, setPeople } = useFetchPeople();
  const { page, handlePageChange } = usePageChange(getPeople, people?.count);
  const { isFavourite, updateFavourites } = useFavourites();
  const { searchText, setSearchText } = useSearch(setPeople);
  const history = useHistory();

  return (
    <Paper>
      <TextField
        label="Search"
        variant="outlined"
        value={searchText}
        onChange={(event) => setSearchText(event.target.value)}
      />
      <TableContainer>
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Birth Year</TableCell>
              <TableCell>Height</TableCell>
              <TableCell>Favourite</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {people?.results?.map((person) => (
              <TableRow
                hover
                key={person.url}
                onClick={() => history.push(`${PATHS.CHARACTERS}/${person.id}`)}
              >
                <TableCell>{person.name}</TableCell>
                <TableCell>{person.birth_year}</TableCell>
                <TableCell>{person.height}</TableCell>
                <TableCell>
                  <Favourite
                    personId={person.id}
                    updateFavourite={updateFavourites}
                    isFavourite={isFavourite}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        component="div"
        count={people?.count || 0}
        page={page}
        onPageChange={(_event, newPage) => handlePageChange(newPage, people)}
        rowsPerPage={10}
        rowsPerPageOptions={[10]}
      />
    </Paper>
  );
};

export default People;
