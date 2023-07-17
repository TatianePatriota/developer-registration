import { styled } from "styled-components";

export const StyledContainerFristForm = styled.div`
  & h3 {
    font-size: 13px;
    color: #b8b8d4;
    padding-bottom: 30px;
    border-bottom: 1px solid #16195c;
  }

  & h1 {
    margin: 0;
    padding: 0;
    font-size: 26px;
  }

  & label {
    font-size: 13px;
  }

  & input {
    margin-top: 7px;
    display: block;
    box-sizing: border-box;
    width: 100%;
    padding: 20px 10px;
    border: 2px solid #25cd89;
    border-radius: 10px;
    color: #ffffff;
    font-size: 15px;
    background-color: #02044a;
    outline: none;
  }

  & button {
    background-color: #25cd89;
    border: none;
    font-weight: 700;
    font-size: 14px;
    padding: 20px 40px;
    border-radius: 25px;
    color: #ffffff;
    cursor: pointer;
    margin-top: 30px;
  }
`;
