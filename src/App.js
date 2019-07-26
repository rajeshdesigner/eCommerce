import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/homepage.component'

const HatsPage = () => (
  <div>
    <h1>Hats Page</h1>
  </div>
);

function App() {
  return (
    <Switch>
      <Route exact path='/' component={HomePage} />
      <Route path='/' component={HatsPage} />
    </Switch>
  );
}

export default App;
