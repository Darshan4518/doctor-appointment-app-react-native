import { View, Text, Image } from "react-native";
import { StatusBar } from "expo-status-bar";
import loginImg from "../../assets/login.png";
import SignInWithOAuth from "../../components/SignInWithOAuth";
import { useState, useEffect } from "react";

const Skeleton = ({ className }) => (
  <View className={`bg-gray-300 animate-pulse ${className}`} />
);

const Login = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // 2 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <View className="flex-1 bg-slate-200">
      <StatusBar style="auto" />
      {loading ? (
        <>
          <Skeleton className="h-[60%] w-[100%] mx-auto pt-5" />
          <View className="h-[40%] w-[100%] bg-white p-5 rounded-3xl flex flex-col items-center">
            <Skeleton className="h-8 w-56 my-2 " />
            <Skeleton className="h-8 w-56 my-2" />
            <Skeleton className="h-5 w-72 my-3" />
            <Skeleton className="h-12 w-48 my-3" />
            <Skeleton className="h-5 w-48 my-3" />
          </View>
        </>
      ) : (
        <>
          <Image
            source={loginImg}
            className="h-[60%] w-[100%] mx-auto object-contain pt-5"
          />
          <View className="h-[40%] w-[100%] bg-white p-5 rounded-3xl flex flex-col items-center">
            <Text className="font-bold text-3xl">Your Ultimate Doctor</Text>
            <Text className="font-bold text-3xl">Appointment Booking App</Text>
            <Text className="font-bold my-3 capitalize text-center text-gray-700">
              book appointment effortlessly and manage your health journey
            </Text>
            <SignInWithOAuth />
            <Text className="text-black font-semibold my-3">
              Already have an Account?
              <Text className="text-blue-500 font-bold text-[16px]">
                signIn
              </Text>
            </Text>
          </View>
        </>
      )}
    </View>
  );
};

export default Login;
