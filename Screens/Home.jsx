import { View, StatusBar } from "react-native";
import React from "react";
import Header from "../components/home/Header";
import SearchBar from "../components/home/SearchBar";
import Slider from "../components/home/Slider";
import DoctorSpeciality from "../components/home/DoctorSpeciality";
import HospitalCard from "../components/home/HospitalCard";

const Home = () => {
  return (
    <View className="flex-1 mt-5 p-4">
      <StatusBar hidden />
      <Header />
      <SearchBar setSearchText={(value) => console.log(value)} />
      <Slider />
      <DoctorSpeciality />
      <HospitalCard />
    </View>
  );
};

export default Home;
