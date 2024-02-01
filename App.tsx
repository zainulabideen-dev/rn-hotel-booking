import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashScreen from './src/screens/splash';
import SignInScreen from './src/screens/signIn';
import Toast from 'react-native-toast-message';
import HomeScreen from './src/screens/home';
import HotelDetailsScreen from './src/screens/hotelDetails';

const Stack = createNativeStackNavigator();

function App(): React.JSX.Element {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="SplashScreen"
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="SplashScreen" component={SplashScreen} />
          <Stack.Screen name="SignInScreen" component={SignInScreen} />
          <Stack.Screen name="HomeScreen" component={HomeScreen} />
          <Stack.Screen
            name="HotelDetailsScreen"
            component={HotelDetailsScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
      <Toast position="top" topOffset={50} />
    </>
  );
}

export default App;
