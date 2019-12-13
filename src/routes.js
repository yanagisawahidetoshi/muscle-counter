import React from 'react';

import SignUp from 'app/src/screens/signup';

import { createStackNavigator } from 'react-navigation-stack';
import { createSwitchNavigator } from 'react-navigation';

export default createStackNavigator({
  Home: {
    screen: SignUp,
  },
});
