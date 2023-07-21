import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FormActions, useForm } from "../contexts/FormContext";
import { ThemeComponent } from "../components/ThemeComponent";
import { StyledContainer } from "../components/StyledForm";
import { SelectOptions } from "../components/SelectOptions";
import { Link } from "react-router-dom";

export function SecondForm() {
  const history = useNavigate();
  const { state, dispatch } = useForm();

  useEffect(() => {
    if (state.name === "") {
      history("/");
    } else {
      dispatch({
        type: FormActions.setStep,
        payload: 2,
      });
    }
  }, []);

  function handleNextStep() {
    if (state.name !== "") {
      history("/step3");
    }
  }

  function setLevel(level: number) {
    dispatch({
      type: FormActions.setLevel,
      payload: level,
    });
  }

  return (
    <ThemeComponent>
      <StyledContainer>
        <div>
          <p>Passo 2/3 </p>
          <h1>{state.name}, o que melhor descreve você?</h1>
          <h3>
            Escolha a opção que melhor se encaixa com você profissionalmente.
          </h3>
          <SelectOptions
            title="Iniciante"
            description="Comecei a programa há menos de 2 anos"
            icon="😊"
            selected={state.level === 0}
            onClick={() => setLevel(0)}
          />
          <SelectOptions
            title="Avançado"
            description="Já programo a mais de 2 anos"
            icon="😎"
            selected={state.level === 1}
            onClick={() => setLevel(1)}
          />

          <Link className="backButton" to="/">
            Voltar
          </Link>
          <button onClick={handleNextStep}>Próximo</button>
        </div>
      </StyledContainer>
    </ThemeComponent>
  );
}
