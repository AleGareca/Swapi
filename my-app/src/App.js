import './App.css';
import React from 'react';
import { Switch, Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';

import Home from './component/Home';
import Buscar from './component/Buscar';

export default class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/Register" component={Buscar} />
          <Route path="/" component={Home} />
        </Switch>
  
      </BrowserRouter>
    );
  }
}