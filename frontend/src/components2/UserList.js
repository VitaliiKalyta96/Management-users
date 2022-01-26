import React, { Component } from "react";
import { Table } from "reactstrap";
import NewUserModal from "./NewUserModal";

import ConfirmsRemovalModal from "./ConfirmsRemovalModal";

class UserList extends Component {
  render() {
    const users = this.props.users;
    return (
      // <Table dark>
      // <Table class="table table-striped">
      <Table class="table table-bordered">
        <thead>
          <tr>
            <th>Username</th>
            <th>Group</th>
            <th>Created</th>
            <th style={{ paddingLeft: "240px" }}>Actions</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {!users || users.length <= 0 ? (
            <tr>
              <td colSpan="6" align="center">
                <b>Ops, no one here yet</b>
              </td>
            </tr>
          ) : (
            users.map(user => (
              <tr key={user.pk}>
                <td>{user.username}</td>
                <td>{user.group}</td>
                <td>{user.created}</td>
                <td align="center">
                  <NewUserModal
                    create={false}
                    user={user}
                    resetState={this.props.resetState}
                  />
                  &nbsp;&nbsp;
                  <ConfirmsRemovalModal
                    pk={user.pk}
                    resetState={this.props.resetState}
                  />
                </td>
              </tr>
            ))
          )}
        </tbody>
      </Table>
    );
  }
}

export default UserList;
