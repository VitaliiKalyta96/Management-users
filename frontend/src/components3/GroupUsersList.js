import React, { Component } from "react";
import { Table } from "reactstrap";
import NewGroupUsersModal from "./NewGroupUsersModal";

import ConfirmsRemovallModal from "./ConfirmsRemovallModal";

class GroupUsersList extends Component {
  render() {
    const group_users = this.props.users;
    return (
      <Table class="table table-bordered">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Description</th>
            <th style={{ paddingLeft: "260px" }}>Actions</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {!group_users || group_users.length <= 0 ? (
            <tr>
              <td colSpan="6" align="center">
                <b>Ops, no one here yet</b>
              </td>
            </tr>
          ) : (
            group_users.map(group_user => (
              <tr key={group_user.pk}>
                <td>{group_user.pk}</td>
                <td>{group_user.name}</td>
                <td>{group_user.description}</td>
                <td align="center">
                  <NewGroupUsersModal
                    create={false}
                    group_user={group_user}
                    resetState={this.props.resetState}
                  />
                  &nbsp;&nbsp;
                  <ConfirmsRemovallModal
                    pk={group_user.pk}
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

export default GroupUsersList;
