import React, { useState, useEffect } from "react";
import { useUser } from "@clerk/clerk-expo";
import { View, Text, Image, TouchableOpacity } from "react-native";

const Profile = () => {
  const { user } = useUser();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user) {
      setLoading(false);
    }
  }, [user]);

  return (
    <View className="flex-1 items-center p-5 bg-white">
      {loading ? (
        <View className="items-center">
          <View className="w-32 h-32 mt-10 bg-gray-300 rounded-full" />
          <View className="w-40 h-6 mt-5 bg-gray-300 rounded-md" />
          <View className="w-60 h-4 mt-2 bg-gray-300 rounded-md" />
          <View className="mt-10 w-40 h-12 bg-gray-300 rounded-full" />
          <View className="mt-5 w-40 h-12 bg-gray-300 rounded-full" />
        </View>
      ) : (
        <>
          <Image
            source={{ uri: user.imageUrl }}
            className="w-32 h-32 rounded-full mt-10"
            style={{ width: 128, height: 128, borderRadius: 64 }}
          />
          <Text className="text-2xl font-bold mt-5">{user.fullName}</Text>
          <Text className="text-sm text-gray-600">
            {user.emailAddresses.toString()}
          </Text>
          <TouchableOpacity
            className="mt-10 px-5 py-3 bg-blue-500 rounded-full"
            style={{
              backgroundColor: "#1E90FF",
              paddingVertical: 10,
              paddingHorizontal: 20,
              borderRadius: 30,
            }}
          >
            <Text className="text-white font-bold">Edit Profile</Text>
          </TouchableOpacity>

          <TouchableOpacity
            className="mt-5 px-5 py-3 bg-red-500 rounded-full"
            style={{
              backgroundColor: "#FF4500",
              paddingVertical: 10,
              paddingHorizontal: 20,
              borderRadius: 30,
            }}
          >
            <Text className="text-white font-bold">Logout</Text>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
};

export default Profile;
