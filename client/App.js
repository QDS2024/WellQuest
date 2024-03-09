import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Navbar from "./components/Navbar";
import React from "react";

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <Text>Hello</Text>
      <Navbar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  navbar: {},
});
