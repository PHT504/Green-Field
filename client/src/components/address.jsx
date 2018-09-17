import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class Address extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
    const address = {address: this.state.value} 
    axios.post(`/submit`, address )
    .then(res => {
      console.log(props);
      console.log(res);
    }).catch(res=> {
      console.error(res);
    })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}  
export default Address;