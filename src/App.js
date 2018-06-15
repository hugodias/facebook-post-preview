import React, { Component } from "react";
import "./App.css";

/**
 * TODO: Move this
 */
class Lambda extends Component {
  constructor(props) {
    super(props);
    this.state = { value: null, loading: false, msg: null };
  }

  handleClick = e => {
    e.preventDefault();

    const url = "https://expressjs.com/";

    this.setState({ loading: true });
    // TODO: Refactor lambda name
    fetch(`/.netlify/functions/hello?q=${this.state.value}`)
      .then(response => response.json())
      .then(json => this.setState({ loading: false, msg: json.msg }));
  };

  handleChange = e => {
    this.setState({ value: e.target.value });
  };

  render() {
    const { value, loading, msg } = this.state;

    return (
      <p>
        <input onChange={this.handleChange} type="text" value={value} />
        <button onClick={this.handleClick}>
          {loading ? "Loading..." : "Call Lambda"}
        </button>
        <br />
        <span>{msg}</span>
      </p>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Facebook post preview</h1>
        </header>
        <Lambda />
      </div>
    );
  }
}

export default App;
