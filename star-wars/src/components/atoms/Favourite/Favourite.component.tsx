import React from 'react';

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
  return (
    <div onClick={() => updateFavourite(personId)}>
      {isFavourite(personId) ? <div>favourite</div> : <div>not favourite</div>}
    </div>
  );
};

export default Favourite;
