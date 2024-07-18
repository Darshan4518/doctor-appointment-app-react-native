import { View } from "react-native";
import Login from "./Screens/Auth/Login";
import { ClerkProvider, SignedIn, SignedOut } from "@clerk/clerk-expo";

import { NavigationContainer } from "@react-navigation/native";
import TabNavigation from "./Screens/Navigations/TabNavigation";
import { StatusBar } from "expo-status-bar";
import LinkingConfiguration from "./LinkingConfiguration";
import { createStackNavigator } from "@react-navigation/stack";
const Stack = createStackNavigator();
export default function App() {
  return (
    <ClerkProvider publishableKey="pk_test_cmVsYXhlZC1jYXQtNjAuY2xlcmsuYWNjb3VudHMuZGV2JA">
      <View className=" flex-1 ">
        <StatusBar />
        <SignedIn>
          <NavigationContainer linking={LinkingConfiguration}>
            <TabNavigation />
          </NavigationContainer>
        </SignedIn>
        <SignedOut>
          <Login />
        </SignedOut>
      </View>
    </ClerkProvider>
  );
}
