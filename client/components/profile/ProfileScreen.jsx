import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Colors from "../../colors";
import UserInfo from "./UserInfo";
// import EditInfo from "./EditInfo";

const Stack = createNativeStackNavigator();

function DetailsScreen() {
  console.log("!!!");
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Details!</Text>
    </View>
  );
}

function EditInfo() {
  console.log("????");
  return (
    <View style={styles.container}>
      <Text>Edit Info</Text>
    </View>
  );
}

export default function ProfileScreen({ navigation }) {
  return (
    <Stack.Navigator>
      <Stack.Screen name="EditInfo" component={EditInfo} />
      <Stack.Screen name="Details" component={DetailsScreen} />
    </Stack.Navigator>
    // <View style={styles.container}>
    //   <UserInfo />

    //   <View>
    //     <TouchableOpacity
    //       style={styles.card}
    //       onPress={() => navigation.navigate("EditInfo")}
    //     >
    //       <Text>Edit Info</Text>
    //       <Feather name="chevron-right" size={24} color="black" />
    //     </TouchableOpacity>
    //     <Text>Edit Info</Text>
    //     <Text>Settings</Text>
    //     <Text>Logout</Text>
    //   </View>
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    gap: 40,
  },
  card: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
    borderRadius: 10,
    backgroundColor: Colors.lighGray,
  },
});
