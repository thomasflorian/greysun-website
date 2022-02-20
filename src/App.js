import './App.css';
// import {BrowserRouter as Router} from 'react-router-dom'
// import {ThemeProvider, createMuiTheme, responsiveFontSizes} from '@material-ui/core/styles'
// import NavComponent from './components/NavComponent'
// import ContentComponent from './components/ContentComponent'
// import FooterComponent from './components/FooterComponent'
import React, { useState } from 'react'
// import { AuthProvider } from './contexts/AuthContext';

// const theme = responsiveFontSizes(createMuiTheme({
//   typography: {
//     fontFamily: "Montserrat"
//   },
//   palette: {
//     primary: {
//       main: "#df731a"
//     },
//     secondary: {
//       main: "#111111"
//     }
//   }
// }))

function App() {

  // Redirect to new website
  window.location.replace("https://www.greysuntechnologies.com");

  const [isMobileView, setIsMobileView] = useState(window.innerWidth < 960);
  window.addEventListener('resize', () => {setIsMobileView(window.innerWidth < 960)});

  return (
    <React.StrictMode>
      {/* <Router>
        <ThemeProvider theme={theme}>
          <AuthProvider>
            <NavComponent isMobileView={isMobileView} />
            <ContentComponent isMobileView={isMobileView} />
            <FooterComponent isMobileView={isMobileView} />
          </AuthProvider>
        </ThemeProvider>
      </Router> */}
    </React.StrictMode>
  );
}

export default App
