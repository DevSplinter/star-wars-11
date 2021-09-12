import styled from 'styled-components';
import BREAKPOINTS from '../../const/breakpoints';

export const LayoutWrapper = styled.div`
  text-align: center;
  height: 100%;
  overflow: auto;
  ${({ theme }) => `
    background-color: ${theme.palette.background.default};
    color: ${theme.palette.text.primary}
  `}
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const Header = styled.div`
  margin: 10px;
  display: flex;
  flex-direction: column-reverse;

  @media only screen and ${BREAKPOINTS.device.sm} {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
  }
`;

export const Logo = styled.div`
  height: 150px;

  @media only screen and ${BREAKPOINTS.device.xs} {
    height: 200px;
  }

  @media only screen and ${BREAKPOINTS.device.sm} {
    height: 90px;
  }
`;

export const StyledImg = styled.img`
  width: 100%;
  height: 100%;
`;

export const Content = styled.div`
  flex: 1 1 auto;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  
  @media only screen and ${BREAKPOINTS.device.sm} {
    align-items: center;
  }
`;
