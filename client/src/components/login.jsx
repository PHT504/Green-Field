import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import App from '../index.jsx'
class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''};

    this.handleChangeUser = this.handleChangeUser.bind(this);
    this.handleChangePass = this.handleChangePass.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeUser(event) {
    this.setState({username: event.target.value});
  }
  handleChangePass(event) {
    this.setState({password: event.target.value});
  }

  handleSubmit(event) {
    // alert('A name was submitted: ' + this.state.username + this.state.password);
    const user = {username: this.state.username, password: this.state.password}
    event.preventDefault();
    axios.post(`/login`, user )
    .then(({data}) => {
      console.log(data);
    if(data === 'OK') {
     
      ReactDOM.render(<App/> , document.getElementById('app'));
    }
    })
  }

  render() {
    return (
      <div>   
        <h2>Login</h2>     
        <form onSubmit={this.handleSubmit}>
        <label>
          Username:
          <input type="text" value={this.state.username} onChange={this.handleChangeUser} />
        </label>
        <label>
          Password:
          <input type="text" value={this.state.password} onChange={this.handleChangePass} />
        </label>
        <input type="submit" value="Submit" />
      </form>
      </div>

    );
  }
}
export default LoginForm