import { View, Text, Image, StyleSheet } from "react-native";

import Colors from "../../colors";

export default function UserInfo() {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: "https://git.enib.fr/uploads/-/system/project/avatar/1031/pingu-face.png",
        }}
        style={{ width: 80, height: 80, borderRadius: 50 }}
      />
      <View style={styles.info}>
        <Text style={{ fontSize: 18 }}>Pingu Smith</Text>
        <Text>pingu@noot.com</Text>
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
