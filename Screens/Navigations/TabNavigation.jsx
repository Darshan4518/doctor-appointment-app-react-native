import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Profile from "../Profile";
import Appointment from "../Appointment";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import HomeNavigation from "./HomeNavigation";
import Explore from "../Explore";
const Tab = createBottomTabNavigator();
const TabNavigation = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="Home"
        component={HomeNavigation}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Explore"
        component={Explore}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="explore" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Appointmnet"
        component={Appointment}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="calendar-month" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigation;
