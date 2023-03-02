import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import {
  ArrowLeftIcon,
  ChevronRightIcon,
  MapPinIcon,
  StarIcon,
} from "react-native-heroicons/solid";
import { QuestionMarkCircleIcon } from "react-native-heroicons/outline";

const RestaurantScreen = () => {
  const navigation = useNavigation();
  const {
    params: {
      id,
      imgUrl,
      title,
      rating,
      genre,
      address,
      short_description,
      dishes,
      long,
      lat,
    },
  } = useRoute();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <ScrollView>
      <View className="relative">
        <Image
          source={{ uri: imgUrl }}
          className="w-full h-56 bg-gray-300 p-4"
        />
      </View>
      <TouchableOpacity
        onPress={navigation.goBack}
        className="absolute top-14 left-5 p-2 bg-gray-100 rounded-full"
      >
        <ArrowLeftIcon size={20} color="#00CCBB" />
      </TouchableOpacity>
      <View className="bg-white">
        <View className="px-4 pt-4">
          <Text className="font-bold text-2xl">{title}</Text>
          <View className="flex-row space-x-2 my-1">
            <View className="flex-row items-center space-x-1">
              <StarIcon color="green" opacity={0.5} size={22} />
              <Text>
                <Text>{rating}</Text> - {genre}
              </Text>
            </View>
            <View className="flex-row items-center space-x-1">
              <MapPinIcon color="gray" opacity={0.4} size={22} />
              <Text className="text-xs text-gray-500">NearBy - {address}</Text>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default RestaurantScreen;
