import React, { useEffect, useState } from "react";
import { View, ScrollView, Text } from "react-native";
import QuestCard from "./QuestCard";
import testData from "./test.json";
import axios from "axios";
import apiUrl from "../../apiUrl";

const HomeScreen = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const testDataArray = Object.values(testData);

  const handleModalVisibility = (visibility) => {
    setIsModalVisible(visibility);
  };

  const [user, setUser] = useState({});
  const [userQuests, setUserQuests] = useState({});
  const [completedUserQuests, setCompletedUserQuests] = useState({});

  useEffect(() => {
    const userId = "65ece8ca4b6c918715c69896";
    const fetchUserQuests = async () => {
      const user = await axios.get(`${apiUrl}user/read?id=${userId}`);
      const { questIds, completedQuestIds } = user.data;
      const activeQuests = {};
      const completedQuests = {};

      for (const questId of questIds) {
        const quest = await axios.get(`${apiUrl}quest/read?id=${questId}`);
        activeQuests[questId] = quest.data;
      }

      for (const questId of completedQuestIds) {
        const quest = await axios.get(`${apiUrl}quest/read?id=${questId}`);
        completedQuests[questId] = quest.data;
      }
      setUserQuests(activeQuests);
      setCompletedUserQuests(completedQuests);
    };
    fetchUserQuests();
  }, []);

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
        {Object.values(userQuests).map((data, index) => (
          <View key={"quest" + index + "View"} style={styles.questCard}>
            <QuestCard
              key={"quest" + index + "Card"}
              questData={data}
              handleModalVisibility={handleModalVisibility}
            />
          </View>
        ))}
        {Object.values(completedUserQuests).map((data, index) => (
          <View
            key={"quest" + index + "View"}
            style={[styles.questCard, styles.completedQuestCard]}
          >
            <QuestCard
              key={"quest" + index + "Card"}
              questData={data}
              handleModalVisibility={handleModalVisibility}
            />
          </View>
        ))}
      </ScrollView>
    </>
  );
};

const styles = {
  container: {
    flexDirection: "column",
    overflow: "scroll",
  },
  questCard: {
    marginTop: 10,
    width: "85%",
    alignSelf: "center",
  },
  completedQuestCard: {
    opacity: 0.5,
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

export default HomeScreen;
