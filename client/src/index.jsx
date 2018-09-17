import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import MyMapComponent from './components/map.jsx'
import SignupForm from './components/signup.jsx'
import LoginForm from './components/login.jsx'
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      items: []
    }
  }

  componentDidMount() {

  }

  render () {

    return (<div>
      <h1></h1>
      <SignupForm/>
      <LoginForm/>
      <MyMapComponent/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));