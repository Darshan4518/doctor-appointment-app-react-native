import { View, Text } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../Home";
import HospitalDoctorsList from "../HospitalDoctorsList";
import HospitalDetails from "../HospitalDetails";
import HospitalAppointmentList from "../BookAppointment";
import BookAppointment from "../BookAppointment";
import DoctorSpecialityList from "../DoctorSpecialityList";

const HomeNavigation = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="home" component={Home}></Stack.Screen>
      <Stack.Screen
        name="hospital-doctors-list"
        component={HospitalDoctorsList}
      ></Stack.Screen>
      <Stack.Screen name="hospitalDetails" component={HospitalDetails} />
      <Stack.Screen name="bookappointment" component={BookAppointment} />
      <Stack.Screen
        name="doctorSpecialitylist"
        component={DoctorSpecialityList}
      />
    </Stack.Navigator>
  );
};

export default HomeNavigation;
