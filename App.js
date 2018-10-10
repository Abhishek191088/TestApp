<script src="http://localhost:8097"></script>
import React from 'react';
import { Home } from './app/Views/Home.js';
import { Login } from './app/Views/Login.js'

export default class App extends React.Component {
  render() {
    return (
      // <Home/>
      <Login/>
    );
  }
}

