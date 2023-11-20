import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ArrowLeftIcon } from 'react-native-heroicons/outline';
import { fetchTopRatedMovies } from '../api/MovieDb'; 
import MovieGrid from '../components/MovieGrid';

export default function TopRatedScreen() {
  const [topRated, setTopRated] = useState([]); 
  const navigation = useNavigation();

  useEffect(() => {
    getTopRatedMovies(); 
  }, []);

  const getTopRatedMovies = async () => {
    const data = await fetchTopRatedMovies(); 
    if (data && data.results) {
      setTopRated(data.results);
    }
  };

  const handleBackPress = () => {
    navigation.goBack();
  };

  return (
    <View className="flex-1 bg-neutral-800">
      {/* Header */}
      <View className="p-4 flex-row items-center">
        <TouchableOpacity onPress={handleBackPress}>
          <ArrowLeftIcon size={30} strokeWidth={2} color="white" />
        </TouchableOpacity>
        <Text className="text-white text-xl ml-4">Top Rated Movies</Text>
      </View>

      {/* Movie Grid */}
      <ScrollView>
        <MovieGrid data={topRated} /> 
      </ScrollView>
    </View>
  );
}
