import React from 'react';
import ReactDOM from 'react-dom';

import List from './components/List.jsx';
import NameForm from './components/signup.jsx'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      items: []
    }
  }

  componentDidMount() {
    // $.ajax({
    //   url: '/items', 
    //   success: (data) => {
    //     this.setState({
    //       items: data
    //     })
    //   },
    //   error: (err) => {
    //     console.log('err', err);
    //   }
    // });
  }

  render () {
    return (<div>
      <h1></h1>
      <NameForm/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));