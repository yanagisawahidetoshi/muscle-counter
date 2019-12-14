import React, { Component } from 'react';
import { Container, Content, Button, Icon, Text } from 'native-base';
import * as Facebook from 'expo-facebook';
import firebase from 'firebase/app';
import 'firebase/firestore';
import { FACEBOOK_APPID } from 'react-native-dotenv';

export default props => {
  async function loginWithFacebook() {
    await Facebook.initializeAsync(FACEBOOK_APPID);
    const {
      type,
      token,
      expires,
      permissions,
      declinedPermissions,
    } = await Facebook.logInWithReadPermissionsAsync({
      permissions: ['public_profile'],
    });
    if (type === 'success') {
      const credential = firebase.auth.FacebookAuthProvider.credential(token);
      await firebase
        .auth()
        .signInWithCredential(credential)
        .catch(error => {
          console.error(error);
        });
      await props.navigation.navigate('UserInput');
    }
  }

  return (
    <Container>
      <Content>
        <Button
          onPress={() => {
            loginWithFacebook();
          }}
        >
          <Text>FaceBook</Text>
        </Button>
      </Content>
    </Container>
  );
};
