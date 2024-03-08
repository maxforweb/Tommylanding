import Landing from "./Landing";
import "./App.css";
import { ThemeProvider } from "@emotion/react";
import { theme } from "./theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="wrapper">
        <Landing />
      </div>
    </ThemeProvider>
  );
}

export default App;
