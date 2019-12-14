import React, { Component } from 'react';
import {
  Container,
  Content,
  Button,
  Form,
  DatePicker,
  Text,
} from 'native-base';
import * as Facebook from 'expo-facebook';
import firebase from 'firebase/app';
import 'firebase/firestore';
import { FACEBOOK_APPID } from 'react-native-dotenv';

export default props => {
  console.log(firebase.auth());
  return (
    <Container>
      <Content>
        <Form>
          <DatePicker
            defaultDate={new Date(2018, 4, 4)}
            minimumDate={new Date(2018, 1, 1)}
            maximumDate={new Date(2018, 12, 31)}
            locale={'en'}
            timeZoneOffsetInMinutes={undefined}
            modalTransparent={false}
            animationType={'fade'}
            androidMode={'default'}
            placeHolderText="Select date"
            textStyle={{ color: 'green' }}
            placeHolderTextStyle={{ color: '#d3d3d3' }}
            onDateChange={this.setDate}
            disabled={false}
          />
          <Text>Date: </Text>
        </Form>
      </Content>
    </Container>
  );
};
