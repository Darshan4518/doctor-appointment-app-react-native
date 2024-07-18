import { View, Text, Image, TouchableOpacity, FlatList } from "react-native";
import React from "react";
import PageHeader from "../shared/PageHeader";
import { FontAwesome6 } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const HospitalAppointmentInfo = ({ hospital }) => {
  const icons = [
    { icon: "web", name: "Website" },
    { icon: "email", name: "Email" },
    { icon: "phone", name: "Phone" },
    { icon: "map", name: "Direction" },
    { icon: "share", name: "Share" },
  ];

  return (
    <View className=" max-w-screen">
      <PageHeader tittle={"Book Appointment"} />
      <View className=" px-3">
        <View className=" flex-row gap-x-4 ">
          <View>
            <Image
              source={{ uri: hospital?.images[0].imageUrl }}
              className=" w-[100px] h-[100px] rounded-full"
            />
          </View>
          <View className=" flex-col gap-y-2">
            <Text className=" font-bold text-lg">{hospital.name}</Text>
            <View className=" text-gray-600 flex-row gap-x-3 items-center ">
              <FontAwesome6 name="location-pin" size={20} color="blue" />
              <Text className="w-[220px]">{hospital.address}</Text>
            </View>
          </View>
        </View>
        <View className="py-4 border-b border-gray-300">
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
      </View>
    </View>
  );
};

export default HospitalAppointmentInfo;
