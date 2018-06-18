import React, { Component } from "react";
import styled from "styled-components";

const Container = styled.div``;
const WarningTitle = styled.span``;
const Title = styled.span``;
const Description = styled.p``;
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
            to show as an image. Consider fixing this before sharing this URL.
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
