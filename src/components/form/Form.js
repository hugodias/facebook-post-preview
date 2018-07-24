import React, { Component } from "react";
import styled from "styled-components";

const Container = styled.div`
  box-shadow: 0px 9px 12px rgba(0, 0, 0, 0.06);
  border-radius: 3px;
  background: #fff;

  @media all and (max-width: 960px) {
    width: 100%;
  }
`;
const Textarea = styled.textarea`
  flex: 2;
  border: 0px;
  margin-left: 20px;
  font-weight: 300;
  font-size: 14px;
  color: #000;
  line-height: 20px;
  font-family: "Roboto", sans-serif;
  &:focus {
    outline: none;
  }
`;
const FormField = styled.form``;
const Divider = styled.hr`
  border: 0;
  padding: 0;
  margin: 0;
  border-bottom: 1px solid #e1e2e3;
`;
const Block = styled.div`
  padding: 15px;
  display: flex;
`;
const Button = styled.button`
  background: #4e6daf;
  color: #fff;
  font-family: "Roboto", sans-serif;
  border: 0;
  border-radius: 3px;
  box-sizing: border-box;
  width: 100%;
  font-size: 12px;
  text-transform: uppercase;
  font-weight: 900;
  height: 32px;
  cursor: pointer;
  flex-grow: 2;

  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }
`;
const Avatar = styled.img`
  border-radius: 50%;
  width: 40px;
  height: 40px;
`;

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: this.props.text
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit = e => {
    e.preventDefault();
    const text = this.state.text;
    this.props.simpleAction(text);
  };

  handleChange = e => {
    this.setState({ text: e.target.value });
  };

  render() {
    const { text } = this.state;
    const { loading } = this.props;

    return (
      <Container>
        <FormField onSubmit={this.handleSubmit}>
          <Block>
            <Avatar src="https://avatars.io/instagram/hugooovictor" />
            <Textarea rows="3" onChange={this.handleChange} value={text} />
          </Block>
          <Divider />
          <Block>
            <Button disabled={loading}>Preview</Button>
          </Block>
        </FormField>
      </Container>
    );
  }
}

export default Form;
