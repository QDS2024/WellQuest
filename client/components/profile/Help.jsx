import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";

import Colors from "../../colors";

export default function Help({ navigation }) {
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{ flex: 1 }}
        >
          <Feather name="chevron-left" size={24} color="black" />
        </TouchableOpacity>
        <View style={{ flex: 1, paddingRight: 35 }}>
          <Text style={{ color: Colors.black, fontSize: 16 }}>Help</Text>
        </View>
      </View>

      <View style={{ alignItems: "center", gap: 50 }}>
        <Feather name="help-circle" size={60} color={Colors.green} />
        <Text>we're still working on this!</Text>
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
