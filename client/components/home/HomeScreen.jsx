import React from "react";
import { View, Text } from "react-native";
import Card from "./QuestCard";
import testData from "./test.json";

export default function HomeScreen() {
  console.log(testData);
  return <Card questData={testData} />;
}
