import { View, Text, ScrollView } from "react-native";
import React from "react";
import { ArrowRightIcon } from "react-native-heroicons/solid";
import RestaurantCard from "./RestaurantCard";

const FeaturedRow = ({ id, title, description }) => {
  return (
    <View>
      <View className="mt-4 flex-row items-center justify-between px-4">
        <Text className="font-bold text-lg">{title}</Text>
        <ArrowRightIcon color="#00CCBB" />
      </View>

      <Text className="text-xs px-4 text-gray-500">{description}</Text>

      <ScrollView
        horizontal
        contentContainerStyle={{
          paddingHorizontal: 15,
        }}
        showsHorizontalScrollIndicator={false}
        className="pt-4"
      >
        <RestaurantCard
          id={123}
          imgUrl="https://cdn.pixabay.com/photo/2014/05/26/14/53/sushi-354628_1280.jpg"
          title="Yo!Sushi"
          rating={4.5}
          genre="Janpanese"
          address="89 Main St."
          short_description="This is a Test"
          dishes={[]}
          long={20}
          lat={0}
        />
        <RestaurantCard
          id={123}
          imgUrl="https://cdn.pixabay.com/photo/2016/10/25/13/42/indian-1768906_1280.jpg"
          title="Vegetarian"
          rating={4.8}
          genre="Indian"
          address="20 Yonge St."
          short_description="This is a Test"
          dishes={[]}
          long={20}
          lat={0}
        />
        <RestaurantCard
          id={123}
          imgUrl="https://cdn.pixabay.com/photo/2016/06/08/00/03/pizza-1442946_1280.jpg"
          title="Nice Pizza"
          rating={4.2}
          genre="Italian"
          address="100 Hero St."
          short_description="This is a Test"
          dishes={[]}
          long={20}
          lat={0}
        />
      </ScrollView>
    </View>
  );
};

export default FeaturedRow;
