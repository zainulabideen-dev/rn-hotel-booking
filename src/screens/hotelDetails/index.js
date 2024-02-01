import {
  View,
  Text,
  Dimensions,
  Image,
  Animated,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import React, {useRef, useState} from 'react';
import {_storeIntoAsyncStorage} from '../../config/asyncstorage';

export default function HotelDetailsScreen({navigation, route}) {
  let {item} = route.params;
  const scrollx = useRef(new Animated.Value(0)).current;
  const [currentIndex, setCurrentIndex] = useState(0);
  const slideRef = useRef(null);
  const {width, height} = Dimensions.get('screen');

  const onViewableItemsChanged = info => {
    setCurrentIndex(info.viewableItems[0].index);
  };

  const viewabilityConfigCallbackPairs = useRef([{onViewableItemsChanged}]);

  const OnBoardingItem = ({item}) => {
    return (
      <View
        style={{
          width,
          height: 300,
        }}>
        <Image
          source={{uri: item}}
          resizeMode="cover"
          style={{
            width,
            height: '100%',
          }}
        />
      </View>
    );
  };

  const Indicator = ({scrollx}) => {
    return (
      <View
        style={{
          flexDirection: 'row',
        }}>
        {item?.images.map((_, i) => {
          const inputRange = [(i - 1) * width, i * width, (i + 1) * width];
          const scale = scrollx.interpolate({
            inputRange,
            outputRange: [0.8, 1.4, 0.8],
            extrapolate: 'clamp',
          });
          const opacity = scrollx.interpolate({
            inputRange,
            outputRange: [0.6, 0.9, 0.8],
            extrapolate: 'clamp',
          });
          return (
            <Animated.View
              key={`ind=${i}`}
              style={{
                height: 10,
                width: 10,
                borderRadius: 5,
                backgroundColor: 'black',
                margin: 10,
                transform: [{scale}],
                opacity,
              }}
            />
          );
        })}
      </View>
    );
  };

  return (
    <View style={{flex: 1}}>
      <View
        style={{
          width,
          height: 300,
          alignItems: 'center',
        }}>
        <Animated.FlatList
          ref={slideRef}
          data={item?.images}
          keyExtractor={item => item}
          renderItem={({item}) => <OnBoardingItem item={item} />}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          onScroll={Animated.event(
            [{nativeEvent: {contentOffset: {x: scrollx}}}],
            {useNativeDriver: false},
          )}
          bounces={false}
          viewabilityConfigCallbackPairs={
            viewabilityConfigCallbackPairs.current
          }
        />
        <Indicator scrollx={scrollx} />
      </View>
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
      </View>
    </View>
  );
}
