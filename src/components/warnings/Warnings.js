import React, { Component } from "react";
import styled from "styled-components";
import sad from "../../icons/sad.svg";

const Container = styled.div`
  font-family: "Roboto";
  -webkit-font-smoothing: antialiased;
  width: 375px;
`;
const WarningTitle = styled.div`
  font-family: Roboto;
  font-style: normal;
  font-weight: 900;
  line-height: normal;
  font-size: 20px;
  text-align: left;
  color: #fe5353;
  padding: 30px 0;
  display: inline-block;

  span {
    vertical-align: middle;
    margin-left: 10px;
  }
  img {
    width: 30px;
    height: 30px;
    vertical-align: middle;
  }
`;
const Title = styled.span`
  font-style: normal;
  font-weight: bold;
  line-height: 1.5em;
  font-size: 16px;

  color: #4a4a4a;
`;
const Description = styled.p`
  font-style: normal;
  font-weight: 300;
  line-height: 1.5em;
  font-size: 16px;
  margin-top: 5px;
  color: rgba(0, 0, 0, 0.8);

  a,
  a:visited {
    color: #4e6daf;
    text-decoration: none;
    font-weight: 600;
    font-size: 14px;
    margin-left: 4px;
  }
`;
const MissingBlock = styled.div`
  padding-bottom: 20px;
`;

class Warnings extends Component {
  valid() {
    const { ogImage, ogTitle, ogDescription, ogUrl } = this.props;

    return (
      [ogImage, ogTitle, ogDescription, ogUrl].filter(item => !!item).length ===
      4
    );
  }

  ogUrlMissing() {
    const { ogUrl } = this.props;

    if (!ogUrl) {
      return (
        <MissingBlock>
          <Title>The ogUrl tag is missing</Title>
          <Description>
            The canonical URL of your object that will be used as its permanent
            ID in the graph, e.g., "http://imdb.com/movies".<br />
            <a
              href="http://ogp.me/#metadata"
              rel="noopener noreferrer"
              target="_blank"
            >
              Learn more...
            </a>
          </Description>
        </MissingBlock>
      );
    }
  }

  ogTitleMissing() {
    const { ogTitle } = this.props;

    if (!ogTitle) {
      return (
        <MissingBlock>
          <Title>The ogTitle tag is missing</Title>
          <Description>
            The title of your object as it should appear within the graph, e.g.,
            "The Rock".
            <a
              href="http://ogp.me/#metadata"
              rel="noopener noreferrer"
              target="_blank"
            >
              Learn more...
            </a>
          </Description>
        </MissingBlock>
      );
    }
  }

  ogImageMissing() {
    const { ogImage } = this.props;

    if (!ogImage) {
      return (
        <MissingBlock>
          <Title>The ogImage tag is missing</Title>
          <Description>
            An image URL which should represent your object within the graph.
            <a
              href="http://ogp.me/#metadata"
              rel="noopener noreferrer"
              target="_blank"
            >
              Learn more...
            </a>
          </Description>
        </MissingBlock>
      );
    }
  }

  ogDescriptionMissing() {
    const { ogDescription } = this.props;

    if (!ogDescription) {
      return (
        <MissingBlock>
          <Title>The ogDescription tag is missing</Title>
          <Description>
            A one to two sentence description of your object.{" "}
            <a
              href="http://ogp.me/#optional"
              rel="noopener noreferrer"
              target="_blank"
            >
              Learn more...
            </a>
          </Description>
        </MissingBlock>
      );
    }
  }

  render() {
    if (this.valid() || !this.props.started || this.props.loading) return null;

    return (
      <Container style={this.props.style}>
        <WarningTitle>
          <img src={sad} alt="Sad icon" />
          <span>Woops, we found some issues!</span>
        </WarningTitle>
        {this.ogTitleMissing()}
        {this.ogDescriptionMissing()}
        {this.ogImageMissing()}
        {this.ogUrlMissing()}
      </Container>
    );
  }
}

export default Warnings;
