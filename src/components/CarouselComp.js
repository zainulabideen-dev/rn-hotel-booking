import {View, Animated, Image, Dimensions, SafeAreaView} from 'react-native';
import React, {useRef, useState} from 'react';

export default function CarouselComp({navigation, list}) {
  const slideRef = useRef(null);
  const {width, height} = Dimensions.get('screen');
  const scrollx = useRef(new Animated.Value(0)).current;
  const [currentIndex, setCurrentIndex] = useState(0);
  const onViewableItemsChanged = info => {
    setCurrentIndex(info.viewableItems[0].index);
  };
  const viewabilityConfigCallbackPairs = useRef([{onViewableItemsChanged}]);

  const OnBoardingItem = ({item}) => {
    return (
      <View
        style={{
          width: '100%',
          height: 300,
        }}>
        <Image
          source={{uri: item}}
          style={{
            width: '100%',
            height: 300,
            resizeMode: 'contain',
          }}
        />
      </View>
    );
  };

  const Indicator = ({scrollx}) => {
    return (
      <View
        style={{
          position: 'absolute',
          bottom: 20,
          flexDirection: 'row',
        }}>
        {list.map((_, i) => {
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
                backgroundColor: '#5649F8',
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

  async function scrollTo() {
    if (currentIndex < OnBoardingData.length - 1) {
      slideRef.current.scrollToIndex({index: currentIndex + 1});
    } else {
      navigation.replace('OtpScreen');
    }
  }

  return (
    <View
      style={{
        backgroundColor: 'white',
        width: '100%',
        height: 300,
      }}>
      <Animated.FlatList
        ref={slideRef}
        data={list}
        contentContainerStyle={{
          width: '100%',
          height: 300,
        }}
        keyExtractor={item => item}
        renderItem={({item}) => <OnBoardingItem item={item} />}
        horizontal
      />
      {/* <Indicator scrollx={scrollx} /> */}
    </View>
  );
}
