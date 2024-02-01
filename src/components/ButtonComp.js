import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';

export default function ButtonComp({onPress, label, marginTop = 20}) {
  return (
    <TouchableOpacity onPress={() => onPress()}>
      <Text
        style={{
          color: 'white',
          backgroundColor: '#2E86C1',
          marginTop: marginTop,
          padding: 12,
          fontWeight: '700',
          textAlign: 'center',
          borderRadius: 20,
        }}>
        {label}
      </Text>
    </TouchableOpacity>
  );
}
