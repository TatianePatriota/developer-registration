import { styled } from "styled-components";

export const StyledContainer = styled.div`
  & h3 {
    font-size: 13px;
    color: ${({ theme }) => theme.colors.lightBlue};
    padding-bottom: 30px;
    border-bottom: 1px solid ${({ theme }) => theme.colors.darkBluePrimary};
  }

  & h1 {
    margin: 0;
    padding: 0;
    font-size: 26px;
  }

  & h5 {
    display: none;
    color: red;
    margin: 5px 0;
  }

  & label {
    font-size: 15px;
  }

  & input {
    margin-bottom: 20px;
    margin-top: 7px;
    display: block;
    box-sizing: border-box;
    width: 100%;
    padding: 20px 10px;
    border: 2px solid ${({ theme }) => theme.colors.green};
    border-radius: 10px;
    color: ${({ theme }) => theme.colors.white};
    font-size: 15px;
    background-color: ${({ theme }) => theme.colors.darkBlueSecondary};
    outline: none;
  }

  & button {
    background-color: ${({ theme }) => theme.colors.green};
    border: none;
    font-weight: 700;
    font-size: 14px;
    padding: 20px 40px;
    border-radius: 25px;
    color: ${({ theme }) => theme.colors.white};
    cursor: pointer;
    margin-top: 20px;
  }

  & .backButton {
    font-size: 16px;
    text-decoration: none;
    padding: 20px 40px;
    color: ${({ theme }) => theme.colors.black};
    background-color: ${({ theme }) => theme.colors.lightGrey};
    border-radius: 25px;
    font-weight: 700;
    margin-right: 30px;
  }
`;
