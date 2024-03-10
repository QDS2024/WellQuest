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

export default function LoginPage() {
  const userInfo = {
    //username: "Pingu Smith",
    email: "pingu@noot.com",
    password: "nootnoot"
  };

  //const [username, setUsername] = useState(userData.username);
  const [email, setEmail] = useState(userInfo.email);
  const [password, setPassword] = useState(userInfo.password);

  return (
    <View style={styles.container}>

      <View style={styles.inputs}>
        <InfoInput title="Email" value={email} onChange={setEmail} />
        <InfoInput title="Password" value={password} onChange={setPassword} />
      </View>

      <TouchableOpacity style={styles.signinBtn}>
        <Text style={styles.saveText}>Log In</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.signinBtn}>
        <Text style={styles.saveText}>Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    gap: 20,
    flex: 1,
    justifyContent:"center",
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
  signinBtn: {
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
