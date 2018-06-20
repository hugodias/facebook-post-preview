import React, { Component } from "react";
import styled from "styled-components";
import Preview from "../preview";
import MobileCardLoader from "../mobile-card-loader/MobileCardLoader";

const Container = styled.div`
  width: 375px;
  display: block;
  box-shadow: 0px 9px 12px rgba(0, 0, 0, 0.06);
  background: #fff;
`;
const Header = styled.div`
  display: flex;
  padding: 12px;
`;
const Avatar = styled.img`
  border-radius: 50%;
  width: 40px;
  height: 40px;
`;
const UserInfo = styled.div`
  flex-grow: 1;
  padding-left: 8px;
`;
const Username = styled.span`
  display: inline-block;
  width: 100%;
  font-style: normal;
  font-weight: bold;
  line-height: normal;
  font-size: 14px;
  color: #141823;
`;
const Timestamp = styled.span`
  font-style: normal;
  font-weight: normal;
  line-height: normal;
  font-size: 12px;
  color: #616770;
`;

const Body = styled.div``;
const Post = styled.div`
  font-style: normal;
  font-weight: normal;
  line-height: normal;
  font-size: 13px;
  color: #141823;
  display: block;
  padding: 0 12px 12px 12px;
`;
const Footer = styled.div``;

class FacebookMobilePost extends Component {
  render() {
    const { loading, style, text, meta } = this.props;

    if (loading) {
      return (
        <Container style={{ padding: 10 }} className="fade-out">
          <MobileCardLoader />
        </Container>
      );
    }

    return (
      <Container style={style} className="fade-in">
        <Header>
          <Avatar src="https://avatars.io/instagram/hugooovictor" />
          <UserInfo>
            <Username>Hugo Dias</Username>
            <Timestamp>Just now - Amsterdam, Netherlands</Timestamp>
          </UserInfo>
        </Header>
        <Body>
          <Post>{text}</Post>
          {meta ? <Preview {...meta} /> : null}
        </Body>
        <Footer />
      </Container>
    );
  }
}

export default FacebookMobilePost;
