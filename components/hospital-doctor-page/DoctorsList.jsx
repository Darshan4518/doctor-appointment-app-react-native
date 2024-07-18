import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";

const Skeleton = () => (
  <View className="px-5 py-3">
    {[...Array(3)].map((_, index) => (
      <View
        key={index}
        className="bg-gray-200 w-full h-[200px] flex-col my-3 px-3 py-2 rounded-xl"
      >
        <View className="flex-row">
          <View className="w-[120px] h-[120px] bg-gray-300 rounded-lg" />
          <View className="p-3 flex-1">
            <View className="h-6 bg-gray-300 rounded mb-2" />
            <View className="h-4 bg-gray-300 rounded mb-2 w-1/2" />
            <View className="h-4 bg-gray-300 rounded mb-2 w-3/4" />
            <View className="h-4 bg-gray-300 rounded mb-2 w-1/4" />
          </View>
        </View>
        <View className="items-center mt-4">
          <View className="px-5 py-2 bg-gray-300 w-full rounded-xl" />
        </View>
      </View>
    ))}
  </View>
);

const DoctorsList = ({ catName }) => {
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(
        `https://doctor-appointment-webapp-bakend.onrender.com/api/filter/doctors?catName=${catName}`
      )
      .then((res) => {
        setDoctors(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, [catName]);

  return (
    <SafeAreaView className="flex-1 bg-gray-100">
      {loading ? (
        <Skeleton />
      ) : (
        <View className="px-5 py-3">
          {doctors.length > 0 ? (
            doctors.map((item) => (
              <View
                className="bg-white w-full h-[200px] flex-col my-3 px-3 py-2 rounded-xl"
                key={item._id}
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
            ))
          ) : (
            <View className="flex-1 justify-center items-center">
              <Text>No Doctors found.</Text>
            </View>
          )}
        </View>
      )}
    </SafeAreaView>
  );
};

export default DoctorsList;
