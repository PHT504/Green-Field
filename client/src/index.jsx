import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import MyMapComponent from './components/map.jsx'
import SignupForm from './components/signup.jsx'
import LoginForm from './components/login.jsx'
import Address from './components/address.jsx'
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      items: [[{lat:30.0000, lng:-90.0957},{ lat: 29.9511, lng: -90.0812 }]]
    }

  }

  componentDidMount() {
axios.get('/map')
.then(res => {
  //push markers into array
  console.log(res);
});
  }
  render () {

    return (<div>
      <h1></h1>
      <SignupForm/>
      <LoginForm/>
      <Address/>
      <MyMapComponent props={this.state.items}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));