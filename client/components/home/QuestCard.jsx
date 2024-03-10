import React, { useState } from "react";

import { Text, StyleSheet, Pressable, View } from "react-native";
import { Feather } from "@expo/vector-icons";
import QuestCardModal from "./QuestCardModal";
import Colors from "../../colors";

const QuestCard = ({ questData, handleModalVisibility, completed = false }) => {
  const [modalVisible, setModalVisible] = useState(false);

  const handlePress = () => {
    setModalVisible(true);
    handleModalVisibility(true);
  };

  const handleClose = () => {
    setModalVisible(false);
    handleModalVisibility(false);
  };

  return (
    <>
      <QuestCardModal
        modalVisible={modalVisible}
        handleClose={handleClose}
        questData={questData}
      />
      <Pressable style={styles.container} onPress={handlePress}>
        <View style={{ flexDirection: "row", gap: 10 }}>
          {completed && <Feather name="check" size={24} color="black" />}
          <View style={{ flex: 1 }}>
            <Text style={styles.title} numberOfLines={1} ellipsizeMode="tail">
              {questData.title}
            </Text>
          </View>
        </View>
        <Text style={styles.description} numberOfLines={1}>
          {questData.description}
        </Text>
        <Text style={styles.points}>{questData.points + " pts"}</Text>
      </Pressable>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    padding: 15,
    borderRadius: 10,
    backgroundColor: Colors.lightGreen,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "left",
  },
  description: {
    fontSize: 14,
    marginBottom: 10,
    textAlign: "left",
    width: "100%",
  },
  points: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "right",
  },
});

export default QuestCard;
