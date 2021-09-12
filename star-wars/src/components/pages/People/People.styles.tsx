import styled from 'styled-components';
import { Paper, TableContainer, TextField } from '@material-ui/core';
import BREAKPOINTS from '../../../const/breakpoints';

export const StyledTableContainer = styled(TableContainer)`
  height: 300px;

  @media only screen and ${BREAKPOINTS.device.sm} {
    height: 650px;
  }
`;

export const StyledPaper = styled(Paper)`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 960px;
`;

export const StyledTextField = styled(TextField)`
  &.MuiTextField-root {
    margin: 5px 10px;

    @media only screen and ${BREAKPOINTS.device.sm} {
      align-self: flex-start;
    }
  }
`;
