import styled from 'styled-components';

export const LayoutWrapper = styled.div`
  ${({ theme }) => `
    background-color: ${theme.palette.background.default};
    color: ${theme.palette.text.primary}
  `}
`;
