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

const LoadingText = styled.p`
  font-weight: bold;
  font-size: 16px;
  margin: 0 0 20px 0;
  padding: 0;
  color: #fff;
  text-align: center;
`;

const DoneText = styled.i`
  color: #fff;
  font-size: 16px;
  display: block;
  margin: 0 0 20px 0;
`;

const Loading = props => {
  return (
    <Container>
			{ !props.loading ? <DoneText>Voilà!</DoneText> : null }
			{ props.loading ? <LoadingText>Processing ...</LoadingText> : null }
      
      <Icon src={haha} />
    </Container>
  );
};

export default Loading;
