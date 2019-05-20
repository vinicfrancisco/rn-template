import React from 'react';
import { Router, Stack, Scene } from 'react-native-router-flux';
import * as Pages from '~pages';
import { colors } from '~/assets/styles';

const Routes = () => (
  <Router>
    <Stack key="root">
      <Scene
        navigationBarStyle={{
          backgroundColor: colors.primary,
        }}
        key="home"
        component={Pages.Home}
        title="RN Template"
        titleStyle={{
          color: colors.white,
        }}
      />
    </Stack>
  </Router>
);
export default Routes;
