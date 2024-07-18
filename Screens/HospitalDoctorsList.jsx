import { View, Text, ScrollView } from "react-native";
import React, { useState } from "react";
import { useRoute } from "@react-navigation/native";
import PageHeader from "../components/shared/PageHeader";
import HospitalDoctorTab from "../components/hospital-doctor-page/HospitalDoctorTab";
import HospitalList from "../components/hospital-doctor-page/HospitalList";
import DoctorsList from "../components/hospital-doctor-page/DoctorsList";

const HospitalDoctorsList = () => {
  const params = useRoute().params;
  const [isActiveTab, setIsActiveTab] = useState("hospitals");

  return (
    <ScrollView>
      <PageHeader tittle={params.categoryName} />
      <HospitalDoctorTab
        isActiveTab={isActiveTab}
        setIsActiveTab={setIsActiveTab}
      />
      {isActiveTab == "hospitals" ? (
        <HospitalList catName={params.categoryName} />
      ) : (
        <DoctorsList catName={params.categoryName} />
      )}
    </ScrollView>
  );
};

export default HospitalDoctorsList;
