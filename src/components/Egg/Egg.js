import React, { Component } from "react";
import { Modal, Image } from "semantic-ui-react";
import Konami from "react-konami-code";
import Dev from "../../images/slaveDev.jpg";

//use KeyCodes for entering codes

const devanshCode = [
  //slavedevansh
  83,
  76,
  65,
  86,
  69,
  68,
  69,
  86,
  65,
  78,
  83,
  72,
  13
];

export default class Egg extends Component {
  state = {
    open: false
  };

  onClose = () => this.setState({ open: false });

  slaveDev = () => {
    this.setState({ open: true });
  };
  render() {
    return (
      <Konami action={this.slaveDev} code={devanshCode} timeout={10}>
        <Modal basic open={this.state.open} onClose={this.onClose}>
          <Modal.Content image>
            <Image centered src={Dev} />
          </Modal.Content>
        </Modal>
      </Konami>
    );
  }
}
