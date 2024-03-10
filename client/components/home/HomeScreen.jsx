import React, { useState } from "react";
import { View, ScrollView, Text } from "react-native";
import QuestCard from "./QuestCard";
import testData from "./test.json";

export default function HomeScreen() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const testDataArray = Object.values(testData);

  const handleModalVisibility = (visibility) => {
    setIsModalVisible(visibility);
  };

  return (
    <>
      <View style={styles.questDescription}>
        <Text style={styles.descriptionTitle}>Daily Quests!</Text>
        <Text style={styles.descriptionText}>
          Complete quests to earn points!
        </Text>
      </View>
      <ScrollView
        style={[
          styles.container,
          isModalVisible ? styles.faded : styles.normal,
        ]}
      >
        {testDataArray.map((questData, index) => (
          <View
            style={[
              styles.questCard,
              index !== testDataArray.length - 1 && styles.questCardWithMargin,
            ]}
          >
            <QuestCard
              key={index}
              questData={questData}
              handleModalVisibility={handleModalVisibility}
            />
          </View>
        ))}
      </ScrollView>
    </>
  );
}

const styles = {
  container: {
    flexDirection: "column",
    overflow: "scroll",
  },
  questCard: {
    marginBottom: 0,
    width: "85%",
    alignSelf: "center",
  },
  questCardWithMargin: {
    marginBottom: 10,
    alignSelf: "center",
    width: "85%",
  },
  questDescription: {
    width: "90%",
    height: "15%",
    backgroundColor: "white",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    marginHorizontal: 20,
    marginTop: 20,
    marginBottom: 20,
  },
  descriptionTitle: {
    fontSize: 30,
    fontWeight: "bold",
  },
  descriptionText: {
    fontSize: 15,
  },
  faded: {
    opacity: 0.5,
  },
  normal: {
    opacity: 1,
  },
};
