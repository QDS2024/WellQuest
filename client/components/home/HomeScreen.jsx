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
  const { username, points } = user;

  useEffect(() => {
    const userId = "65ece8ca4b6c918715c69896";
    const fetchUserQuests = () => {
      axios
        .get(`${apiUrl}user/read?id=${userId}`)
        .then((res) => {
          const questIds = res.data.questIds;
          const newQuests = {};

          questIds.forEach((questId) => {
            if (!(questId in userQuests)) {
              axios.get(`${apiUrl}quest/read?id=${questId}`).then((res) => {
                newQuests[res.data._id] = res.data;
                setUserQuests({ ...userQuests, ...newQuests });
              });
            }
          });
        })
        .catch((error) => {
          console.error("There was an error!", error);
        });
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
          <View
            key={"quest" + index + "View"}
            style={[
              styles.questCard,
              index !== Object.keys(userQuests).length - 1 &&
                styles.questCardWithMargin,
            ]}
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

export default HomeScreen;
