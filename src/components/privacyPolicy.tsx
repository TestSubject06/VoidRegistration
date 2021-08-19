import React from "react";
import { Component } from "react";
import { Link } from "react-router-dom";
import { Card } from "./card";
import { LinksContainer } from "./links";

export default class PrivacyPolicy extends Component<any> {
  public render() {
    return (
      <>
        <Card>
          <h1>Our Privacy Pledge</h1>
          <p>
            We will never sell your personal data. Or any data for that matter. We don't even collect any data at all. Literally nothing.
            Therefore we cannot consume your data.
          </p>
          <p>You can trust ̸̬̈u̵̥̽ś̶̞.̵̨̚</p>
        </Card>
        <LinksContainer>
          <Link to="/register">Return to Registration</Link>
          <a href="https://github.com/testsubject06" target="_blank" rel="noreferrer">
            Contact U̷͉͌s̸̥̒
          </a>
        </LinksContainer>
      </>
    );
  }
}
