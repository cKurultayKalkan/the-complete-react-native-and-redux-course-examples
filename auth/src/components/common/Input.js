import React from 'react';
import { Text, View, TextInput } from 'react-native'

const Input = ({label, secureTextEntry, placeholder, value}) => {

  const {inputStyle, labelStyle, containerStyle, onChangeText} = styles;

  return (
      <View style={containerStyle}>
        <Text style={labelStyle}>{label}</Text>
        <TextInput style={inputStyle}
                   value={value}
                   autoCorrect={false}
                   secureTextEntry={secureTextEntry}
                   placeholder={placeholder}
                   onChangeText={onChangeText}
        />
      </View>
  )
};

const styles = {
  inputStyle: {
    flex: 2,
    color: '#000',
    fontSize: 18,
    lineHeight: 23,
    paddingRight:5,
    paddingLeft:5
  },
  labelStyle: {
    fontSize: 18,
    flex: 1,
    paddingLeft:20
  },
  containerStyle: {
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1
  }
};

export { Input }