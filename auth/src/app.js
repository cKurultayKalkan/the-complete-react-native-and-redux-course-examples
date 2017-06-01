import React, { Component } from 'react';
import { View } from 'react-native';
import { Header } from './components/common'
import firebase from 'firebase'
import LoginForm from './components/LoginForm'

class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyC0HOe_ntW2mK9roDGP27UxMaKEW5Vtf74",
      authDomain: "okk-sumbul.firebaseapp.com",
      databaseURL: "https://okk-sumbul.firebaseio.com",
      projectId: "okk-sumbul",
      storageBucket: "okk-sumbul.appspot.com",
      messagingSenderId: "1019072249963"
    });
  }

  render() {
    return (
        <View>
          <Header headerText="Authentication"/>
          <LoginForm/>
        </View>
    )
  }
}

export default App;