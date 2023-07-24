import { styled } from "styled-components";

export const StyledSidebarItem = styled.div`
  margin: 30px 0;
  cursor: pointer;

  & a {
    display: flex;
    align-items: center;
    text-decoration: none;
  }
`;

export const StyledInfo = styled.div`
  flex: 1;
  margin-right: 20px;
`;

export const StyledTitle = styled.div`
  color: ${({ theme }) => theme.colors.white};
  text-align: right;
  font-weight: 700;
  margin-bottom: 5px;
  font-size: 16px;
`;

export const StyledDescription = styled.div`
  text-align: right;
  color: ${({ theme }) => theme.colors.lightGrey};
  font-size: 14px;
`;

export const StyledIconArea = styled.div<{ active: boolean }>`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: ${({ theme, active }) =>
    active ? theme.colors.green : theme.colors.darkGrey};
  display: flex;
  display: flex;
  justify-content: center;
  align-items: center;

  & svg {
    width: 25px;
    height: 25px;
    fill: ${({ theme }) => theme.colors.white};
  }
`;

export const StyledPoint = styled.div<{ active: boolean }>`
  width: 8px;
  height: 8px;
  border: 3px solid ${({ theme }) => theme.colors.darkGrey};
  border-radius: 50%;
  margin-left: 30px;
  margin-right: -8px;
  background-color: ${({ theme, active }) =>
    active ? theme.colors.green : theme.colors.darkGrey};
`;
