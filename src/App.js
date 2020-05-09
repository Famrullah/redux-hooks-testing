import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import Store from './store/store';
import People from './pages/people/people';
import './App.css';

function App() {
  return (
    <Provider store={Store}>
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/" component={People} />
          </Switch>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
