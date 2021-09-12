import React from 'react';
import { FavouriteWrapper, StyledImg } from './Favourite.styles';
import filledHeart from '../../../assets/filledHeart.svg';
import emptyHeart from '../../../assets/emptyHeart.svg';

interface FavouriteProps {
  updateFavourite: (personId: string) => void;
  isFavourite: (personId: string) => boolean;
  personId: string;
  isLarge?: boolean;
}

const Favourite: React.FC<FavouriteProps> = ({
  updateFavourite,
  isFavourite,
  personId,
  isLarge,
}) => {
  const handleOnClick = (
    event: React.MouseEvent<HTMLElement>,
    personId: string
  ) => {
    event.stopPropagation();
    updateFavourite(personId);
  };

  return (
    <FavouriteWrapper onClick={(event) => handleOnClick(event, personId)}>
      {isFavourite(personId) ? (
        <div>
          <StyledImg src={filledHeart} alt="heart" isLarge={isLarge} />
        </div>
      ) : (
        <div>
          <StyledImg src={emptyHeart} alt="heart" isLarge={isLarge} />
        </div>
      )}
    </FavouriteWrapper>
  );
};

export default Favourite;
