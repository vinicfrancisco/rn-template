import React, { Component } from "react";
import { Router, Stack, Scene } from "react-native-router-flux";
import * as Pages from "~pages";
import { colors } from "~/assets/styles";

export default class Routes extends Component {
  render() {
    return (
      <Router>
        <Stack key="root">
          <Scene
            navigationBarStyle={{
              backgroundColor: colors.primary
            }}
            key="home"
            component={Pages.Home}
            title="RN Template"
            titleStyle={{
              color: colors.white
            }}
          />
        </Stack>
      </Router>
    );
  }
}
