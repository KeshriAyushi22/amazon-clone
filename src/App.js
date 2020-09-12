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
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'
import Order from './component/Order';


const promise = loadStripe('pk_test_51HQDUGBsrjx0tjIDa0SdtYbfWZywH6g35CucNg5jatTX6ufoz7I1HvPn1bDjJwLJy6MLm1ZiPzjjCG2g4eroVYlP00zJcWLF2C');



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
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
          <Route exact path="/checkout">
            <Header />
            <CheckOut />
          </Route>
          <Route exact path="/orders">
            <Header />
            <Order />
          </Route>

        </Switch>
      </div>
    </Router>
  );
}

export default App;
