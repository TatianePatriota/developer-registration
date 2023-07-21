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

type ThemeProps = {
  children: ReactNode;
};

export function ThemeComponent({ children }: ThemeProps) {
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
            />
            <SidebarItem
              title="Profissional"
              description="Se nível"
              iconName={IconsName.Book}
              path="/step2"
            />
            <SidebarItem
              title="Contatos"
              description="Como te achar"
              iconName={IconsName.Email}
              path="/step3"
            />
          </StyledSidebar>
          <StyledPage>{children}</StyledPage>
        </StyledSteps>
      </StyledArea>
    </StyledContainer>
  );
}
