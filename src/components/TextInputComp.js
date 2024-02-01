import {View, Text, TextInput} from 'react-native';
import React from 'react';

export default function TextInputComp({
  placeholder,
  keyboardType,
  secureTextEntry = false,
  onChangeText,
}) {
  return (
    <View
      style={{
        borderColor: '#CCD1D1',
        borderWidth: 1,
        borderRadius: 25,
        paddingHorizontal: 15,
        marginBottom: 15,
      }}>
      <TextInput
        placeholder={placeholder}
        keyboardType={keyboardType}
        secureTextEntry={secureTextEntry}
        onChangeText={text => onChangeText(text)}
      />
    </View>
  );
}
