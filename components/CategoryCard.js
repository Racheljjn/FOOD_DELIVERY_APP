import { View, Text, TouchableOpacity, Image, TextInput } from "react-native";
import React from "react";

const CategoryCard = ({ imgUrl, title }) => {
  return (
    <TouchableOpacity className=" mr-2">
      <Image source={{ uri: imgUrl }} className='h-20 w-20 rounded'/>
      <Text className="pt-2 text-black font-bold">
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CategoryCard;
