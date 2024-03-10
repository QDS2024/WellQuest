import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import Colors from "../../colors";

import apiUrl from "../../apiUrl";
import axios from "axios";

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

export default function EditInfo({ route, navigation }) {
  const { user } = route.params;

  const [username, setUsername] = useState(user.username);
  const [email, setEmail] = useState(user.email);
  const [password, setPassword] = useState(user.password);

  const handleSave = () => {
    const updatedUser = {
      ...user,
      username,
      email,
      password,
    };

    axios
      .patch(`${apiUrl}user/update`, updatedUser)
      .then((response) => {
        console.log("success");
        navigation.navigate("ProfileScreen");
      })
      .catch((error) => {
        console.error(error);
      });
  };

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
        <View style={{ flex: 1, paddingRight: 55 }}>
          <Text style={{ color: Colors.black, fontSize: 16 }}>Edit Info</Text>
        </View>
      </View>

      <View style={styles.inputs}>
        <InfoInput title="Username" value={username} onChange={setUsername} />
        <InfoInput title="Email" value={email} onChange={setEmail} />
        <InfoInput title="Password" value={password} onChange={setPassword} />
      </View>

      <TouchableOpacity style={styles.saveBtn} onPress={handleSave}>
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
