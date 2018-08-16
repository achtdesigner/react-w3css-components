import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './w3.css';
import './App.css';

import Home from './components/pages/Home';
import SinglePage from './components/pages/SinglePage';
import NotFound from './components/pages/NotFound';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/SinglePage" component={SinglePage} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    );
  }
}

export default App;
