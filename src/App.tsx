import React from 'react';

import {connect} from "react-redux";
import {Dispatch} from "redux";
import {AppState} from "./store/rootStore";
import {lightTheme, darkTheme} from "./store/theme/ThemeAction";

import './App.css';
import Navigation from "./Navigation";
import {Route, Switch} from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Results from "./pages/Results";
//import CreateReview from "./components/CreateReview";
import LoginForm from "./components/user/LoginForm";
import Detailed from "./pages/Detailed";
//import Page from "./components/Page";

/*
interface AppProps {
    light: () => void;
    dark: () => void;
}

const mapStateToProps = (state: AppState) => ({
    theme: state.themeReducer.theme
})

const mapDispatchToProps = (dispatch: Dispatch): AppProps => ({
    light: () => dispatch(lightTheme()),
    dark: () => dispatch(darkTheme())
})

 */


function App() {
  return (
    <div className="App">
        <Navigation/>
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/profile' component={Profile}/>
            <Route path='/login' component={LoginForm}/>
            <Route name="detailed" path='/book/:id' component={Detailed} />
            {/*<Route path='/results' component={Results}/>*/}
            <Route path="/results/:searchText"  component={Results} />
        </Switch>
        {/*<CreateReview />*/}
    </div>
  );
}

//export default connect(mapStateToProps, mapDispatchToProps)(App);
export default App;
