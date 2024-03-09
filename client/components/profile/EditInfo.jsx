import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function EditInfo({ navigation }) {
  console.log("???");
  return (
    <View style={styles.container}>
      <Text>Edit Info</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    gap: 40,
  },
});
