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
          short_description="sushi is a staple rice dish of Japanese cuisine, consisting of cooked rice flavoured with vinegar and a variety of vegetable, egg, or raw seafood garnishes and served cold."
          dishes={[
            {
              _id: "Japan1",
              name: "Sashimi",
              short_description:
                "sashimi is thinly sliced raw meat, typically fish that is served without rice.",
              price: 40,
              imgUrl:
                "https://cdn.pixabay.com/photo/2015/03/23/10/27/sushi-685912_1280.jpg",
            },
            {
              _id: "Japan2",
              name: "Sashimi",
              short_description:
                "sashimi is thinly sliced raw meat, typically fish that is served without rice.",
              price: 40,
              imgUrl:
                "https://cdn.pixabay.com/photo/2015/03/23/10/27/sushi-685912_1280.jpg",
            },
            {
              _id: "Japan3",
              name: "Sashimi",
              short_description:
                "sashimi is thinly sliced raw meat, typically fish that is served without rice.",
              price: 40,
              imgUrl:
                "https://cdn.pixabay.com/photo/2015/03/23/10/27/sushi-685912_1280.jpg",
            },
          ]}
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
          short_description="A typical Indian vegetarian meal consists of dal (beans), roti (bread) and/or rice, vegetables, and yogurt."
          dishes={[
            {
              _id: "India1",
              name: "Samosa",
              short_description:
                "A samosa is a fried South Asian pastry with a savoury filling.",
              price: 20,
              imgUrl:
                "https://cdn.pixabay.com/photo/2016/06/26/22/46/india-1481500_1280.jpg",
            },
            {
              _id: "India2",
              name: "Samosa",
              short_description:
                "A samosa is a fried South Asian pastry with a savoury filling.",
              price: 20,
              imgUrl:
                "https://cdn.pixabay.com/photo/2016/06/26/22/46/india-1481500_1280.jpg",
            },
            {
              _id: "India3",
              name: "Samosa",
              short_description:
                "A samosa is a fried South Asian pastry with a savoury filling.",
              price: 20,
              imgUrl:
                "https://cdn.pixabay.com/photo/2016/06/26/22/46/india-1481500_1280.jpg",
            },
          ]}
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
          short_description="Pizza is often considered to be a savory food made into a round shape and cut into wedges for serving."
          dishes={[
            {
              _id: "Italy1",
              name: "Hawaii Pizza",
              short_description:
                "Classic Hawaiian Pizza combines pizza sauce, cheese, cooked ham, and pineapple. ",
              price: 17,
              imgUrl:
                "https://cdn.pixabay.com/photo/2016/04/14/19/56/pizza-hawaiian-1329621_1280.jpg",
            },
            {
              _id: "Italy2",
              name: "Hawaii Pizza",
              short_description:
                "Classic Hawaiian Pizza combines pizza sauce, cheese, cooked ham, and pineapple.",
              price: 17,
              imgUrl:
                "https://cdn.pixabay.com/photo/2016/04/14/19/56/pizza-hawaiian-1329621_1280.jpg",
            },
            {
              _id: "Italy3",
              name: "Hawaii Pizza",
              short_description:
                "Classic Hawaiian Pizza combines pizza sauce, cheese, cooked ham, and pineapple.",
              price: 17,
              imgUrl:
                "https://cdn.pixabay.com/photo/2016/04/14/19/56/pizza-hawaiian-1329621_1280.jpg",
            },
          ]}
          long={20}
          lat={0}
        />
      </ScrollView>
    </View>
  );
};

export default FeaturedRow;
