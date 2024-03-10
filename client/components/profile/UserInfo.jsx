import { View, Text, Image, StyleSheet } from "react-native";

import Colors from "../../colors";

export default function UserInfo({ user }) {
  // todo: get profile pic from user
  const profilePic =
    "https://git.enib.fr/uploads/-/system/project/avatar/1031/pingu-face.png";

  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <Image
          source={{
            uri: profilePic,
          }}
          style={{ width: 80, height: 80, borderRadius: 50 }}
        />
        <View style={styles.info}>
          <Text style={{ fontSize: 20 }}>{user.username}</Text>
          <Text>{user.email}</Text>
        </View>
      </View>
      <View style={styles.bottomContainer}>
        <Text>Your Balance</Text>
        <Text style={styles.points}>{user.points} Points</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    borderRadius: 10,
    backgroundColor: Colors.lightBeige,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  topContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  info: {
    padding: 20,
    gap: 5,
  },
  bottomContainer: {
    marginTop: 30,
    alignItems: "center",
  },
  points: {
    fontWeight: "bold",
    fontSize: 20,
  },
});
