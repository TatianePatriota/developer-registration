import { ReactNode } from "react";
import {
  StyledArea,
  StyledContainer,
  StyledPage,
  StyledSidebar,
  StyledSteps,
} from "./StyledTheme";
import { Header } from "./Header";
import { IconsName, SidebarItem } from "./SidebarItem";
import { useForm } from "../contexts/FormContext";

type ThemeProps = {
  children: ReactNode;
};

export function ThemeComponent({ children }: ThemeProps) {
  const { state } = useForm();

  return (
    <StyledContainer>
      <StyledArea>
        <Header />
        <StyledSteps>
          <StyledSidebar>
            <SidebarItem
              title="Pessoal"
              description="Se identifique"
              iconName={IconsName.Profile}
              path="/"
              active={state.currentStep === 1}
            />
            <SidebarItem
              title="Profissional"
              description="Se nível"
              iconName={IconsName.Book}
              path="/step2"
              active={state.currentStep === 0}
            />
            <SidebarItem
              title="Contatos"
              description="Como te achar"
              iconName={IconsName.Email}
              path="/step3"
              active={state.currentStep === 3}
            />
          </StyledSidebar>
          <StyledPage>{children}</StyledPage>
        </StyledSteps>
      </StyledArea>
    </StyledContainer>
  );
}
