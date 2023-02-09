import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import App from "./App";
import "./index.css";
import MyProvider, { ThemeContext } from "./ThemeContext";
import red from "@mui/material/colors/red";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <MyProvider>
      <ThemeContext.Consumer>
        {({ mode }) => {
          const theme = createTheme({
            palette: {
              mode,
              primary: {
                main: "#556cd6",
              },
              secondary: {
                main: "#19857b",
              },
              error: {
                main: red.A400,
              },
            },
          });
          return (
            <ThemeProvider theme={theme}>
              <CssBaseline />
              <App />
            </ThemeProvider>
          );
        }}
      </ThemeContext.Consumer>
    </MyProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
