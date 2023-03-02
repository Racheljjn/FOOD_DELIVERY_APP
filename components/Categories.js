import { View, Text, ScrollView } from "react-native";
import React from "react";

import CategoryCard from "./CategoryCard";

const Categories = () => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ paddingHorizontal: 15, paddingTop: 10 }}
    >
      <CategoryCard
        imgUrl="https://cdn.pixabay.com/photo/2017/09/04/02/36/coming-soon-2712818_1280.jpg"
        title="Offers"
      />
      <CategoryCard
        imgUrl="https://cdn.pixabay.com/photo/2020/06/08/16/49/pizza-5275191_1280.jpg"
        title="Pizza"
      />
      <CategoryCard
        imgUrl="https://cdn.pixabay.com/photo/2017/10/15/11/41/sushi-2853382_1280.jpg"
        title="Sushi"
      />
      <CategoryCard
        imgUrl="https://cdn.pixabay.com/photo/2015/04/10/00/41/food-715542_1280.jpg"
        title="Asian"
      />
      <CategoryCard
        imgUrl="https://cdn.pixabay.com/photo/2018/12/04/16/49/tandoori-3856045_1280.jpg"
        title="Indian"
      />
    </ScrollView>
  );
};

export default Categories;
