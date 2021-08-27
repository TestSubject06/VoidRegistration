import { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { ThinCard } from "../components/card";
import Input from "../components/input";
import { LinksContainer } from "../components/links";
import * as _ from "lodash";
import { Button } from "../components/button";

const SubtitleText = styled.p`
  color: rgba(0, 0, 0, 0.8);
  font-size: 0.75rem;

  //specificity
  &&& {
    margin-top: -1rem;
  }
`;

interface State {
  username: string;
  password1: string;
  password2: string;
}

interface ValidationState {
  valid: boolean;
  message?: string;
}

export default class RegistrationFormContainer extends Component<{}, State> {
  // Optimization to prevent creating new functions every render.
  private updateUsername: (value: string) => void;
  private updatePassword1: (value: string) => void;
  private updatePassword2: (value: string) => void;

  constructor() {
    super({});

    this.state = {
      username: "",
      password1: "",
      password2: "",
    };

    this.updateUsername = this.updateValue("username").bind(this);
    this.updatePassword1 = this.updateValue("password1").bind(this);
    this.updatePassword2 = this.updateValue("password2").bind(this);
  }

  public render() {
    const passwordValidationState = this.validatePasswords(this.state.password1, this.state.password2);
    const usernameValidationState = this.validateUsername(this.state.username);

    // As there are more form elements, change this to an !_.some([...], vs => !vs.valid)
    const invalidForm = !usernameValidationState.valid || !passwordValidationState.valid;

    return (
      <>
        <ThinCard>
          <h1>Welcome to The Void!</h1>
          <SubtitleText>Please use the form below to register for an account in The Void.</SubtitleText>
          <Input
            id="username"
            placeholder="Enter a Username..."
            value={this.state.username}
            label="Username"
            validationMessage={usernameValidationState.message}
            onChange={this.updateUsername}
          />
          <Input
            id="password1"
            placeholder="Create a strong password..."
            value={this.state.password1}
            label="Password"
            type="password"
            onChange={this.updatePassword1}
          />
          <Input
            id="password2"
            placeholder="Confirm your password..."
            value={this.state.password2}
            label="Confirm Password"
            validationMessage={passwordValidationState.message}
            type="password"
            onChange={this.updatePassword2}
          />
          <Link to="/submit">
            <Button disabled={invalidForm}>Submit</Button>
          </Link>
        </ThinCard>
        <LinksContainer>
          <Link to="/privacy">Privacy Policy</Link>
          <a href="https://github.com/testsubject06" target="_blank" rel="noreferrer">
            Contact Us
          </a>
        </LinksContainer>
      </>
    );
  }

  private updateValue(target: string) {
    return (value: string) => {
      this.setState({ [target]: value } as Pick<State, keyof State>);
    };
  }

  // Normally these would be hoisted into a separate validation suite, but given the
  // nature of the assignment I didn't want to go THAT far out.
  private validatePasswords(password1: string, password2: string): ValidationState {
    if (password1.length === 0 || password2.length === 0) {
      return { valid: false }; //OK the user isn't done yet, so don't show them the error yet.
    }

    if (!_.isEqual(password1, password2)) {
      return { valid: false, message: "Your passwords don't match!" };
    }

    return { valid: true };
  }

  private validateUsername(username: string): ValidationState {
    if (username.length === 0) {
      return { valid: false };
    }
    if (username.length < 3) {
      return { valid: false, message: "Please enter at least 3 characters" };
    }
    if (username.length > 255) {
      return { valid: false, message: "Please enter no more than 255 characters" };
    }

    if(!/^\S+@\S+\.\S+$/.test(username)){
      return {
        valid: false,
        message: "Please enter an email address"
      }
    }

    return { valid: true };
  }
}
