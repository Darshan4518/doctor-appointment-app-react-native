import { View, Text, TouchableOpacity, FlatList, Image } from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { ActivityIndicator } from "react-native"; // Import the ActivityIndicator component
import { useNavigation } from "@react-navigation/native";

const HospitalCard = () => {
  const navigate = useNavigation();
  const [hospitals, setHospitals] = useState([]);
  const [loading, setLoading] = useState(true); // State to manage loading

  useEffect(() => {
    axios
      .get(
        "https://doctor-appointment-webapp-bakend.onrender.com/api/hospitals"
      )
      .then((res) => {
        setHospitals(res.data);
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
      <View className="flex-col mx-2 w-[250px] border border-gray-400 my-2 rounded-xl overflow-hidden">
        <View className="w-full h-[120px] bg-gray-300" />
        <View className="py-2 w-full bg-gray-200">
          <View className="w-3/4 h-4 bg-gray-300 rounded-md mt-2 mx-3" />
          <View className="w-1/2 h-4 bg-gray-300 rounded-md mt-2 mx-3" />
        </View>
      </View>
    );
  };

  return (
    <View>
      <View className="flex-row justify-between items-center">
        <Text className="font-bold text-lg">Our Premium Hospitals</Text>
      </View>
      <View className="my-3 w-full">
        {loading ? (
          // Render skeleton loaders while loading
          <FlatList
            data={Array.from({ length: 2 })}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={renderSkeleton}
            keyExtractor={(item, index) => index.toString()}
          />
        ) : (
          // Render actual data after loading
          <FlatList
            data={hospitals}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({ item, index }) =>
              index < 2 && (
                <TouchableOpacity
                  className="flex-col mx-2 w-[250px] border border-gray-400 my-2 rounded-xl overflow-hidden"
                  onPress={() => {
                    navigate.navigate("hospitalDetails", { id: item._id });
                  }}
                >
                  <View className="w-full h-[120px]">
                    <Image
                      source={{ uri: item.images[0].imageUrl }}
                      className="w-[100%] h-[100%] object-cover"
                    />
                  </View>
                  <View className="py-2 w-full bg-slate-50">
                    <Text className="font-semibold text-[18px] px-3">
                      {item.name}
                    </Text>
                    <Text className="px-3 my-1 text-gray-700">
                      {item.address}
                    </Text>
                  </View>
                </TouchableOpacity>
              )
            }
          />
        )}
      </View>
    </View>
  );
};

export default HospitalCard;
