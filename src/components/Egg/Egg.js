import React, { Component } from "react";
import "./Egg.css";
import { Modal, Image } from "semantic-ui-react";
import Konami from "react-konami-code";
import Dev from "../../images/slaveDev.jpg";
import Nits from "../../images/nits.png";
import Arsani from "../../images/arsani.png";

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

const arsaniCode = [
  //codemonkey
  67,
  79,
  68,
  69,
  77,
  79,
  78,
  75,
  69,
  89
];

export default class Egg extends Component {
  state = {
    open: false,
    nitsAnimate: "off",
    arsaniAnimate: "off"
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
    this.setState({ nitsAnimate: "animatedIn-Nits" });
  };

  nitsClose = () => {
    this.setState({ nitsAnimate: "off" });
  };

  arsani = () => {
    var audio = new Audio(
      "https://sound.peal.io/ps/audios/000/001/509/original/youtube.mp3?1487857996"
    );
    audio.play();
    this.setState({ arsaniAnimate: "animatedIn-Arsani" });
  };

  arsaniClose = () => {
    this.setState({ arsaniAnimate: "off" });
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
          <Image src={Nits} className={this.state.nitsAnimate + " " + "nits"} />
        </Konami>

        <Konami
          action={this.arsani}
          code={arsaniCode}
          timeout={16000}
          onTimeout={this.arsaniClose}
          className="arsaniKonami"
        >
          <Image
            src={Arsani}
            className={this.state.arsaniAnimate + " " + "arsani"}
          />
        </Konami>
      </div>
    );
  }
}
