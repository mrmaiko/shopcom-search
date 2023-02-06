import { useEffect, useState } from "react";
import { StyleSheet, Text, View, SafeAreaView, Dimensions } from "react-native";
import CameraHandler from "./components/CameraHandler";

export default function App() {
  return (
    <SafeAreaView
      style={{
        alignContent: "center",
        alignItems: "center",
        justifyContent: "center",
        height: Dimensions.get("window").height,
      }}
    >
      <CameraHandler />
    </SafeAreaView>
  );
}
