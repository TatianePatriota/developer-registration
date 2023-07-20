import { styled } from "styled-components";

export const StyledContainerOptions = styled.div<{ selected: boolean }>`
  display: flex;
  border: 2px solid
    ${({ theme, selected }) => {
      if (selected) {
        return theme.colors.green;
      }
      return theme.colors.darkBluePrimary;
    }};
  border-radius: 10px;
  padding: 20px;
  margin-bottom: 15px;
  align-items: center;
  cursor: pointer;

  &:hover {
    border: 2px solid ${({ theme }) => theme.colors.lightGreen};
  }
`;

export const StyledIcon = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.darkBluePrimary};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
`;

export const StyledTitle = styled.div`
  font-size: 17px;
  font-weight: 700;
  margin-bottom: 7px;
`;

export const StyledInfo = styled.div`
  flex: 1;
  margin-left: 20px;
`;

export const StyledDescription = styled.div`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.lightGrey};
`;
