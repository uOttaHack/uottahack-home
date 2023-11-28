import React, { Component } from "react";
import "./Contact.css";
import { Button } from "semantic-ui-react";

class Contact extends Component {
  render() {
    return (
      <div className="Contact" id="Contact">
        <p>
          We're always excited to partner with like minded and innovative groups
          both on campus and professionally. Reach out to us if you'd like to
          explore a new venture!
        </p>

        <div className="buttons">
          <h3>Interested in sponsoring our hackathon?</h3>
          <Button animated size="large" href="mailto:sponsorship@uottahack.ca">
            <Button.Content visible>
              Message our Sponsorship Team{" "}
            </Button.Content>
            <Button.Content hidden>sponsorship@uottahack.ca</Button.Content>
          </Button>

          <h3>Would you like to partner with us for an on-campus event?</h3>
          <Button animated size="large" href="mailto:logistics@uottahack.ca">
            <Button.Content visible>Message our Community Team</Button.Content>
            <Button.Content hidden>marketing@uottahack.ca</Button.Content>
          </Button>

          <h3>Looking for promotion or communication help? </h3>
          <Button animated size="large" href="mailto:marketing@uottahack.ca">
            <Button.Content visible>Message our Marketing Team</Button.Content>
            <Button.Content hidden>marketing@uottahack.ca</Button.Content>
          </Button>

          <h3>For any other inquiries please contact the Co-Directors!</h3>
          <Button animated size="large" href="mailto:chair@uottahack.ca">
            <Button.Content visible>Message the Co-Directors</Button.Content>
            <Button.Content hidden>chair@uottahack.ca</Button.Content>
          </Button>
        </div>
      </div>
    );
  }
}

export default Contact;
