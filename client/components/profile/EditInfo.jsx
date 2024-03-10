import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import Colors from "../../colors";

function InfoInput({ title, value, onChange }) {
  return (
    <View style={styles.inputContainer}>
      <Text>{title}:</Text>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder={title}
          placeholderTextColor={Colors.green}
          onChangeText={onChange}
          value={value}
        />
      </View>
    </View>
  );
}

export default function EditInfo({ navigation }) {
  const userData = {
    username: "Pingu Smith",
    // email: "pingu@noot.com",
    password: "nootnoot",
    profilePic:
      "https://git.enib.fr/uploads/-/system/project/avatar/1031/pingu-face.png",
    points: 100,
    questIds: [1, 2, 3],
  };

  const [username, setUsername] = useState(userData.username);
  const [email, setEmail] = useState(userData.email);
  const [password, setPassword] = useState(userData.password);

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Feather name="chevron-left" size={24} color="black" />
      </TouchableOpacity>

      <View style={styles.inputs}>
        <InfoInput title="Username" value={username} onChange={setUsername} />
        <InfoInput title="Email" value={email} onChange={setEmail} />
        <InfoInput title="Password" value={password} onChange={setPassword} />
      </View>

      <TouchableOpacity style={styles.saveBtn}>
        <Text style={styles.saveText}>SAVE</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    gap: 80,
  },
  inputs: {
    gap: 20,
  },
  inputContainer: {
    gap: 5,
  },
  inputView: {
    backgroundColor: Colors.lighGray,
    borderRadius: 10,
    width: "100%",
    height: 45,
  },
  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },
  saveBtn: {
    width: "100%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.green,
  },
  saveText: {
    color: "white",
    fontWeight: "bold",
  },
});
