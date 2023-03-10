import React from "react";
import "react-native-gesture-handler";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { NavigationsStack } from "./src/navigation/NavigationsStack";
import { NavigationTabs } from "./src/navigation/NavigationTabs";
import { NavigationsDrawers } from "./src/navigation/NavigationsDrawers";

export default function App() {
  return (
    <NavigationContainer>
      <NavigationsStack />
      {/* <NavigationTabs /> */}
      {/* <NavigationsDrawers /> */}
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
