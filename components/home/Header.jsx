import { View, Text, Image } from "react-native";
import React from "react";

import { useUser } from "@clerk/clerk-expo";
import { Ionicons } from "@expo/vector-icons";

const Header = () => {
  const { isLoaded, isSignedIn, user } = useUser();
  if (!isLoaded || !isSignedIn) {
    return null;
  }
  return (
    <View className="  flex flex-row items-center justify-between">
      <View className=" flex flex-row gap-3 items-center">
        <Image
          source={{ uri: user.imageUrl }}
          className=" w-12 h-12 rounded-full"
        />
        <View>
          <Text className=" font-bold ">Hello,👋</Text>
          <Text className=" font-bold text-lg">{user.fullName}</Text>
        </View>
      </View>
      <Ionicons name="notifications-outline" size={32} color="black" />
    </View>
  );
};

export default Header;
