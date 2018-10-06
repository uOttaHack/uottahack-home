import React, { Component } from "react";
import "./Egg.css";
import { Modal, Image } from "semantic-ui-react";
import Konami from "react-konami-code";
import Dev from "../../images/slaveDev.jpg";
import Nits from "../../images/nits.png";

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

const nitsCode = [
  //nits
  78,
  73,
  84,
  83,
  13
];

export default class Egg extends Component {
  state = {
    open: false,
    nitsAnimate: "off"
  };

  onClose = () => this.setState({ open: false });

  slaveDev = () => {
    this.setState({ open: true });
  };

  nits = () => {
    var audio = new Audio(
      "https://sound.peal.io/ps/audios/000/000/366/original/i'm-the-man.mp3"
    );
    audio.play();
    var css = this.state.nitsAnimate === "off" ? "animatedIn" : "animatedIn";
    this.setState({ nitsAnimate: css });
  };

  nitsClose = () => {
    this.setState({ nitsAnimate: "off" });
  };

  render() {
    return (
      <div>
        <Konami action={this.slaveDev} code={devanshCode} timeout={10}>
          <Modal basic open={this.state.open} onClose={this.onClose}>
            <Modal.Content image>
              <Image centered src={Dev} />
            </Modal.Content>
          </Modal>
        </Konami>

        <Konami
          action={this.nits}
          code={nitsCode}
          timeout={2500}
          onTimeout={this.nitsClose}
          className="nitskonami"
        >
          <Image src={Nits} className={this.state.nitsAnimate + " nits"} />
        </Konami>
      </div>
    );
  }
}
