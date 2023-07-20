import { styled } from "styled-components";

export const StyledContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.darkBlueSecondary};
  color: ${({ theme }) => theme.colors.white};
  min-height: 100vh;
`;

export const StyledArea = styled.div`
  margin: auto;
  max-width: 980px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const StyledSteps = styled.div`
  flex: 1;
  display: flex;
`;

export const StyledSidebar = styled.div`
  width: 250px;
  border-right: 1px solid ${({ theme }) => theme.colors.darkBluePrimary};
`;

export const StyledPage = styled.div`
  flex: 1;
  padding-left: 40px;
  padding-top: 40px;
`;
