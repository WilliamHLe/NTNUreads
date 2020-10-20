import React from 'react';
import logo from './logo.svg';
import './App.css';
import LoginForm from "./components/login/LoginForm";
import Check from "./components/Check"

function App() {
  return (
      <div>
        <LoginForm />
        <Check />
      </div>
  );
}

export default App;
