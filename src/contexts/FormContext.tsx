import { createContext, useReducer, useContext, ReactNode } from "react";

const FormContext = createContext<ContextType | undefined>(undefined);

type StateType = {
  currentStep: number;
  name: string;
  level: 0 | 1;
  email: string;
  github: string;
};

type ActionType = {
  type: FormActions;
  payload: any;
};

type ContextType = {
  state: StateType;
  dispatch: (action: ActionType) => void;
};

type FormProviderProps = {
  children: ReactNode;
};

const initialData: StateType = {
  currentStep: 0,
  name: "",
  level: 0,
  email: "",
  github: "",
};

export enum FormActions {
  setStep,
  setName,
  setLevel,
  setEmail,
  setGithub,
}

export const formReducer = (state: StateType, action: ActionType) => {
  switch (action.type) {
    case FormActions.setStep:
      return { ...state, currentStep: action.payload };
    case FormActions.setName:
      return { ...state, name: action.payload };
    case FormActions.setLevel:
      return { ...state, level: action.payload };
    case FormActions.setEmail:
      return { ...state, email: action.payload };
    case FormActions.setGithub:
      return { ...state, github: action.payload };
    default:
      return state;
  }
};

export const FormProvider = ({ children }: FormProviderProps) => {
  const [state, dispatch] = useReducer(formReducer, initialData);
  const value = { state, dispatch };
  return <FormContext.Provider value={value}>{children}</FormContext.Provider>;
};

export const useForm = () => {
  const context = useContext(FormContext);
  if (context === undefined) {
    throw new Error("O useForm precisa ser usado dentro do FormProvider");
  }
  return context;
};
