import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";

import Currency from "react-currency-formatter";
import { MinusCircleIcon, PlusCircleIcon } from "react-native-heroicons/solid";

import { useSelector, useDispatch } from "react-redux";
import {
  addToBasket,
  removeFromBasket,
  selectBasketItems,
  selectBasketItemsWithId,
} from "../features/basketSlice";

const DishRow = ({ id, name, description, price, imgUrl }) => {
  const dispatch = useDispatch();
  let items = useSelector((state) => selectBasketItemsWithId(state, id));
  const addItemToBasket = () => {
    dispatch(addToBasket({ id, name, description, price, imgUrl }));
  };
  const removeItemFromBasket = () => {
    if (!items.length > 0) return;
    dispatch(removeFromBasket({ id }));
  };

  return (
    <>
      <View className="bg-white p-4">
        <View className="flex-row ">
          <View className="flex-1 pr-2">
            <Text className="text-lg mb-1">{name}</Text>
            <Text className="text-gray-400">{description}</Text>
            <Text className="mt-2 text-gray-400">
              <Currency quantity={price} currency="CAD" />
            </Text>
          </View>
          <View>
            <Image
              style={{ borderWidth: 1, borderColor: "#F3F3F4" }}
              source={{ uri: imgUrl }}
              className="h-20 w-20 bg-gray-300 p-4"
            />
          </View>
        </View>
      </View>
      <View className="bg-white px-4">
        <View className="flex-row items-center space-x-2 pb-3">
          <TouchableOpacity
            onPress={removeItemFromBasket}
            disabled={!items.length}
          >
            <MinusCircleIcon
              color={items.length > 0 ? "#00CCBB" : "gray"}
              size={40}
            />
          </TouchableOpacity>
          <Text>{items.length ? items.length : 0}</Text>
          <TouchableOpacity onPress={addItemToBasket}>
            <PlusCircleIcon color="#00CCBB" size={40} />
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default DishRow;