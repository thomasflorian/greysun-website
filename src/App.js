import './App.css';
import {BrowserRouter as Router} from 'react-router-dom'
import {ThemeProvider, createMuiTheme} from '@material-ui/core/styles'

import NavComponent from './components/NavComponent'
import Content from './components/Content'
import FooterComponent from './components/FooterComponent'
import React from 'react'

const theme = createMuiTheme({
  typography: {
    fontFamily: "Montserrat"
  },
  palette: {
    primary: {
      main: "#df731a"
    },
    secondary: {
      main: "#111111"
    }
  }
})

function App() {
  return (
    <React.StrictMode>
      <Router>
        <ThemeProvider theme={theme}>
          <NavComponent />
          <Content />
          <FooterComponent />
        </ThemeProvider>
      </Router>
    </React.StrictMode>
  );
}

export default App
