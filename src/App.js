import React, { Component } from "react";
import FacebookMobilePost from "./components/facebook-mobile-post";
import Warnings from "./components/warnings";
import Form from "./components/form";
import Loading from "./components/loading";
import styled from "styled-components";
import like from "./icons/like.svg";
import wow from "./icons/wow.svg";
import haha from "./icons/haha.svg";
import love from "./icons/love.svg";
import sad from "./icons/sad.svg";
import angry from "./icons/angry.svg";

const Row = styled.div`
  display: flex;
  width: 1020px;
  margin: 0 auto;
  align-content: space-between;
`;
const Col = styled.div`
  flex: 1;
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
      text: "This is a publication with URL https://codeburst.io/extracting-a-react-js-component-and-publishing-it-on-npm-2a49096757f5",
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
              This tool scraps an URL and tries to simulate how facebook is going
              to render a post on the social network. We use Open Graph as
              primary source of information and website meta tags such as title
              and description as fallbacks.
            </Paragraph>

            <Paragraph>
              Paste a text with an URL and press the button to see the preview.
            </Paragraph>

            <Paragraph>
              It's free and <a href="https://github.com/hugodias/facebook-post-preview" target="_blank">Open Source</a>.
            </Paragraph>
          </Info>
        </Col>
        <Col>
          <Loading
            className="loading-block"
            started={started}
            loading={loading}
          />
        </Col>
        <Col align="right" style={{ marginTop: 70 }}>
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
