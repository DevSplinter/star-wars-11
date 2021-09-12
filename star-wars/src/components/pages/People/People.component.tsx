import React from 'react';
import { useHistory } from 'react-router-dom';
import { useFetchPeople, usePageChange, useSearch } from './People.hooks';
import {
  CircularProgress,
  Hidden,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
} from '@material-ui/core';
import Favourite from '../../atoms/Favourite';
import { useFavourites } from '../../../hooks/useFavourites';
import { PATHS } from '../../../const/paths';
import {
  StyledTableContainer,
  StyledPaper,
  StyledTextField,
  LoadingWrapper,
} from './People.styles';

const People: React.FC = () => {
  const { people, getPeople, setPeople, arePeopleLoading, setPeopleLoading } =
    useFetchPeople();
  const { page, handlePageChange } = usePageChange(getPeople, people?.count);
  const { isFavourite, updateFavourites } = useFavourites();
  const { searchText, setSearchText } = useSearch(
    setPeople,
    getPeople,
    setPeopleLoading
  );
  const history = useHistory();

  return (
    <StyledPaper>
      <StyledTextField
        label="Search"
        placeholder="Search by name"
        variant="outlined"
        value={searchText}
        onChange={(event) => setSearchText(event.target.value)}
      />
      <StyledTableContainer>
        {arePeopleLoading ? (
          <LoadingWrapper>
            <CircularProgress color="secondary" />
          </LoadingWrapper>
        ) : (
          <Table stickyHeader>
            <TableHead>
              <TableRow>
                <TableCell align="center">Name</TableCell>
                <TableCell align="center">Birth Year</TableCell>
                <Hidden xsDown>
                  <TableCell align="center">Height</TableCell>
                </Hidden>
                <TableCell align="center">Favourite</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {people?.results?.map((person) => (
                <TableRow
                  hover
                  key={person.url}
                  onClick={() =>
                    history.push(`${PATHS.CHARACTERS}/${person.id}`)
                  }
                >
                  <TableCell align="center">{person.name}</TableCell>
                  <TableCell align="center">{person.birth_year}</TableCell>
                  <Hidden xsDown>
                    <TableCell align="center">{person.height}</TableCell>
                  </Hidden>
                  <TableCell align="center">
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
        )}
      </StyledTableContainer>
      <TablePagination
        component="div"
        count={people?.count || 0}
        page={page}
        onPageChange={(_event, newPage) => handlePageChange(newPage, people)}
        rowsPerPage={10}
        rowsPerPageOptions={[10]}
      />
    </StyledPaper>
  );
};

export default People;
