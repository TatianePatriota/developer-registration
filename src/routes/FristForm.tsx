import { useNavigate } from "react-router-dom";
import { ThemeComponent } from "../components/ThemeComponent";
import { StyledContainer } from "../components/StyledForm";
import { FormActions, useForm } from "../contexts/FormContext";
import { ChangeEvent, useEffect } from "react";

export function FristForm() {
  const alertInput: HTMLElement | null = document.getElementById("alertText");
  const history = useNavigate();
  const { state, dispatch } = useForm();

  useEffect(() => {
    dispatch({
      type: FormActions.setStep,
      payload: 1,
    });
  }, []);

  function handleNextStep() {
    if (state.name !== "") {
      history("/step2");
    } else if (alertInput) {
      alertInput.style.display = "block";
    }
  }

  function handleNameChange(e: ChangeEvent<HTMLInputElement>) {
    dispatch({
      type: FormActions.setName,
      payload: e.target.value,
    });
  }

  return (
    <ThemeComponent>
      <StyledContainer>
        <div>
          <p>Passo 1/3 </p>
          <h1>Digite o seu nome</h1>
          <h3>Preencha o campo abaixo com seu nome completo</h3>

          <label htmlFor="name">Nome Completo</label>
          <input
            type="text"
            name="name"
            autoFocus
            onChange={handleNameChange}
          />
          <h5 id="alertText">Você deve inserir seu nome</h5>
          <button onClick={handleNextStep}>Próximo</button>
        </div>
      </StyledContainer>
    </ThemeComponent>
  );
}
