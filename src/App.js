import React, { Component } from "react";
import FacebookMobilePost from "./components/facebook-mobile-post";
import Warnings from "./components/warnings";
import Form from "./components/form";
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
      text: "This is a publication with URL",
      meta: {
        ogSiteName: "Medium",
        ogTitle:
          "Utilizando o ELK Stack como ferramenta de Business Intelligence"
        // ogDescription: "Como integrar um app Ruby on Rails pelo docker com o ELK Stack",
        // ogImage: {
        //   url: "https://cdn-images-1.medium.com/max/1200/0*3llSqzx4IxQ7TyVP"
        // }
      },
      error: null
    };
  }

  handleFormSubmitted = data => {
    this.setState(data);
  };

  render() {
    const { value, loading, msg } = this.state;

    return (
      <div>
        <Form {...this.sate} handleFormSubmitted={this.handleFormSubmitted} />
        <FacebookMobilePost {...this.state} />
        <Warnings {...this.state.meta} />
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
