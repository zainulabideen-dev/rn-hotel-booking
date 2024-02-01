import {View, Text, SafeAreaView, Image, StatusBar} from 'react-native';
import React, {useState} from 'react';
import TextInputComp from '../../components/TextInputComp';
import ButtonComp from '../../components/ButtonComp';
import {toastShow} from '../../config/toast';
import {AppLoaderModal} from '../../modals/AppLoaderModal';

export default function SignInScreen({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showLoader, setShowLoader] = useState(false);

  async function _signIn() {
    navigation.navigate('HomeScreen');
    return;
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    if (!reg.test(email)) {
      toastShow('error', 'please provide a valid email');
      return;
    }
    if (password.length < 5) {
      toastShow('error', 'please provide a 5 digit password');
      return;
    }
    setShowLoader(true);
    setTimeout(() => {
      navigation.navigate('HomeScreen');
    }, 3000);
  }
  return (
    <SafeAreaView style={{flex: 1, padding: 15, backgroundColor: 'white'}}>
      <StatusBar backgroundColor={'#2E86C1'} />
      <AppLoaderModal visible={showLoader} />
      <View style={{flex: 1}}>
        <Text
          style={{
            fontSize: 30,
            color: 'black',
            fontWeight: 'bold',
            marginLeft: 10,
            textAlign: 'center',
          }}>
          Sign in to Continue
        </Text>
        <View
          style={{
            flex: 0.4,
            paddingTop: 20,
          }}>
          <Image
            style={{
              width: '100%',
              height: '100%',
              borderRadius: 20,
            }}
            source={require('../../assets/images/signIn.jpeg')}
          />
        </View>
        <View
          style={{
            flex: 0.6,
            paddingTop: 40,
          }}>
          <TextInputComp
            onChangeText={text => setEmail(text)}
            placeholder={'email'}
            keyboardType={'email-address'}
          />
          <TextInputComp
            placeholder={'password'}
            keyboardType={'default'}
            secureTextEntry={true}
            onChangeText={text => setPassword(text)}
          />
          <ButtonComp
            label={'Sign In'}
            marginTop={10}
            onPress={() => _signIn()}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}
