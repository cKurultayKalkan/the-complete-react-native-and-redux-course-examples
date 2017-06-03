import React, { Component } from 'react';
import { Text } from 'react-native';
import { Button, Card, CardSection, Input, Spinner } from './common'
import firebase from 'firebase'

class LoginForm extends Component {
  state = {email: '', password: '', error: '', loading: false};

  onButtonPress() {
    const {email, password} = this.state;

    this.setState({error: '', loading: true});

    firebase.auth().signInWithEmailAndPassword(email, password)
        .catch(() => {
          firebase.auth().createUserWithEmailAndPassword(email, password)
              .catch(() => {
                this.setState({error: 'Authentication failed', loading: false})
              })
        })
  }

  renderButton() {
    if (this.state.loading) {
      return <Spinner size="small"/>
    }
    return (
        <Button onPress={this.onButtonPress.bind(this)}>
          Log in
        </Button>
    )
  }

  render() {
    return (
        <Card>
          <CardSection>
            <Input label="Email"
                   placeholder="user@gmail.com"
                   value={this.state.email}
                   onChangeText={email => this.setState({email})}
            />
          </CardSection>
          <CardSection>
            <Input label="Password"
                   secureTextEntry
                   placeholder="password"
                   value={this.state.password}
                   onChangeText={password => this.setState({password})}/>
          </CardSection>
          <Text style={styles.errorTextStyle}>
            {this.state.error}
          </Text>
          <CardSection>
            {this.renderButton()}
          </CardSection>
        </Card>
    )
  }
}

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
}

export default LoginForm