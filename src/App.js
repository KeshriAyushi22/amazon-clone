import React, { useEffect } from 'react';
import './App.css';
import Header from './component/Header';
import Home from "./component/Home";
import CheckOut from "./component/CheckOut"
import Login from "./component/Login"
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import "slick-carousel/slick/slick.css";
import { auth } from './firebase';
import { useStateValue } from './context/StateProvider';
import Payment from './component/Payment';

function App() {

  const [{ }, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      console.log("the user is >>>", authUser)
      if (authUser) {
        //the user just logged in / the use was logged in -> the user will be set the firebase user
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      } else {
        //the user is logged out
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, []) //only run once when app.js loads

  return (
    <Router>
      <div className="app">

        <Switch>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/">
            <Header />
            <Home />
          </Route>
          <Route exact path="/payment">
            <Header />
            <Payment />
          </Route>
          <Route exact path="/checkout">
            <Header />
            <CheckOut />
            {/* <SliderDiv /> */}
          </Route>

        </Switch>
      </div>
    </Router>
  );
}

export default App;
