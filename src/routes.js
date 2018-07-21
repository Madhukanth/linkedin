import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import App from './App';
import Profile from './Profile';

export default class Router extends Component {
  render() {
    return (
      <main>
        <Switch>
          <Route exact path="/" component={App} />
          <Route path="/profile" component={Profile} />
        </Switch>
      </main>
    );
  }
}
