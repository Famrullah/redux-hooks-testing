import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import Store from './store/store';
import Home from './pages/home/home';
import People from './pages/people/people';
import './App.css';

function App() {
  return (
    <Provider store={Store}>
      <div className="App">
        <Router>
          <Route exact path="/" component={Home} />
          <Route exact path="/people" component={People} />
        </Router>
      </div>
    </Provider>
  );
}

export default App;
