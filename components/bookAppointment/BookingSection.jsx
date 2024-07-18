import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  TextInput,
  ActivityIndicator,
} from "react-native";
import { useClerk, useUser } from "@clerk/clerk-expo";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";

const getOrdinalSuffix = (day) => {
  if (day > 3 && day < 21) return "th";
  switch (day % 10) {
    case 1:
      return "st";
    case 2:
      return "nd";
    case 3:
      return "rd";
    default:
      return "th";
  }
};

const getNext7Days = () => {
  const days = [];
  const today = new Date();

  for (let i = 0; i < 7; i++) {
    const nextDay = new Date(today);
    nextDay.setDate(today.getDate() + i);
    const dayOfMonth = nextDay.getDate();
    const ordinalDay = dayOfMonth + getOrdinalSuffix(dayOfMonth);
    const formattedDate = `${ordinalDay} ${nextDay.toLocaleDateString(
      undefined,
      { month: "long" }
    )}`;
    const formattedDay = {
      day: nextDay.toLocaleDateString(undefined, { weekday: "short" }),
      date: formattedDate,
    };
    days.push(formattedDay);
  }

  return days;
};

const generateHalfHourTimes = () => {
  const times = [];
  const addTime = (hours, minutes) => {
    const period = hours >= 12 ? "PM" : "AM";
    const formattedHours = hours % 12 === 0 ? 12 : hours % 12;
    const formattedMinutes = minutes === 0 ? "00" : minutes;
    times.push(`${formattedHours}:${formattedMinutes} ${period}`);
  };

  // Generate times from 8:00 AM to 11:30 AM
  for (let hour = 8; hour <= 11; hour++) {
    addTime(hour, 0);
    addTime(hour, 30);
  }

  // Generate times from 12:00 PM to 9:00 PM
  for (let hour = 12; hour <= 21; hour++) {
    addTime(hour, 0);
    addTime(hour, 30);
  }

  return times;
};

const BookingSection = ({ hospitalId }) => {
  const navigate = useNavigation();
  const days = getNext7Days();
  const [selectedDate, setSelectedDate] = useState();
  const [selectedTime, setSelectedTime] = useState();
  const [note, setNote] = useState("");
  const times = generateHalfHourTimes();
  const { user } = useUser();
  const { isLoaded } = useClerk();
  const [isLoading, setIsLoading] = useState(false);

  const handleAppointment = async () => {
    if (isLoaded) return;
    setIsLoading(true);

    const userName = user.fullName;
    const email = user.primaryEmailAddress.emailAddress;

    const appointmentData = {
      userName,
      email,
      time: selectedTime,
      date: selectedDate,
      hospitalId,
      note,
    };

    try {
      await axios.post(
        "https://doctor-appointment-webapp-bakend.onrender.com/api/appointments",
        appointmentData
      );

      setSelectedDate("");
      setSelectedTime("");
      setNote("");
      navigate.navigate("Appointmnet", { show: "show" });
    } catch (error) {
      console.error("Appointment failed", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <View className="p-3">
      <Text className="text-lg font-bold text-gray-400">Book Appointment</Text>
      <View>
        <Text className="my-3 font-bold text-lg text-gray-600">Days</Text>
        <FlatList
          data={days}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <TouchableOpacity
              className={`border mx-2 py-1 rounded-full px-4 ${
                selectedDate == item.date
                  ? "bg-blue-600 text-white border-black"
                  : ""
              }`}
              onPress={() => {
                setSelectedDate(item.date);
              }}
            >
              <View className="items-center">
                <Text
                  className={`text-gray-500 font-bold ${
                    selectedDate == item.date ? "text-white" : ""
                  }`}
                >
                  {item.day}
                </Text>
                <Text
                  className={`text-gray-500 font-bold ${
                    selectedDate == item.date ? "text-white" : ""
                  }`}
                >
                  {item.date}
                </Text>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
      <View className="my-2">
        <Text className="my-3 font-bold text-lg text-gray-600">Times</Text>
        <FlatList
          data={times}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <TouchableOpacity
              className={`border mx-2 py-3 rounded-full px-4 ${
                selectedTime == item
                  ? "bg-blue-600 text-white border-black"
                  : ""
              }`}
              onPress={() => {
                setSelectedTime(item);
              }}
            >
              <View className="items-center">
                <Text
                  className={`text-gray-500 font-bold ${
                    selectedTime == item ? "text-white" : ""
                  }`}
                >
                  {item}
                </Text>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
      <View className="my-3">
        <Text className="my-3 font-bold text-lg text-gray-600">Note</Text>
        <TextInput
          className="bg-gray-200 w-full h-16 rounded-lg px-2"
          placeholder="Write a Note here..."
          value={note}
          onChangeText={setNote}
        />
      </View>
      <View className="items-center">
        <TouchableOpacity
          className="px-3 py-4 bg-blue-700 my-6 w-4/5 rounded-full"
          onPress={handleAppointment}
        >
          {isLoading ? (
            <ActivityIndicator color="#ffffff" size="large" />
          ) : (
            <Text className="text-center font-bold text-white text-lg">
              Make an Appointment
            </Text>
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default BookingSection;
