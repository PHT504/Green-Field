import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import MyMapComponent from './components/map.jsx'
import Geocode from "react-geocode";
import SignupForm from './components/signup.jsx'
import LoginForm from './components/login.jsx'
import Address from './components/address.jsx'
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      items: []
    }

  }

  componentDidMount() {
// axios.get('/map')
// .then(res => {
//   console.log(res)
// });
  }
  render () {

    return (<div>
      <h1></h1>
      <SignupForm/>
      <LoginForm/>
      <Address/>
      <MyMapComponent />
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));