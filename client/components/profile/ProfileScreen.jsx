import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

import Colors from "../../colors";
import UserInfo from "./UserInfo";

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <UserInfo />
      <View>
        <Text>Edit Info</Text>
        <Text>Settings</Text>
        <Text>Logout</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    gap: 40,
  },
});
