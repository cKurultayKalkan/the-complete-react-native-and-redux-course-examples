import React, { Component } from 'react';
import { View } from 'react-native';
import { Header, Button, Spinner } from './components/common'
import firebase from 'firebase'
import LoginForm from './components/LoginForm'

class App extends Component {

  state = {loggedIn: null};

  componentWillMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyC0HOe_ntW2mK9roDGP27UxMaKEW5Vtf74",
      authDomain: "okk-sumbul.firebaseapp.com",
      databaseURL: "https://okk-sumbul.firebaseio.com",
      projectId: "okk-sumbul",
      storageBucket: "okk-sumbul.appspot.com",
      messagingSenderId: "1019072249963"
    });

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({loggedIn: true});
      } else {
        this.setState({loggedIn: false});
      }
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
            <Button onPress={() => firebase.auth().signOut()}>
              Log Out
            </Button>
        );
      case false:
        return <LoginForm />;
      default:
        return <Spinner size="large"/>;
    }
  }

  render() {
    return (
        <View>
          <Header headerText="Authentication"/>
          {this.renderContent()}
        </View>
    )
  }
}


export default App;