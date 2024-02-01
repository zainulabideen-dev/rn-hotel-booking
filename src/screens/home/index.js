import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import HotelDetailsComp from '../../components/HotelDetailsComp';
import {AppLoaderModal} from '../../modals/AppLoaderModal';

export default function HomeScreen({navigation}) {
  const [allHotel, setAllHotel] = useState([]);
  const [hotel, setHotel] = useState([]);
  const [showLoader, setShowLoader] = useState(false);

  useEffect(() => {
    _fetchHotels();
  }, []);

  async function _fetchHotels() {
    setShowLoader(true);
    fetch('https://65ba72efb4d53c066552ef93.mockapi.io/api/getHotels')
      .then(response => response.json())
      .then(json => {
        setHotel(json.slice(0, 4));
        setAllHotel(json);
        setShowLoader(false);
      });
  }

  const Pagination = () => {
    let pages = [];
    for (let index = 0; index < allHotel.length / 4; index++) {
      pages.push(index);
    }

    return pages.map(index => {
      return (
        <TouchableOpacity
          onPress={() => {
            setShowLoader(true);
            setTimeout(() => {
              setHotel(allHotel.slice(index * 4, (index + 1) * 4));
              setShowLoader(false);
            }, 1000);
          }}>
          <View
            key={index}
            style={{
              width: 30,
              height: 30,
              borderRadius: 15,
              backgroundColor: 'green',
              marginLeft: 3,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              style={{
                color: 'white',
              }}>
              {index + 1}
            </Text>
          </View>
        </TouchableOpacity>
      );
    });
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <AppLoaderModal visible={showLoader} />
      <View style={{flex: 1}}>
        <View style={{flex: 0.9}}>
          <FlatList
            data={hotel}
            renderItem={({item}) => (
              <HotelDetailsComp item={item} navigation={navigation} />
            )}
            keyExtractor={(item, index) => index}
          />
        </View>
        <View
          style={{
            flex: 0.1,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Pagination />
        </View>
      </View>
    </SafeAreaView>
  );
}
