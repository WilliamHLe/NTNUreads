import React from 'react';
import './App.css';
import Navigation from "./Navigation";
import {Route, Switch} from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Results from "./pages/Results";
import CreateReview from "./components/CreateReview";
import LoginForm from "./components/login/LoginForm";

function App() {
  return (
    <div className="App">
        <Navigation/>
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/profile' component={Profile}/>
            <Route path='/login' component={LoginForm}/>
            {/*<Route path='/results' component={Results}/>*/}
            <Route path="/results/:searchText"  component={Results} />
        </Switch>
        <CreateReview />
    </div>
  );
}

export default App;
