import React, { Component } from "react";
import { Col, Container, Row } from "reactstrap";
import GroupUsersList from "./GroupUsersList";
import NewGroupUsersModal from "./NewGroupUsersModal";

import axios from "axios";

import { API3_URL } from "../constants";

class Home3 extends Component {
  state = {
    group_users: []
  };

  componentDidMount() {
    this.resetState();
  }

  getGroupUsers = () => {
    axios.get(API3_URL).then(res => this.setState({ group_users: res.data }));
  };

  resetState = () => {
    this.getGroupUsers();
  };

  render() {
    return (
      <Container style={{ marginTop: "150px" }}>
        <Row>
          <Col>
            <GroupUsersList
              users={this.state.group_users}
              resetState={this.resetState}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <NewGroupUsersModal create={true} resetState={this.resetState} />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Home3;
