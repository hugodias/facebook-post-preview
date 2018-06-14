import React, { Component } from 'react';
import './App.css';

class Lambda extends Component {
  constructor(props) {
    super(props);
    this.state = {loading: false, msg: null};
  }

  handleClick = (e) => {
    e.preventDefault();

    const url = "https://expressjs.com/";

    this.setState({loading: true});
    fetch(`/.netlify/functions/hello?url=${url}`)
      .then(response => response.json())
      .then(json => this.setState({loading: false, msg: json.msg}));
  }

  render() {
    const {loading, msg} = this.state;

    return <p>
      <button onClick={this.handleClick}>{loading ? 'Loading...' : 'Call Lambda'}</button><br/>
      <span>{msg}</span>
    </p>
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Facebook post preview</h1>
        </header>
        <Lambda/>
      </div>
    );
  }
}

export default App;
