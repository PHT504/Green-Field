import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { BrowserRouter, Route } from 'react-router-dom';
import MyMapComponent from './components/map.jsx'
import SignupForm from './components/signup.jsx'
import LoginForm from './components/login.jsx'
import Address from './components/address.jsx'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      items: []
    }
    this.handleData = this.handleData.bind(this);
    this.getMap = this.getMap.bind(this);

  }
  handleData(info) {
    console.log(info);
    this.setState(this.state.items.push(info));
    ReactDOM.render(<MyMapComponent props={this.state.items}/>, document.getElementById('app') )
  }
  getMap() {
    axios.get('/map')
.then(({data}) => {
  //push markers into array
  console.log(data);
  this.handleData(data);
  
});

  }

  componentDidMount() {
axios.get('/map')
.then(({data}) => {
  //push markers into array
  console.log(data);
  this.handleData(data);
  
});

  }
  render () {

    return (<div>
      <h1></h1>
      {/* <SignupForm/>
      <LoginForm/> */}
      <Address props={this.getMap}/>
      <MyMapComponent props={this.state.items}/>
    </div>)
  }
}

ReactDOM.render(<BrowserRouter>
  <Route path='/' component={SignupForm}></Route>
</BrowserRouter>, document.getElementById('app'));

export default App