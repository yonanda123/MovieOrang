import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import ProgressiveImage from 'rn-progressive-image';
import {image185, fallbackMoviePoster} from '../api/MovieDb';

const {width, height} = Dimensions.get('window');

export default function MovieGrid({data}) {
  const navigation = useNavigation();

  return (
    <ScrollView>
      <View className="p-4">
        <View className="flex-row flex-wrap justify-between">
          {data.map((item, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => navigation.push('Movie', item)}
              className="mb-4"
              style={{width: '48%'}}>
              <View>
                <ProgressiveImage
                  source={{
                    uri: image185(item.poster_path) || fallbackMoviePoster,
                  }}
                  className="rounded-3xl"
                  style={{
                    width: '100%',
                    height: height * 0.32,
                    resizeMode: 'contain',
                  }}
                />
                <Text className="text-neutral-300 mt-2 text-center">
                  {item?.title?.length > 14
                    ? item.title.slice(0, 14) + '...'
                    : item.title}
                </Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </ScrollView>
  );
}
