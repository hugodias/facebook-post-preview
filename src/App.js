import React, { Component } from "react";
import Preview from "./components/preview";
import "./App.css";

/**
 * TODO: Move this
 */
class Lambda extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null,
      loading: false,
      text: null,
      meta: {
        ogSiteName: "Medium",
        ogTitle: "Utilizando o ELK Stack como ferramenta de Business Intelligence",
        ogDescription: "Como integrar um app Ruby on Rails pelo docker com o ELK Stack",
        ogImage: {
          url: "https://cdn-images-1.medium.com/max/1200/0*3llSqzx4IxQ7TyVP"
        }
      },
      error: null
    };
  }

  handleClick = e => {
    e.preventDefault();

    const url = "https://expressjs.com/";

    this.setState({ loading: true });
    // TODO: Refactor lambda name
    fetch(`/.netlify/functions/hello?q=${this.state.value}`)
      .then(response => response.json())
      .then(json =>
        this.setState({
          loading: false,
          text: json.text,
          meta: json.meta,
          error: json.error
        })
      );
  };

  handleChange = e => {
    this.setState({ value: e.target.value });
  };

  render() {
    const { value, loading, msg } = this.state;

    return (
      <div>
        <input onChange={this.handleChange} type="text" value={value} />
        <button onClick={this.handleClick}>
          {loading ? "Loading..." : "Call Lambda"}
        </button>
        <br />
        <span>{msg}</span>

        <Preview {...this.state.meta} />
      </div>
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
