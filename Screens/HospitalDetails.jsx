import {
  View,
  Text,
  Image,
  SafeAreaView,
  StatusBar,
  FlatList,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import axios from "axios";
import PageHeader from "../components/shared/PageHeader";
import { FontAwesome6 } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const HospitalDetails = () => {
  const { id } = useRoute().params;
  const navigate = useNavigation();
  const { width } = Dimensions.get("window");
  const [hospital, setHospital] = useState(null);

  useEffect(() => {
    const getHospitalDetails = async () => {
      try {
        const { data } = await axios.get(
          `https://doctor-appointment-webapp-bakend.onrender.com/api/hospitals/${id}`
        );
        setHospital(data);
      } catch (error) {
        console.error("Error fetching hospital details:", error);
      }
    };
    getHospitalDetails();
  }, [id]);

  const icons = [
    { icon: "web", name: "Website" },
    { icon: "email", name: "Email" },
    { icon: "phone", name: "Phone" },
    { icon: "map", name: "Direction" },
    { icon: "share", name: "Share" },
  ];

  if (!hospital) {
    return (
      <View className="relative flex-1 p-4">
        <StatusBar hidden />
        <View className="absolute z-50 w-full">
          <PageHeader title="" color="blue" />
        </View>
        <View className="animate-pulse">
          <View className="w-full h-52 bg-gray-300 rounded-md" />
          <View className="w-3/5 h-7 bg-gray-300 rounded-md mt-4" />
          <View className="w-full h-5 bg-gray-300 rounded-md mt-4" />
          <View className="w-4/5 h-5 bg-gray-300 rounded-md mt-4" />
          <View className="w-11/12 h-5 bg-gray-300 rounded-md mt-4" />
          <View className="w-full flex-row gap-x-3 items-center mt-4">
            <View className="w-5 h-5 bg-gray-300 rounded-full" />
            <View className="w-4/5 h-5 bg-gray-300 rounded-md" />
          </View>
          <View className="w-full flex-row gap-x-3 items-center mt-4">
            <View className="w-5 h-5 bg-gray-300 rounded-full" />
            <View className="w-4/5 h-5 bg-gray-300 rounded-md" />
          </View>
          <View className="w-full flex-row gap-x-3 items-center mt-4">
            <View className="w-5 h-5 bg-gray-300 rounded-full" />
            <View className="w-4/5 h-5 bg-gray-300 rounded-md" />
          </View>
          <View className="mt-4 py-3">
            <FlatList
              data={icons}
              numColumns={6}
              columnWrapperStyle={{
                flex: 1,
                justifyContent: "space-between",
                marginVertical: 6,
              }}
              renderItem={({ item }) => (
                <View className="items-center gap-y-1">
                  <View className="bg-gray-300 rounded-full w-12 h-12 items-center justify-center" />
                  <View className="w-12 h-3 bg-gray-300 rounded-md mt-1" />
                </View>
              )}
            />
          </View>
        </View>
      </View>
    );
  }

  return (
    <SafeAreaView className="relative flex-1 bg-white">
      <StatusBar hidden />
      <View className="absolute z-50 w-full">
        <PageHeader title={""} color="black" />
      </View>
      <View>
        {hospital.images && hospital.images.length > 0 ? (
          <FlatList
            data={hospital.images}
            horizontal
            pagingEnabled
            renderItem={({ item }) => (
              <Image
                source={{ uri: item.imageUrl }}
                style={{ width, height: 200 }}
              />
            )}
            keyExtractor={(item, index) => index.toString()}
          />
        ) : (
          <Text>No image available</Text>
        )}
      </View>
      <View className=" p-3">
        <Text className="text-lg font-bold">{hospital.name}</Text>
        <View className="w-full py-2 border-b border-gray-400">
          <FlatList
            data={hospital.category}
            horizontal
            renderItem={({ item, index }) => (
              <Text className="pr-3 font-bold text-gray-500 py-2" key={index}>
                {item}
              </Text>
            )}
          />
        </View>
        <View className="my-2 text-gray-600 flex-row gap-x-3 items-center pr-4">
          <FontAwesome6 name="location-pin" size={20} color="blue" />
          <Text>{hospital.address}</Text>
        </View>
        <View className="my-2 flex-row gap-x-3 items-center">
          <AntDesign name="clockcircle" size={20} color="blue" />
          <Text>8:00 AM - 9:30 PM</Text>
        </View>
        <View className="py-3 border-b border-gray-400">
          <FlatList
            data={icons}
            numColumns={6}
            columnWrapperStyle={{
              flex: 1,
              justifyContent: "space-between",
              marginVertical: 6,
            }}
            renderItem={({ item }) => (
              <View className="items-center gap-y-1">
                <TouchableOpacity className="bg-blue-100 rounded-full w-[50px] h-[50px] items-center justify-center">
                  <MaterialCommunityIcons
                    name={item.icon}
                    size={25}
                    color="blue"
                  />
                </TouchableOpacity>
                <Text className="font-bold">{item.name}</Text>
              </View>
            )}
          />
        </View>
        <View className=" my-3">
          <Text className=" font-bold text-xl my-2">About</Text>
          <Text className=" font-bold text-gray-700 ">
            {hospital.description}
          </Text>
        </View>
        <View className="items-center h-[210px] justify-end">
          <TouchableOpacity
            className="px-5 py-4 bg-blue-700 my-6 w-4/5 rounded-full"
            onPress={() => {
              navigate.navigate("bookappointment", { hospital: hospital });
            }}
          >
            <Text className="text-center font-bold text-white text-lg">
              Book Appointment
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HospitalDetails;
