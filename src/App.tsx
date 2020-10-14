import React from 'react';
import './App.css';
import Navigation from "./Navigation";
import {Route, Switch} from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import CreateReview from "./components/CreateReview";

function App() {
  return (
    <div className="App">
        <Navigation/>
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/profile' component={Profile}/>
        </Switch>
        <CreateReview />
    </div>
  );
}

export default App;
