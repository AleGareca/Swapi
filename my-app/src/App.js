import './App.css';
import React from 'react';
import { Switch, Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';

import Form from './component/Form';
import Home from './component/Home';

export default class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/Register" component={Form} />
          <Route path="/" component={Home} />
        </Switch>
      </BrowserRouter>
    );
  }
}