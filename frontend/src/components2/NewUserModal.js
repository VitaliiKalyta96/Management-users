import React, { Component, Fragment } from "react";
import { Button, Modal, ModalHeader, ModalBody } from "reactstrap";
import NewUserForm from "./NewUserForm";

class NewUserModal extends Component {
  state = {
    modal: false
  };

  toggle = () => {
    this.setState(previous => ({
      modal: !previous.modal
    }));
  };

  render() {
    const create = this.props.create;

    var title = "Edit User";
    var button = <Button onClick={this.toggle}>Edit</Button>;
    if (create) {
      title = "Creating New User";

      button = (
        // <Button
        //   color="primary"
        //   className="float-right"
        //   onClick={this.toggle}
        //   style={{ minWidth: "200px" }}
        // >
        //   Create New
        // </Button>
        // <button style={{ marginTop: "-330px", marginRight: "-100px" }}
        <button
          type="button"
          className="btn btn-outline-primary float-right"
          onClick={this.toggle}
        >
          Add User
        </button>
      );
    }

    return (
      <Fragment>
        {button}
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>{title}</ModalHeader>

          <ModalBody>
            <NewUserForm
              resetState={this.props.resetState}
              toggle={this.toggle}
              user={this.props.user}
            />
          </ModalBody>
        </Modal>
      </Fragment>
    );
  }
}

export default NewUserModal;
