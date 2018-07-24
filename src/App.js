import React, { Component } from "react";
import { connect } from "react-redux";
import { simpleAction } from "./actions/simpleAction";
import FacebookMobilePost from "./components/facebook-mobile-post";
import Warnings from "./components/warnings";
import Form from "./components/form";
import Loading from "./components/loading";
import styled from "styled-components";

const Row = styled.div`
  display: grid;
  max-width: 1060px;
  margin: 0 auto;
  padding: 0 20px;
  grid-template-columns: auto 1fr 210px 375px;

  @media all and (max-width: 960px) {
    width: 100%;
    display: block;
  }
`;
const Col = styled.div`
  margin-top: ${props => (props.right ? 70 : 0)};

  @media all and (max-width: 960px) {
    display: ${props => (props.middle ? "none" : "block")};
    margin-top: 0;
    margin: 0 auto;
    padding: 30px 0;
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
  render() {
    const { started, loading } = this.props;

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
            {...this.props}
            loading={loading && started}
            simpleAction={text => this.props.simpleAction(text)}
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
          <FacebookMobilePost {...this.props} loading={loading} style={{ float: "right" }} />
          <Warnings
            {...this.props.meta}
            loading={loading}
            started={started}
            style={{ float: "right", marginTop: 50 }}
          />
        </Col>
      </Row>
    );
  }
}

const mapStateToProps = state => ({
  ...state.simpleReducer
});

const mapDispatchToProps = dispatch => ({
  simpleAction: (text) => dispatch(simpleAction(text))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
