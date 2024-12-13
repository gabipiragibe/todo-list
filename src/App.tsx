import { GlobalStyle } from "./styles/global";
import { ThemeProvider } from "styled-components";
import { Home } from "./pages/Home";
import { defaultTheme } from "./styles/themes/default";

export const App = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Home />
      <GlobalStyle />
    </ThemeProvider>
  );
};
