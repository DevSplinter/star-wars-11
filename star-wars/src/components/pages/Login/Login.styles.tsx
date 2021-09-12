import styled from 'styled-components';
import { Card } from '@material-ui/core';
import BREAKPOINTS from '../../../const/breakpoints';

export const LoginWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;

  @media only screen and ${BREAKPOINTS.device.sm} {
    align-items: center;
  }
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  min-height: 250px;

  @media only screen and ${BREAKPOINTS.device.sm} {
    align-items: flex-end;
  }
`;

export const StyledCard = styled(Card)`
  padding: 10px;
  width: 100%;
  max-width: 650px;
`;

export const Header = styled.h1`
  margin: 10px 0;
`;
