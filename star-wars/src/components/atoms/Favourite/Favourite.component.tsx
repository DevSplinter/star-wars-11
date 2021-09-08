import React from 'react';
import { FavouriteWrapper } from './Favourite.styles';

interface FavouriteProps {
  updateFavourite: (personId: string) => void;
  isFavourite: (personId: string) => boolean;
  personId: string;
}

const Favourite: React.FC<FavouriteProps> = ({
  updateFavourite,
  isFavourite,
  personId,
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
      {isFavourite(personId) ? <div>favourite</div> : <div>not favourite</div>}
    </FavouriteWrapper>
  );
};

export default Favourite;
