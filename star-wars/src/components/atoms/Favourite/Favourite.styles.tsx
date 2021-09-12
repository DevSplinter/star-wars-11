import styled from 'styled-components';
import BREAKPOINTS from '../../../const/breakpoints';

export const FavouriteWrapper = styled.div`
  cursor: pointer;
`;

export const StyledImg = styled.img<{ isLarge?: boolean }>`
  ${({ isLarge }) =>
    isLarge
      ? `width: 30px; height: 30px;`
      : `width: 15px;
        height: 15px;`}

  @media only screen and ${BREAKPOINTS.device.sm} {
    ${({ isLarge }) =>
      isLarge
        ? `width: 35px; height: 35px;`
        : `width: 20px;
        height: 20px;`}
  }
`;
