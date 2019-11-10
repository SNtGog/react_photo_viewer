import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.scss';
import {
  Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Login from "./pages/Login";
import Gallery from "./pages/Gallery";
import { PromisedVK } from './vk';
import history from "./history";

class App extends Component {

  state = {
    isAuthenticated: false,
  }

  async componentDidMount() {
    const isAuthenticated = await PromisedVK.getLoginStatus();
    this.setState({ isAuthenticated: isAuthenticated });

    if (isAuthenticated) {
      history.push("/gallery");
    }

  }

  render() {
    return (
      <Router history={history}>
        <div>
          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/gallery">
              <Gallery />
            </Route>
            <Route path="*">
              <Redirect to="/login" />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
