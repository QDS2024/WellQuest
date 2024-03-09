import React from "react";
import { View, ScrollView } from "react-native";
import QuestCard from "./QuestCard";
import testData from "./test.json";

export default function HomeScreen() {
  const testDataArray = Object.values(testData);

  return (
    <ScrollView style={styles.container}>
      {testDataArray.map((questData, index) => (
        <View
          style={[
            styles.questCard,
            index !== testDataArray.length - 1 && styles.questCardWithMargin,
          ]}
        >
          <QuestCard key={index} questData={questData} />
        </View>
      ))}
    </ScrollView>
  );
}

const styles = {
  container: {
    flexDirection: "column",
    overflow: "scroll",
  },
  questCard: {
    marginBottom: 0,
  },
  questCardWithMargin: {
    marginBottom: 20,
  },
};
