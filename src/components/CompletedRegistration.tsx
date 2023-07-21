import { styled } from "styled-components";

export function CompletedRegistration() {
  return (
    <StyledCompletedRegistration>
      <h1>Cadastro Finalizado com sucesso!</h1>
    </StyledCompletedRegistration>
  );
}

const StyledCompletedRegistration = styled.div`
  background-color: ${({ theme }) => theme.colors.darkBlueSecondary};
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  & h1 {
    margin: 0;
    color: ${({ theme }) => theme.colors.white};
  }
`;
