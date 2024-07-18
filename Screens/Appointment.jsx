import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { FontAwesome6 } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useRoute } from "@react-navigation/native";

const Appointment = () => {
  const show = useRoute().params;

  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [deletingId, setDeletingId] = useState(null); // State to track which appointment is being deleted

  const getAppointmentData = () => {
    axios
      .get(
        "https://doctor-appointment-webapp-bakend.onrender.com/api/appointments"
      )
      .then((res) => {
        setAppointments(res.data);
        setLoading(false); // Set loading to false when data is fetched
      })
      .catch((error) => {
        console.error("Error fetching appointments:", error);
        setLoading(false); // Always set loading to false in case of error
      });
  };

  useEffect(() => {
    getAppointmentData();
  }, [show]);

  const deleteAppointment = async (id) => {
    setDeletingId(id); // Set the appointment id that is being deleted
    try {
      await axios.delete(
        `https://doctor-appointment-webapp-bakend.onrender.com/api/appointments/${id}`
      );
      getAppointmentData(); // Refresh the appointments after deletion
    } catch (error) {
      console.error("Error deleting appointment:", error);
    } finally {
      setDeletingId(null); // Reset deletingId after deletion attempt
    }
  };

  // Skeleton loading component
  const SkeletonAppointmentItem = () => (
    <View className="my-2 p-2 rounded-xl bg-gray-200 animate-pulse">
      <View className="h-28 w-full bg-gray-300 rounded-xl mb-2" />
      <View className="h-4 w-1/2 bg-gray-300 rounded mb-2" />
      <View className="h-4 w-1/3 bg-gray-300 rounded mb-2" />
      <View className="h-4 w-1/4 bg-gray-300 rounded mb-2" />
    </View>
  );

  return (
    <ScrollView className="p-3">
      <Text className="font-bold text-lg text-gray-600 my-2">
        My Appointments
      </Text>
      {loading ? (
        <>
          <SkeletonAppointmentItem />
          <SkeletonAppointmentItem />
          <SkeletonAppointmentItem />
        </>
      ) : appointments.length > 0 ? (
        // Render appointments if data is available
        appointments.map((appointment, ind) => (
          <View
            key={ind}
            className="my-2 border border-gray-300 p-2 rounded-xl"
          >
            <View className="flex-row gap-x-4">
              <Image
                source={{ uri: appointment.hospital?.images[0].imageUrl }}
                className="w-[110px] h-[110px] rounded-full"
              />
              <View>
                <Text className="font-bold text-lg">
                  {appointment.hospital?.name}
                </Text>
                <View className="my-2 text-gray-600 flex-row gap-x-3 items-center pr-4">
                  <FontAwesome6 name="location-pin" size={20} color="blue" />
                  <Text className="max-w-[220px]">
                    {appointment.hospital?.address}
                  </Text>
                </View>
                <View className="text-gray-600 flex-row gap-x-3 items-center pr-4">
                  <MaterialCommunityIcons name="web" size={24} color="blue" />
                  <Text className="max-w-[200px]">
                    {appointment.hospital?.website}
                  </Text>
                </View>
              </View>
            </View>
            <View className="p-3">
              <Text className="my-2 text-lg font-bold text-gray-600">
                UserInfo:
              </Text>
              <View className="ml-10 gap-y-2">
                <Text className="font-bold">Name: {appointment.userName}</Text>
                <Text className="font-bold">Email: {appointment.email}</Text>
                <Text className="font-bold">
                  Appointment Date:
                  <Text className=" text-red-400">
                    {appointment.date} {appointment.time}
                  </Text>
                </Text>
              </View>
            </View>
            <View className="p-2 flex-row items-center justify-between">
              <Text>If you want to Cancel Appointment ?</Text>
              {deletingId === appointment._id ? (
                // Show loading indicator while deleting
                <ActivityIndicator size="small" color="#0000ff" />
              ) : (
                <TouchableOpacity
                  className="p-2 border rounded-xl bg-blue-500"
                  onPress={() => {
                    deleteAppointment(appointment._id);
                  }}
                >
                  <Text className="text-white font-bold">Cancel</Text>
                </TouchableOpacity>
              )}
            </View>
          </View>
        ))
      ) : (
        // Render a message when no appointments are available
        <Text>No appointments found.</Text>
      )}
    </ScrollView>
  );
};

export default Appointment;
