import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./components/router.tsx";
import { FormProvider } from "./contexts/FormContext.tsx";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import { theme } from "../themes";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <FormProvider>
        <RouterProvider router={router} />
      </FormProvider>
    </ThemeProvider>
    <GlobalStyle />
  </React.StrictMode>
);
