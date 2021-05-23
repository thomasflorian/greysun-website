import './App.css';
import {BrowserRouter as Router} from 'react-router-dom'

import NavComponent from './components/NavComponent'
import Content from './components/Content'
import FooterComponent from './components/FooterComponent'

function App() {
  return (
    <Router>
      <NavComponent />
      <Content />
      <FooterComponent />
    </Router>
  );
}

export default App;
