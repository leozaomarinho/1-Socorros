import React from "react";
import Home from "./src/screens/Home";
import { SafeAreaView } from "react-native";
import { StatusBar } from "expo-status-bar";
import SosButton from "./src/components/SosButton";
import Routes from "./src/routes/routes";

export default function App() {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: `#FEE7F5`,
      }}
    >
      <StatusBar translucent={false} style="light" />
      <Routes />
      <SosButton />
    </SafeAreaView>
  );
}
