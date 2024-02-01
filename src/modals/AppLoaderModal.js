import React from 'react';
import {Modal, StatusBar, View, Text} from 'react-native';
import {Chase} from 'react-native-animated-spinkit';

export const AppLoaderModal = ({visible, label = 'Loading...'}) => {
  return (
    <Modal transparent={true} visible={visible}>
      <StatusBar backgroundColor={'black'} />
      <View
        style={{
          flex: 1,
          backgroundColor: 'rgba(0,0,0,0.75)',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'white',
            flexDirection: 'row',
            paddingVertical: 20,
            paddingHorizontal: 30,
            borderRadius: 10,
          }}>
          <Chase size={20} color="black" />
          <Text style={{color: 'black', marginLeft: 20}}>{label}</Text>
        </View>
      </View>
    </Modal>
  );
};
