import { styled } from "styled-components";

export const StyledContainer = styled.div`
  padding: 25px 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.darkBluePrimary};

  & h1 {
    margin: 0;
    padding: 0;
    font-size: 28px;
  }

  & p {
    font-size: 14px;
    color: ${({ theme }) => theme.colors.lightBlue};
  }
`;
