import React, { Component } from 'react';
// import logo from './logo.svg';
import { Router, Link } from 'react-router-dom'
import createHashHistory from 'history/createHashHistory'
import './App.css';

import { Pages } from './pages'
window.React = React
const history = createHashHistory()
class App extends Component {
  render() {
    return (
      // <div className="App">...</div>
      // 没有<Router>可能报错 You should not use <Switch> outside a <Router>
      <Router history={history}>
        <Pages />
      </Router>
    );
  }
}

export default App;
