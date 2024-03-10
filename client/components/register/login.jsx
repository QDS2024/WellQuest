import React, { useState } from "react";
import axios from "axios";
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

// TODO, change to real host address
const host = apiUrl;

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

export default function LoginPage({ navigation }) {
  const userInfo = {
    //username: "Pingu Smith",
    email: "pingu@noot.com",
    username: "pingu",
    password: "nootnoot",
  };

  //const [username, setUsername] = useState(userData.username);
  const [email, setEmail] = useState(userInfo.email);
  const [username, setUsername] = useState(userInfo.username);
  const [password, setPassword] = useState(userInfo.password);
  const login = async () => {
    console.log("Logging in...");
    try {
      const response = await axios.post(`${host}auth/login`, {
        email,
        username,
        password,
      });

      console.log(response.data);
      navigation.navigate("Main");
    } catch (error) {
      console.error(error);
    }
  };

  const register = async () => {
    try {
      console.log("Registering...");
      const response = await axios.post(`${host}auth/register`, {
        email,
        username,
        password,
      });
      console.log(response.data);
      navigation.navigate("Main");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.welcome}>
        <Text style={{ fontSize: 20 }}>welcome to</Text>
        <Text style={{ fontSize: 30 }}>WellQuest</Text>
      </View>
      <View style={styles.inputs}>
        <InfoInput title="Email" value={email} onChange={setEmail} />
        <InfoInput title="Username" value={username} onChange={setUsername} />
        <InfoInput title="Password" value={password} onChange={setPassword} />
      </View>

      <TouchableOpacity style={styles.signinBtn} onPress={login}>
        <Text style={styles.saveText}>Log In</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.signinBtn} onPress={register}>
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
    justifyContent: "center",
  },
  welcome: {
    alignItems: "center",
    justifyContent: "center",
    height: "20%",
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
