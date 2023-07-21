import { Link, useNavigate } from "react-router-dom";
import { ThemeComponent } from "../components/ThemeComponent";
import { StyledContainer } from "../components/StyledForm";
import { FormActions, useForm } from "../contexts/FormContext";
import { ChangeEvent, useEffect } from "react";

export function ThirdForm() {
  const alertInput: HTMLElement | null = document.getElementById("alertText");
  const history = useNavigate();
  const { state, dispatch } = useForm();

  useEffect(() => {
    if (state.name === "") {
      history("/");
    } else {
      dispatch({
        type: FormActions.setStep,
        payload: 3,
      });
    }
  }, []);

  function handleNextStep() {
    if (state.email && state.github !== "") {
      history("/step4");
    } else if (alertInput) {
      alertInput.style.display = "block";
    }
  }

  function handleEmailChange(e: ChangeEvent<HTMLInputElement>) {
    dispatch({
      type: FormActions.setEmail,
      payload: e.target.value,
    });
  }

  function handleGithubChange(e: ChangeEvent<HTMLInputElement>) {
    dispatch({
      type: FormActions.setGithub,
      payload: e.target.value,
    });
  }

  return (
    <ThemeComponent>
      <StyledContainer>
        <div>
          <p>Passo 3/3 </p>
          <h1>{state.name}, onde podemos te encontrar?</h1>
          <h3>Preencha seus dados e seja visto pela comunidade.</h3>

          <label htmlFor="email">E-mail</label>
          <input
            type="email"
            name="email"
            value={state.email}
            onChange={handleEmailChange}
          />

          <label htmlFor="github">GitHub</label>
          <input
            type="url"
            name="github"
            value={state.github}
            onChange={handleGithubChange}
          />

          <h5 id="alertText">Você deve inserir seus dados</h5>
          <Link className="backButton" to="/step2">
            Voltar
          </Link>
          <button onClick={handleNextStep}>Finalizar</button>
        </div>
      </StyledContainer>
    </ThemeComponent>
  );
}
