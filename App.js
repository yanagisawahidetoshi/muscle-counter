import React from 'react';
import { AppLoading } from 'expo';
import { Container, Text } from 'native-base';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import { Provider } from 'react-redux';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import { createStore, combineReducers, compose } from 'redux';
import { createFirestoreInstance, firestoreReducer } from 'redux-firestore';
import {
  ReactReduxFirebaseProvider,
  firebaseReducer,
} from 'react-redux-firebase';
import {
  APIKEY,
  AUTHDOMEIN,
  DATABASEURL,
  PROJECTID,
  STORAGEBUCKET,
  MESSAGINGSENDERID,
} from 'react-native-dotenv';
import { createAppContainer } from 'react-navigation';
import RootStack from 'app/src/routes.js';

const fbConfig = {
  apiKey: 'AIzaSyBurBbnVbgy0h-w-j77IXbvBFpR5I9D9O4',
  authDomain: AUTHDOMEIN,
  databaseURL: DATABASEURL,
  projectId: PROJECTID,
  storageBucket: STORAGEBUCKET,
  messagingSenderId: MESSAGINGSENDERID,
};
const rrfConfig = {
  userProfile: 'users',
};
firebase.initializeApp(fbConfig);
const rootReducer = combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer,
});
const initialState = {};
const store = createStore(rootReducer, initialState);
const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance,
};

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isReady: false,
    };
  }

  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      ...Ionicons.font,
    });
    this.setState({ isReady: true });
  }

  render() {
    if (!this.state.isReady) {
      return <AppLoading />;
    }

    return (
      <Provider store={store}>
        <ReactReduxFirebaseProvider {...rrfProps}>
          <AppContainer />
        </ReactReduxFirebaseProvider>
      </Provider>
    );
  }
}
