import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";

const AllDoctorsList = () => {
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`https://doctor-appointment-webapp-bakend.onrender.com/api/doctors`)
      .then((res) => {
        setDoctors(res.data);
        setLoading(false); // Set loading to false after data is fetched
      })
      .catch((err) => {
        console.log(err);
        setLoading(false); // Set loading to false in case of an error
      });
  }, []);

  // Function to render skeleton loader
  const renderSkeleton = () => {
    return (
      <View className="bg-white w-full h-[200px] flex-col my-3 px-3 py-2 rounded-xl">
        <View className="flex-row">
          <View className="w-[120px] h-[120px] bg-gray-300 rounded-lg" />
          <View className="p-3">
            <View className="w-24 h-4 bg-gray-300 rounded-md mt-2" />
            <View className="w-32 h-4 bg-gray-300 rounded-md mt-2" />
            <View className="w-36 h-4 bg-gray-300 rounded-md my-2" />
            <View className="w-24 h-4 bg-gray-300 rounded-md" />
          </View>
        </View>
        <View className="items-center">
          <View className="px-5 py-2 bg-gray-300 my-4 w-full rounded-xl" />
        </View>
      </View>
    );
  };

  return (
    <ScrollView className="px-5 py-3">
      {loading
        ? Array.from({ length: 3 }).map((_, index) => (
            <View key={index}>{renderSkeleton()}</View>
          ))
        : doctors.map((item) => (
            <View
              key={item._id}
              className="bg-white w-full h-[200px] flex-col my-3 px-3 py-2 rounded-xl"
            >
              <View className="flex-row">
                <View className="w-[120px] h-[120px]">
                  <Image
                    source={{ uri: item.image }}
                    className="w-[100%] h-[100%] rounded-lg object-cover"
                  />
                </View>
                <View className="p-3">
                  <Text className="font-bold text-lg">{item.name}</Text>
                  <Text className="font-bold text-gray-700">
                    {item.category}
                  </Text>
                  <Text className="font-bold text-blue-700 my-2">
                    Experience: {item.yearsOfExperience} years
                  </Text>
                  <Text className="text-blue-800 underline font-bold">
                    View Details..
                  </Text>
                </View>
              </View>
              <View className="items-center">
                <TouchableOpacity className="px-5 py-2 bg-blue-100 my-4 w-full rounded-xl">
                  <Text className="text-center text-blue-700 font-bold text-lg">
                    Make an Appointment
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          ))}
    </ScrollView>
  );
};

export default AllDoctorsList;
