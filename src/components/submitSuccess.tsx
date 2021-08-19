import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Card } from "./card";
import { LinksContainer } from "./links";

export default class SubmitSuccess extends Component<any> {
  public render() {
    return (
      <>
        <Card>
          <h1>Thank you for your submission!</h1>
          <p>
            Thank you so much for chucking your data directly into The V̵̦̀O̶̩͠Ǐ̶͖D̶̼͘. We really appreciate the time it took you to complete you to
            complete our new user application form and submit it for <strong>no one </strong>to see.
          </p>
          <p>Do your best to enjoy the rest of your day!</p>
        </Card>
        <LinksContainer>
          <Link to="/register">Return to Registration</Link>
          <a href="https://github.com/testsubject06" target="_blank" rel="noreferrer">
            Contact ̴̻͗Ù̶̮s̴̙͛
          </a>
        </LinksContainer>
      </>
    );
  }
}
