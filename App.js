import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SignUpForm from './components/SignUpForm'
import SignInForm from './components/SignInForm'
import firebase from 'firebase'

export default class App extends React.Component {

  componentDidMount(){
    var config = {
    apiKey: "AIzaSyADHFs3S8F2C43_HNCeMFDvB_1a3acajGg",
    authDomain: "one-time-password-d5eab.firebaseapp.com",
    databaseURL: "https://one-time-password-d5eab.firebaseio.com",
    projectId: "one-time-password-d5eab",
    storageBucket: "one-time-password-d5eab.appspot.com",
    messagingSenderId: "564201764143"
  };
  firebase.initializeApp(config);
  }

  render() {
    return (
      <View style={styles.container}>
       <SignUpForm />
       <SignInForm />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});
