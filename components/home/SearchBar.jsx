import { View, Text, TextInput } from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
const SearchBar = ({ setSearchText }) => {
  const [searchVal, setSearchVal] = useState("");
  return (
    <View className=" mt-4">
      <View className=" flex flex-row gap-x-2 items-center border border-gray-500 h-12 rounded-full ">
        <Ionicons name="search" size={24} color="black" />
        <TextInput
          placeholder="Search..."
          className=" w-[85%] h-[100%] [WebkitLineClamp: 1] "
          onChangeText={(val) => {
            setSearchVal(val);
          }}
          onSubmitEditing={() => {
            setSearchText(searchVal);
          }}
        />
      </View>
    </View>
  );
};

export default SearchBar;
