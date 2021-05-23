import './App.css';
import {BrowserRouter as Router} from 'react-router-dom'
import {ThemeProvider, createMuiTheme, responsiveFontSizes} from '@material-ui/core/styles'

import NavComponent from './components/NavComponent'
import ContentComponent from './components/ContentComponent'
import FooterComponent from './components/FooterComponent'
import React, { useState } from 'react'

const theme = responsiveFontSizes(createMuiTheme({
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
}))

function App() {

  const [isMobileView, setIsMobileView] = useState(window.innerWidth < 960)
  window.addEventListener('resize', () => {setIsMobileView(window.innerWidth < 960)})

  return (
    <React.StrictMode>
      <Router>
        <ThemeProvider theme={theme}>
          <NavComponent isMobileView={isMobileView} />
          <ContentComponent isMobileView={isMobileView} />
          <FooterComponent isMobileView={isMobileView} />
        </ThemeProvider>
      </Router>
    </React.StrictMode>
  );
}

export default App
