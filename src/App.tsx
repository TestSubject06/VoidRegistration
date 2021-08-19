import React from "react";
import { HashRouter, Redirect, Route, Switch } from "react-router-dom";
import styled from "styled-components";
import PrivacyPolicy from "./components/privacyPolicy";
import SubmitSuccess from "./components/submitSuccess";
import RegistrationFormContainer from "./containers/registrationForm";

const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;
Container.displayName = "Container";

const Header = styled.h1`
  margin-bottom: 50px;
  text-align: center;
`;
Header.displayName = "Header";

function App() {
  return (
    <Container>
      <Header>THE V̵̦̀O̶̩͠Ǐ̶͖D̶̼͘</Header>
      <HashRouter>
        <Switch>
          <Route path="/register" component={RegistrationFormContainer} />
          <Route path="/privacy" component={PrivacyPolicy} />
          <Route path="/submit" component={SubmitSuccess} />
          <Redirect to="register" />
        </Switch>
      </HashRouter>
    </Container>
  );
}

export default App;
