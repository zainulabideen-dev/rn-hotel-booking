import {
  View,
  Text,
  SafeAreaView,
  ImageBackground,
  StatusBar,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import ButtonComp from '../../components/ButtonComp';

export default function SplashScreen({navigation}) {
  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar hidden />
      <ImageBackground
        resizeMode="cover"
        source={require('../../assets/images/splash.jpeg')}
        style={{
          flex: 1,
          justifyContent: 'flex-end',
        }}>
        <View
          style={{
            padding: 15,
            backgroundColor: 'black',
            borderTopRightRadius: 20,
            borderTopLeftRadius: 20,
            opacity: 0.5,
            position: 'absolute',
            bottom: 0,
            width: '100%',
            height: '25%',
          }}></View>
        <View
          style={{
            width: '100%',
            height: '25%',
            padding: 15,
          }}>
          <Text
            style={{
              fontSize: 30,
              color: 'white',
              fontWeight: '700',
            }}>
            Find your best place
          </Text>
          <Text
            style={{
              color: 'white',
              fontWeight: '400',
              marginTop: 10,
            }}>
            We are here to find the best hotel for you which full fill all your
            needs
          </Text>
          <ButtonComp
            label={'Get Started'}
            onPress={() => navigation.replace('SignInScreen')}
          />
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}
