import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import App from './App';

export default class Router extends Component {
  render() {
    return (
      <main>
        <Switch>
          <Route exact path="/" component={App} />
        </Switch>
      </main>
    );
  }
}
