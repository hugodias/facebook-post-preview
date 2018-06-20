import React from "react";
import styled from "styled-components";
import haha from "../../icons/haha.svg";

const Container = styled.div`
  text-align: center;
`;

const Icon = styled.img`
  width: 40px;
  height: 40px;
`;

const BoldText = styled.p`
  font-weight: bold;
  font-size: 16px;
  margin: 0 0 20px 0;
  padding: 0;
  color: #fff;
  text-align: center;
`;

const LightText = styled.i`
  color: #fff;
  font-size: 16px;
  display: block;
  margin: 0 0 20px 0;
`;

const Loading = props => {
  return (
    <Container className={props.className}>
      {!props.loading ? <LightText>Voilà!</LightText> : null}
      {props.loading ? (
        <BoldText>
          {props.started ? "Processing ..." : "Waiting for you ..."}
        </BoldText>
      ) : null}

      <Icon src={haha} />
    </Container>
  );
};

export default Loading;
