import React, { Component } from "react";
import styled from "styled-components";

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

color: #FE5353;
padding: 20px 0;
`;
const Title = styled.span`
  font-style: normal;
  font-weight: bold;
  line-height: 20px;
  font-size: 16px;

  color: #4a4a4a;
`;
const Description = styled.p`
  font-style: normal;
  font-weight: normal;
  line-height: 28px;
  font-size: 14px;

  color: #000000;

  a, a:visited {
    color: #4E6DAF;
    text-decoration: none;
    font-weight: 600;
  }
`;
const MissingBlock = styled.div``;

class Warnings extends React.Component {
  constructor(props) {
    super(props);
    this.state = props;
  }

  valid() {
    const { ogImage, ogTitle, ogDescription, ogSiteName } = this.state;

    return (
      [ogImage, ogTitle, ogDescription, ogSiteName].filter(item => !!item)
        .length === 4
    );
  }

  ogImageMissing() {
    const { ogImage } = this.state;

    if (!ogImage) {
      return (
        <MissingBlock>
          <Title>The ogImage tag is missing</Title>
          <Description>
            We coudnt find the ogImage tag. Most os social networks use this tag
            to show as an image. Consider fixing this before sharing this URL. <a href="">Learn more...</a>
          </Description>
        </MissingBlock>
      );
    }
  }

  render() {
    if (this.valid()) return null;

    return (
      <Container>
        <WarningTitle>Woops, we found some issues!</WarningTitle>
        {this.ogImageMissing()}
      </Container>
    );
  }
}

export default Warnings;
