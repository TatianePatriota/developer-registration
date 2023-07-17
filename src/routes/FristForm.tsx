import { useNavigate } from "react-router-dom";
import { Theme } from "../components/Theme";
import { StyledContainerFristForm } from "./StyledFristForm";
import { FormActions, useForm } from "../contexts/FormContext";
import { ChangeEvent } from "react";

export function FristForm() {
  const history = useNavigate();
  const { state, dispatch } = useForm();

  function handleNextStep() {
    history("/step2");
  }

  function handleNameChange(e: ChangeEvent<HTMLInputElement>) {
    dispatch({
      type: FormActions.setName,
      payload: e.target.value,
    });
  }

  return (
    <Theme>
      <StyledContainerFristForm>
        <div>
          <p>Passo 1/3 - {state.name}</p>
          <h1>Digite o seu nome</h1>
          <h3>Preencha o campo abaixo com seu nome completo</h3>

          <label htmlFor="name">Nome Completo</label>
          <input
            type="text"
            name="name"
            autoFocus
            value={state.name}
            onChange={handleNameChange}
          />
          <button onClick={handleNextStep}>Próximo</button>
        </div>
      </StyledContainerFristForm>
    </Theme>
  );
}
