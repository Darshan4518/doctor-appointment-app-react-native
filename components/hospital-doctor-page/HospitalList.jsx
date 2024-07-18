import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";

import { FontAwesome6 } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const HospitalList = ({ catName }) => {
  const navigate = useNavigation();
  const [hospitals, setHospitals] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(
        `https://doctor-appointment-webapp-bakend.onrender.com/api/filter/hospitals?catName=${catName}`
      )
      .then((res) => {
        setHospitals(res.data);
        setLoading(false); // Set loading to false after data is fetched
      })
      .catch((err) => {
        console.log(err);
        setLoading(false); // Set loading to false in case of an error
      });
  }, [catName]);

  // Function to render skeleton loader
  const renderSkeleton = () => {
    return (
      <View className="w-full border border-gray-400 my-2 rounded-xl overflow-hidden">
        <View className="w-full h-[150px] bg-gray-300" />
        <View className="py-2 w-full bg-gray-200">
          <View className="w-3/4 h-4 bg-gray-300 rounded-md mt-2 mx-3" />
          <View className="w-1/2 h-4 bg-gray-300 rounded-md mt-2 mx-3" />
          <View className="w-full py-2">
            {[...Array(3)].map((_, index) => (
              <View
                key={index}
                className="px-3 w-10 h-4 bg-gray-300 rounded-md mx-1"
              />
            ))}
          </View>
          <View className="px-3 my-2 flex-row items-center">
            <View className="w-5 h-5 bg-gray-300 rounded-full" />
            <View className="pl-2 w-20 h-4 bg-gray-300 rounded-md ml-2" />
          </View>
          <View className="px-3 my-2 flex-row items-center">
            <View className="w-5 h-5 bg-gray-300 rounded-full" />
            <View className="pl-2 w-20 h-4 bg-gray-300 rounded-md ml-2" />
          </View>
        </View>
      </View>
    );
  };

  // Function to render the actual hospital item
  const renderHospital = (item) => {
    return (
      <TouchableOpacity
        key={item._id}
        className="w-full border border-gray-400 my-2  rounded-xl overflow-hidden "
        onPress={() => {
          navigate.navigate("hospitalDetails", { id: item._id });
        }}
      >
        <View className="w-full h-[150px]">
          <Image
            source={{ uri: item.images[0].imageUrl }}
            className="w-[100%] h-[100%] object-cover"
          />
        </View>
        <View className="py-2 w-full bg-slate-50">
          <Text className="font-semibold text-[18px] px-3">{item.name}</Text>
          <View className="w-full py-2 border-b-0.5 border-gray-400">
            <ScrollView horizontal>
              {item.category.map((categoryItem, index) => (
                <Text key={index} className="px-3 font-bold text-gray-500">
                  {categoryItem}
                </Text>
              ))}
            </ScrollView>
          </View>
          <View className="px-3 my-2 text-gray-600 flex-row items-center">
            <FontAwesome6 name="location-pin" size={20} color="blue" />
            <Text className="pl-2">{item.address}</Text>
          </View>
          <View className="px-3 my-2 text-gray-600 flex-row items-center">
            <AntDesign name="eye" size={22} color="blue" />
            <Text className="pl-2">660 Views</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View className="px-4 my-2">
      {loading ? (
        [...Array(2)].map((_, index) => (
          <View key={index}>{renderSkeleton()}</View>
        ))
      ) : (
        <View>
          {hospitals.length > 0 ? (
            hospitals.map((hospital) => renderHospital(hospital))
          ) : (
            <View className="flex-1 justify-center items-center">
              <Text>No hospitals found.</Text>
            </View>
          )}
        </View>
      )}
    </View>
  );
};

export default HospitalList;
