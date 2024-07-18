import { View, Text, FlatList, Image, Dimensions } from "react-native";
import React from "react";

const Slider = () => {
  const Sliders = [
    {
      id: 1,
      imgUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7ESzXOJsJmA5b0DCoSaMLxPlG_1UmCAQURlMMsgd3jOgcOxLN5PaOf_4ymoyyn5e0Zjk&usqp=CAU",
    },
    {
      id: 2,
      imgUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3i4FbUjL55eyq7ZMhFTHMJ2_mVjoOlu_2RZbIqL9LE1moPEL8Vg34WDTQZpBvkIvd2_Q&usqp=CAU",
    },
  ];
  return (
    <View className=" mt-4">
      <FlatList
        data={Sliders}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <Image
            source={{ uri: item.imgUrl }}
            style={{ width: Dimensions.get("screen").width * 0.9, height: 170 }}
            className=" mx-1 rounded-lg"
          />
        )}
      />
    </View>
  );
};

export default Slider;
