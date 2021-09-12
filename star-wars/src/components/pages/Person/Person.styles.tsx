import styled from 'styled-components';
import BREAKPOINTS from '../../../const/breakpoints';
import { IconButton, Paper } from '@material-ui/core';

export const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const HeaderTitle = styled.h1`
  margin: 10px;

  @media only screen and ${BREAKPOINTS.device.sm} {
    margin: 10px 20px;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const StyledPaper = styled(Paper)`
  position: relative;
  width: 100%;
  padding: 30px 0;
  max-width: 650px;
`;

export const SubHeader = styled.h2`
  @media only screen and ${BREAKPOINTS.device.md} {
    text-align: left;
  }
`;

export const StyledUl = styled.ul`
  list-style: none;
  padding: 0;

  @media only screen and ${BREAKPOINTS.device.md} {
    text-align: left;
  }
`;

export const ListItem = styled.li`
  margin: 8px 0;
`;

export const StyledImg = styled.img`
  width: 30px;
  height: 30px;
`;

export const StyledIconButton = styled(IconButton)`
  &.MuiIconButton-root {
    position: absolute;
    top: 5px;
    left: 5px;
  }
`;
