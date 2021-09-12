import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useFetchFilms, useFetchPerson } from './Person.hooks';
import {
  Header,
  HeaderTitle,
  ContentWrapper,
  StyledPaper,
  StyledUl,
  ListItem,
  SubHeader,
  StyledImg,
  StyledIconButton,
} from './Person.styles';
import { CircularProgress, Hidden } from '@material-ui/core';
import Favourite from '../../atoms/Favourite';
import { useFavourites } from '../../../hooks/useFavourites';
import backButton from '../../../assets/backButton.svg';

type ParamsType = {
  id: string;
};

const Person: React.FC = () => {
  const { id } = useParams<ParamsType>();
  const { person, isPersonLoading } = useFetchPerson(id);
  const { filmsTitles } = useFetchFilms(person?.films || []);
  const { isFavourite, updateFavourites } = useFavourites();
  const history = useHistory();

  const handleBack = () => {
    history.goBack();
  };

  return (
    <StyledPaper>
      {isPersonLoading ? (
        <CircularProgress color="secondary" style={{ alignSelf: 'center' }} />
      ) : (
        <>
          <Header>
            <StyledIconButton size="small" onClick={handleBack}>
              <StyledImg src={backButton} alt="" />
            </StyledIconButton>
            <HeaderTitle>{person?.name}</HeaderTitle>
            <Favourite
              personId={id}
              updateFavourite={updateFavourites}
              isFavourite={isFavourite}
              isLarge
            />
          </Header>
          <ContentWrapper>
            <div>
              <SubHeader>Character details:</SubHeader>
              <StyledUl>
                <ListItem>birth year: {person?.birth_year}</ListItem>
                <ListItem>gender: {person?.gender}</ListItem>
                <ListItem>height: {person?.height}</ListItem>
                <ListItem>mass: {person?.mass}</ListItem>
                <ListItem>skin color: {person?.skin_color}</ListItem>
                <ListItem>hair color: {person?.hair_color}</ListItem>
                <ListItem>eye color: {person?.eye_color}</ListItem>
              </StyledUl>
            </div>
            <Hidden smDown>
              <div>
                <SubHeader>Films:</SubHeader>
                <StyledUl>
                  {filmsTitles?.map((title) => (
                    <ListItem key={title}>{title}</ListItem>
                  ))}
                </StyledUl>
              </div>
            </Hidden>
          </ContentWrapper>
        </>
      )}
    </StyledPaper>
  );
};

export default Person;
