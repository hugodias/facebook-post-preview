import React, { Component } from "react";
import FacebookMobilePost from "./components/facebook-mobile-post";
import Warnings from "./components/warnings";
import Form from "./components/form";
import Loading from "./components/loading";
import styled from "styled-components";

const Row = styled.div`
  display: flex;
  flex-flow: row wrap;
  width: 1020px;
  margin: 0 auto;
  align-content: space-between;

  @media all and (max-width: 960px) {
    width: 100%;
  }
`;
const Col = styled.div`
  flex: 1;

  margin-top: ${props => (props.right ? 70 : 0)};

  @media all and (max-width: 960px) {
    flex: ${props => (props.middle ? "1" : "2 100%")};
    display: ${props => (props.middle ? "none" : "block")};
    margin-top: 0;
    margin: 0 auto;
    padding: ${props => (props.right ? "0" : "30px")};
  }
`;

const Title = styled.h1`
  font-size: 41px;
  line-height: 100%;
  font-weight: 900;
  color: #fff;
  margin-top: 75px;
`;

const Subtitle = styled.h3`
  font-size: 16px;
  font-weight: 500;
  line-height: 100%;
  margin-top: 56px;
  margin-bottom: 25px;
  color: #fff;

  @media all and (max-width: 960px) {
    display: none;
  }
`;

const Info = styled.div`
  margin-top: 60px;
`;

const Lead = styled.h2`
  font-weight: 900;
  color: #4a4a4a;
  font-size: 35px;
  line-height: 100%;
`;

const Paragraph = styled.p`
  font-size: 18px;
  font-weight: 300;
  letter-spacing: 0.5px;
  line-height: 1.5em;
  color: #4a4a4a;
  text-rendering: optimizeLegibility;

  a {
    color: #4a4a4a;
    font-weight: bold;
  }
`;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      started: false,
      loading: true,
      text:
        "This is a publication with URL https://codeburst.io/extracting-a-react-js-component-and-publishing-it-on-npm-2a49096757f5",
      meta: {},
      error: null
    };
  }

  handleProcessingStarted = () => {
    this.setState({ started: true, loading: true });
  };

  handleFormSubmitted = data => {
    const newState = { ...data };
    newState.loading = false;
    this.setState(newState);
  };

  render() {
    const { started, loading } = this.state;

    return (
      <Row>
        <a href="https://github.com/hugodias/facebook-post-preview">
          <img
            style={{ position: "absolute", top: 0, left: 0, border: 0 }}
            rel="noopener noreferrer"
            src="https://s3.amazonaws.com/github/ribbons/forkme_left_white_ffffff.png"
            alt="Fork me on GitHub"
          />
        </a>
        <Col align="left">
          <Title>Facebook post preview</Title>
          <Subtitle>Paste a text with an URL and press the button</Subtitle>
          <Form
            {...this.state}
            processingStarted={this.handleProcessingStarted}
            formSubmitted={this.handleFormSubmitted}
          />

          <Info>
            <Lead>What is this?</Lead>
            <Paragraph>
              This tool scraps an URL and tries to simulate how facebook is
              going to render a post on the social network. We use Open Graph as
              primary source of information and website meta tags such as title
              and description as fallbacks.
            </Paragraph>

            <Paragraph>
              Paste a text with an URL and press the button to see the preview.
            </Paragraph>

            <Paragraph>
              It's free and{" "}
              <a
                href="https://github.com/hugodias/facebook-post-preview"
                rel="noopener noreferrer"
                target="_blank"
              >
                Open Source
              </a>.
            </Paragraph>
          </Info>
        </Col>
        <Col middle>
          <Loading
            className="loading-block"
            started={started}
            loading={loading}
          />
        </Col>
        <Col right>
          <Subtitle style={{ MarginTop: 50 }}>Preview result</Subtitle>
          <FacebookMobilePost {...this.state} style={{ float: "right" }} />
          <Warnings
            {...this.state.meta}
            loading={loading}
            started={started}
            style={{ float: "right" }}
          />
        </Col>
      </Row>
    );
  }
}

export default App;
