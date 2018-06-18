import React, { Component } from "react";
import styled from "styled-components";

const Container = styled.div``;
const Textarea = styled.textarea``;
const FormField = styled.form``;
const Button = styled.button``;
const Avatar = styled.img`
  border-radius: 50%;
  width: 40px;
  height: 40px;
`;

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      value: null
    };
  }

  handleSubmit = e => {
    e.preventDefault();

    this.setState({ loading: true });

    // TODO: Refactor lambda name
    fetch(`/.netlify/functions/hello?q=${this.state.value}`)
      .then(response => response.json())
      .then(json => {
        this.setState({
          loading: false
        });
        this.props.handleFormSubmitted(json);
      });
  };

  handleChange = e => {
    this.setState({ value: e.target.value });
  };

  render() {
    const { value } = this.state;

    return (
      <Container>
        <FormField onSubmit={this.handleSubmit}>
          <Avatar src="https://avatars.io/instagram/hugooovictor" />
          <Textarea onChange={this.handleChange} value={value} />
          <Button>Preview</Button>
        </FormField>
      </Container>
    );
  }
}

export default Form;
