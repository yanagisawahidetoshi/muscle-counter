import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createSwitchNavigator } from 'react-navigation';

import SignUp from 'app/src/screens/signUp';
import UserInput from 'app/src/screens/userInput';

export default createSwitchNavigator(
  {
    SignUp: SignUp,
    UserInput: UserInput,
  },
  {
    initialRouteName: 'SignUp',
  }
);
