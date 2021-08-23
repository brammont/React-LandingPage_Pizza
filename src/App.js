import Hero from './components/Hero'
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { GlobalStyle } from './globalStyles'
function App() {
  return (
    <Router>
        <GlobalStyle/>
        <Hero/>
    </Router>
      
  );
}

export default App;
