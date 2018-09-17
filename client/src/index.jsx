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
    

  }



  componentDidMount() {
axios.get('/map')
.then(({data}) => {
  //push markers into array
  console.log(data);
  this.setState(this.state.items.push(data));
});

  }
  render () {

    return (<div>
      <h1></h1>
      {/* <SignupForm/>
      <LoginForm/> */}
      <Address/>
      <MyMapComponent props={this.state.items}/>
    </div>)
  }
}

ReactDOM.render(<BrowserRouter>
  <Route path='/' component={SignupForm}></Route>
</BrowserRouter>, document.getElementById('app'));

export default App