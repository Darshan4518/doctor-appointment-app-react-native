import { View, Text } from "react-native";
import React from "react";
import { useRoute } from "@react-navigation/native";
import HospitalAppointmentInfo from "../components/bookAppointment/HospitalAppointmentInfo";
import BookingSection from "../components/bookAppointment/BookingSection";

const BookAppointment = () => {
  const { hospital } = useRoute().params;

  return (
    <View>
      <HospitalAppointmentInfo hospital={hospital} />
      <BookingSection hospitalId={hospital._id} />
    </View>
  );
};

export default BookAppointment;
