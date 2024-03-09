import { View, Text, Image, StyleSheet } from "react-native";

import Colors from "../../colors";

export default function UserInfo() {
  const userData = {
    username: "Pingu Smith",
    email: "pingu@noot.com",
    password: "nootnoot",
    profilePic:
      "https://git.enib.fr/uploads/-/system/project/avatar/1031/pingu-face.png",
    points: 100,
    questIds: [1, 2, 3],
  };

  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: userData.profilePic,
        }}
        style={{ width: 80, height: 80, borderRadius: 50 }}
      />
      <View style={styles.info}>
        <Text style={{ fontSize: 20 }}>{userData.username}</Text>
        <Text>{userData.email}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    padding: 20,
    borderRadius: 10,
    backgroundColor: Colors.lighGray,
  },
  info: {
    padding: 20,
    gap: 5,
  },
});
