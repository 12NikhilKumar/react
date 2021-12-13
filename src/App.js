import './App.css';
import React from "react"
import Form from './MaterialuiComponent/form';
import { ThemeProvider, createTheme, styled } from '@mui/material/styles';
import blue from "@mui/material/colors/blue";
import red from "@mui/material/colors/red";
function App() {
  const theme = createTheme({
    palette : {
      primary : blue
    }
  })
  const darkTheme = createTheme({
    palette : {
      primary : red,
      secondary : blue
    }
  })
  return (
    <div className = "App App-header">
      <ThemeProvider theme={darkTheme}>
        <Form/>
      </ThemeProvider>
    </div>
  );
}
export default App;
