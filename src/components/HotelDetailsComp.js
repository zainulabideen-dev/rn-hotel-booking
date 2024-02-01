import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';

export default function HotelDetailsComp({item, navigation}) {
  return (
    <View
      style={{
        margin: 10,
        backgroundColor: 'white',
        elevation: 2,
        borderRadius: 15,
      }}>
      <Image
        style={{
          width: '100%',
          height: 200,
          borderTopRightRadius: 15,
          borderTopLeftRadius: 15,
        }}
        resizeMode="cover"
        source={{uri: item?.images[0]}}
      />
      <View style={{padding: 15}}>
        <Text
          style={{
            color: 'black',
            fontWeight: '900',
            fontSize: 20,
          }}>
          {item?.name}
        </Text>
        <Text
          style={{
            color: 'black',
          }}>
          {item?.address}
        </Text>
        <Text
          style={{
            color: 'black',
          }}>
          {item?.totalViews} reviews
        </Text>
        <Text
          style={{
            color: 'black',
          }}>
          {item?.ratings} /5
        </Text>
        <View style={{flexDirection: 'row', justifyContent: 'center'}}>
          <TouchableOpacity
            onPress={() => navigation.navigate('HotelDetailsScreen', {item})}>
            <Text
              style={{
                backgroundColor: 'black',
                color: 'white',
                paddingHorizontal: 20,
                paddingVertical: 10,
                borderRadius: 20,
              }}>
              More Details
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
