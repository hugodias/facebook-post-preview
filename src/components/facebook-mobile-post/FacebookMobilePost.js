import React, { Component } from "react";
import styled from "styled-components";
import Preview from "../preview";
import MobileCardLoader from "../mobile-card-loader/MobileCardLoader";
import like from "../../icons/like.svg";
import hotlike from "../../icons/hotlike.svg";
import comment from "../../icons/comment.svg";
import share from "../../icons/share.svg";

const Container = styled.div`
  max-width: 375px;
  display: block;
  width: 100%;
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
const Footer = styled.div`
  border: 0.5px solid #dcdee3;
`;
const Likebar = styled.div`
  display: flex;
  margin: 0 20px;
  padding: 10px 0;
  border-bottom: 0.5px solid #dcdee3;

  img {
    width: 16px;
    height: 16px;
  }

  span {
    align-self: center;
    color: #616770;
    font-size: 13px;
    padding-left: 10px;
  }
`;

const Actions = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 20px;
`;

const Action = styled.div`
  flex: 1;
  align-self: center;
  img {
    width: 16px;
    height: 15px;
    align-self: center;
  }

  div {
    color: #616770;
    font-weight: bold;
    font-size: 13px;
    padding-left: 10px;

    display: inline-block;
  }
`;

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
          <Avatar
            alt="Hugooodias Avatar"
            src="https://avatars.io/instagram/hugooovictor"
          />
          <UserInfo>
            <Username>Hugo Dias</Username>
            <Timestamp>Just now - Amsterdam, Netherlands</Timestamp>
          </UserInfo>
        </Header>
        <Body>
          <Post>{text}</Post>
          {meta ? <Preview {...meta} /> : null}
        </Body>
        <Footer>
          <Likebar>
            <img src={like} alt="Like icon" />
            <span>Chuck Norris</span>
          </Likebar>
          <Actions>
            <Action>
              <img src={hotlike} alt="Like icon" />
              <div>Like</div>
            </Action>
            <Action>
              <img src={comment} alt="Comment icon" />
              <div>Comment</div>
            </Action>
            <Action>
              <img style={{ marginLeft: 20 }} alt="Share icon" src={share} />
              <div>Share</div>
            </Action>
          </Actions>
        </Footer>
      </Container>
    );
  }
}

export default FacebookMobilePost;
