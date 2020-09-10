import React from 'react';
import './App.css';
import Header from './component/Header';
import Home from "./component/Home"
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>

          <Route exact path="/">
            <Header />
            <Home />
          </Route>
          <Route exact path="/checkout">
            <Header />
          </Route>

        </Switch>
      </div>
    </Router>
  );
}

export default App;
