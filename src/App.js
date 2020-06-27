import React from 'react';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/home/Home';
import Work from './pages/Work';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path='/' component={Home} />
        <Route exact path='/about' component={About} />
        <Route exact path='/contact' component={Contact} />
        <Route exact path='/work' component={Work} />
      </div>
    </Router>
    
  );
}

export default App;
