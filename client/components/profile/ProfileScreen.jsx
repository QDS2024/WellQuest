import React, { useState } from "react";
import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { useFocusEffect } from "@react-navigation/native";
import axios from "axios";

import apiUrl from "../../apiUrl";
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
  const [user, setUser] = useState({});

  // useFocusEffect is a hook from react-navigation that runs whenever the screen is focused
  useFocusEffect(
    React.useCallback(() => {
      console.log("profile screen");
      fetchUser();
    }, [])
  );

  const fetchUser = async () => {
    const userId = "65ece8ca4b6c918715c69896";
    try {
      const response = await axios.get(`${apiUrl}user/read?id=${userId}`);
      let { username, email, password, points, _id } = response.data;
      let userData = {
        id: _id,
        username,
        email,
        password,
        points,
      };
      setUser(userData);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <ScrollView
      contentContainerStyle={{
        rowGap: 40,
      }}
      style={styles.container}
    >
      <UserInfo user={user} />
      <View style={styles.containerBottom}>
        <View style={styles.cards}>
          <ProfileScreenCard
            title="Edit Info"
            onPress={() => navigation.navigate("EditInfo", { user })}
            icon="edit"
          />
          <ProfileScreenCard
            title="Settings"
            onPress={() => navigation.navigate("UserSettings")}
            icon="settings"
          />
          <ProfileScreenCard
            title="Help"
            onPress={() => navigation.navigate("Help")}
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
    </ScrollView>
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
    minHeight: "60%",
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
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
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
