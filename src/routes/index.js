import React, { Component } from "react";
import { Router, Stack, Scene } from "react-native-router-flux";
import * as Pages from "~pages";

export default class Routes extends Component {
  state = {};

  render() {
    return (
      <Router>
        <Stack key="root">
          <Scene key="home" component={Pages.Home} title="RN Template" />
        </Stack>
      </Router>
    );
  }
}
