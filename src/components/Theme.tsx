import { ReactNode } from "react";
import {
  StyledArea,
  StyledContainer,
  StyledPage,
  StyledSidebar,
  StyledSteps,
} from "./StyledTheme";
import { Header } from "./Header";

type ThemeProps = {
  children: ReactNode;
};

export function Theme({ children }: ThemeProps) {
  return (
    <StyledContainer>
      <StyledArea>
        <Header />
        <StyledSteps>
          <StyledSidebar>....</StyledSidebar>
          <StyledPage>{children}</StyledPage>
        </StyledSteps>
      </StyledArea>
    </StyledContainer>
  );
}
