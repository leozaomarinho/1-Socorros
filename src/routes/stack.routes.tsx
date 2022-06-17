import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "../screens/Home";
import Detail from "../screens/Detail";
import Profile from "../screens/Profile";

const stackRoutes = createNativeStackNavigator();

const AppRoutes: React.FC = () => {
  return (
    <>
      <stackRoutes.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <stackRoutes.Screen name="Home" component={Home} />
        <stackRoutes.Screen name="Detail" component={Detail} />
        <stackRoutes.Screen name="Profile" component={Profile} />
      </stackRoutes.Navigator>
    </>
  );
};
export default AppRoutes;
