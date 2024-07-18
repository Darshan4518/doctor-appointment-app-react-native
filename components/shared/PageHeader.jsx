import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const PageHeader = ({ tittle, color }) => {
  const naviage = useNavigation();
  return (
    <TouchableOpacity
      className="  mx-3 mt-3 mb-5 "
      onPress={() => {
        naviage.goBack();
      }}
    >
      <View className=" flex-row gap-x-3 items-center">
        <AntDesign name="arrowleft" size={24} color={color ? color : "black"} />
        <Text className=" font-bold text-lg">{tittle}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default PageHeader;
