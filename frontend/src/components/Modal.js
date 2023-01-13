import React, { Component } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  InputGroup,
  FormLabel
} from "react-bootstrap";

export default class CustomModal extends Component {
  constructor(props) {
      super(props);
      this.state = {
          activeItem: this.props.activeItem
      };
  }
  handleChange = e => {
      let { name, value } = e.target;
      if (e.target.type === "checkbox") {
          value = e.target.checked;
      }
      const activeItem = { ...this.state.activeItem, [name]: value };
      this.setState({ activeItem });
  };
  render() {
      const { toggle, onSave } = this.props;
      return (
          <Modal isOpen={true} toggle={toggle}>
              <ModalHeader toggle={toggle}>Todo Item</ModalHeader>
              <ModalBody>
                  <Form>
                      <Form.Group>
                          <Form.Label for="title">Title</Form.Label>
                          <Form.Control
                            type="text"
                            name="title"
                            value={this.state.activeItem.title}
                            onChange={this.handleChange}
                            placeholder="Enter Todo Title"
                          />
                      </Form.Group>
                      <FormGroup>
                          <FormLabel for="description">Description</FormLabel>
                          <InputGroup
                          type="text"
                          name="description"
                          value={this.state.activeItem.description}
                          onChange={this.handleChange}
                          placeholder="Enter Todo description"
                          />
                      </FormGroup>
                      <FormGroup check>
                          <FormLabel for="completed">
                              <InputGroup
                              type="checkbox"
                              name="completed"
                              checked={this.state.activeItem.completed}
                              onChange={this.handleChange}
                              />
                              Completed
                          </FormLabel>
                      </FormGroup>
                  </Form>
              </ModalBody>
              <ModalFooter>
                  <Button color="success" onClick={() => onSave(this.state.activeItem)}>
                      Save
                  </Button>
              </ModalFooter>
          </Modal>
      );
  }
}