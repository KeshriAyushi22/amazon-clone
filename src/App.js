import React from 'react';
import './App.css';
import Header from './component/Header';
import Home from "./component/Home";
import CheckOut from "./component/CheckOut"
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'


function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/checkout">
            <CheckOut />
          </Route>

        </Switch>
      </div>
    </Router>
  );
}

export default App;
