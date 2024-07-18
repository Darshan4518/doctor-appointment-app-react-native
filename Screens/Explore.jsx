import { View, Text, ScrollView } from "react-native";
import React, { useState } from "react";
import HospitalDoctorTab from "../components/hospital-doctor-page/HospitalDoctorTab";
import AllHospitalList from "../components/explore/AllHospitalList";
import AllDoctorsList from "../components/explore/AllDoctorsList";

const Explore = () => {
  const [isActiveTab, setIsActiveTab] = useState("hospitals");
  return (
    <ScrollView className=" p-4">
      <Text className=" text-lg font-bold ">Explore</Text>
      <HospitalDoctorTab
        isActiveTab={isActiveTab}
        setIsActiveTab={setIsActiveTab}
      />
      {isActiveTab == "hospitals" ? <AllHospitalList /> : <AllDoctorsList />}
    </ScrollView>
  );
};

export default Explore;
