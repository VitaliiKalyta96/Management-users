import React from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";

import axios from "axios";

import { API3_URL } from "../constants";

class NewGroupUsersForm extends React.Component {
  state = {
    pk: 0,
    name: "",
    description: ""
  };

  componentDidMount() {
    if (this.props.group_user) {
      const { pk, name, description } = this.props.group_user;
      this.setState({ pk, name, description });
    }
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  createGroupUsers = e => {
    e.preventDefault();
    axios.post(API3_URL, this.state).then(() => {
      this.props.resetState();
      this.props.toggle();
    });
  };

  editGroupUsers = e => {
    e.preventDefault();
    axios.put(API3_URL + this.state.pk, this.state).then(() => {
      this.props.resetState();
      this.props.toggle();
    });
  };

  defaultIfEmpty = value => {
    return value === "" ? "" : value;
  };

  render() {
    return (
      <Form onSubmit={this.props.group_user ? this.editGroupUsers : this.createGroupUsers}>
        <FormGroup>
          <Label for="name">Name:</Label>
          <Input
            type="text"
            name="name"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.name)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="description">Description:</Label>
          <Input
            type="text"
            name="description"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.description)}
          />
        </FormGroup>
        <Button>Send</Button>
      </Form>
    );
  }
}

export default NewGroupUsersForm;
