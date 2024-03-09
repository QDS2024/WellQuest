import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";

import Colors from "../../colors";
import UserInfo from "./UserInfo";

function ProfileScreenCard({ title, onPress, icon }) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <View style={styles.cardLeft}>
        <Feather name={icon} size={16} color="black" />
        <Text>{title}</Text>
      </View>
      <Feather name="chevron-right" size={24} color="black" />
    </TouchableOpacity>
  );
}

export default function ProfileScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <UserInfo />
      <View style={styles.containerBottom}>
        <View style={styles.cards}>
          <ProfileScreenCard
            title="Edit Info"
            onPress={() => navigation.navigate("EditInfo")}
            icon="edit"
          />
          <ProfileScreenCard
            title="Settings"
            onPress={() => navigation.navigate("UserSettings")}
            icon="settings"
          />

          <ProfileScreenCard
            title="Help"
            onPress={() => console.log("Help")}
            icon="help-circle"
          />
        </View>
        <TouchableOpacity
          style={[styles.card, styles.cardLogout]}
          onPress={() => console.log("log out pressed")}
        >
          <Feather name="log-out" size={16} color="white" />
          <Text style={{ fontWeight: "bold", color: Colors.white }}>
            Logout
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    gap: 60,
    flex: 1,
  },
  containerBottom: {
    justifyContent: "space-between",
    flex: 1,
  },
  cards: {
    gap: 20,
  },
  card: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
    borderRadius: 10,
    backgroundColor: Colors.lightGreen,
  },
  cardLeft: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  cardLogout: {
    backgroundColor: "#8f250c",
    justifyContent: "center",
    gap: 10,
  },
});
