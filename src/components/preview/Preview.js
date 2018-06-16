import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 375px;
  font-family: "Roboto", sans-serif;
`;

const ImageWrapper = styled.div`
  display: block;
  width: 100%;
  height: 0;
  padding-top: 51.25%;
  background: url(${props => props.src});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
`;

const Info = styled.div`
  padding: 15px;
`;

const SiteName = styled.span`
  display: block;
  font-style: normal;
  font-weight: normal;
  line-height: normal;
  font-size: 12px;
  text-transform: uppercase;
  color: #616770;
  font-family: "Roboto", sans-serif;
`;

const Title = styled.span`
  display: block;
  font-style: normal;
  font-weight: bold;
  line-height: normal;
  font-size: 15px;
  font-family: "Roboto", sans-serif;
  color: #1d2129;
  margin-top: 3px;
`;

const Description = styled.span`
  display: block;
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: normal;
  line-height: normal;
  font-size: 13px;
  color: #616770;
  margin-top: 3px;
`;

const Preview = props => {
  return (
    <Container>
      {props.ogImage && props.ogImage.url ? (
        <ImageWrapper src={props.ogImage.url} />
      ) : null}
      <Info>
        <SiteName>{props.ogSiteName}</SiteName>
        <Title>{props.ogTitle}</Title>
        <Description>{props.ogDescription}</Description>
      </Info>
    </Container>
  );
};

export default Preview;
