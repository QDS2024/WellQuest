import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { useEffect, useState } from "react";
import Card from "./Card";
import { HOST } from "@env";
import apiUrl from "../../apiUrl";
import axios from "axios";

const testRewardData = [
  {
    name: "Test Reward",
    description: "Some Yummy Nummies or smt",
    price: 25,
  },
  {
    name: "Test Reward",
    description: "Some Yummy Nummies or smt",
    price: 25,
  },
  {
    name: "Test Reward",
    description: "Some Yummy Nummies or smt",
    price: 25,
  },
  {
    name: "Test Reward",
    description: "Some Yummy Nummies or smt",
    price: 25,
  },
  {
    name: "Test Reward",
    description: "Some Yummy Nummies or smt",
    price: 25,
  },
  {
    name: "Test Reward",
    description: "Some Yummy Nummies or smt",
    price: 25,
  },
  {
    name: "Test Reward",
    description: "Some Yummy Nummies or smt",
    price: 25,
  },
];

const RewardsScreen = () => {
  const [user, setUser] = useState({});
  const [rewards, setRewards] = useState({});
  const { username, points } = user;

  const purchase = (user, price) => {
    if (user.points >= price) {
      console.log("Purchasing");
      const updatedUser = {
        ...user,
        points: user.points - price,
      };
      setUser(updatedUser);

      // Send patch request to update user data on the server
      axios
        .patch(`${apiUrl}user/update`, updatedUser)
        .then((response) => {
          console.log("User data updated successfully:", response.data);
        })
        .catch((error) => {
          console.error("Error updating user data:", error);
        });
    }
  };
  //
  useEffect(() => {
    console.log("Hello World");
    const userId = "65ece8ca4b6c918715c69896";

    const executeApi = async () => {
      console.log(HOST);
      console.log(`${apiUrl}user/read?id=65ece8ca4b6c918715c69896`);
      console.log(user);
      axios
        .get(`${apiUrl}user/read?id=${userId}`)
        .then((response) => {
          console.log(response.data);
          let { username, points, _id } = response.data;
          let userData = {
            id: _id,
            username,
            points,
          };
          setUser(userData);
        })
        .catch((error) => {
          console.error("There was an error!", error);
        });

      axios
        .get(`${apiUrl}reward/read/all`)
        .then((response) => {
          let parsedRewards = response.data.map((reward) => {
            let { name, description, price } = reward;
            return {
              name,
              description,
              price,
            };
          });
          console.log(parsedRewards);
          setRewards(parsedRewards);
        })
        .catch((error) => {
          console.error("There was an error!", error);
        });
    };

    executeApi();
  }, []);

  return (
    <>
      {/* Rewards Description */}
      <View style={styles.rewardDescription}>
        <Text style={styles.descriptionTitle}>Rewards</Text>
        <Text style={styles.descriptionText}>
          Redeem your points for cool prizes!
        </Text>
      </View>
      {/* User Information */}
      <View style={styles.userInfo}>
        <Text style={styles.userText}>
          {username}: {points}
        </Text>
      </View>

      {/* Rewards List */}
      <View style={styles.container}>
        <FlatList
          data={rewards}
          renderItem={({ item, index }) => (
            <Card
              key={index.toString()}
              name={item.name}
              description={item.description}
              price={item.price}
              purchase={purchase}
              user={user}
            />
          )}
          keyExtractor={(_item, index) => index.toString()}
          style={styles.rewardsList}
          contentContainerStyle={styles.centeredContent} // Apply the centering styles to the content container of FlatList
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, // Ensure the container takes up the full screen
    width: "100%",
    justifyContent: "center", // Center children vertically in the container
    padding: 15,
  },
  rewardDescription: {
    width: "90%",
    height: "15%",
    backgroundColor: "white",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    marginHorizontal: 20,
    marginTop: 20,
  },
  userInfo: {
    width: "90%",
    height: "10%",
    backgroundColor: "white",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    justifyContent: "center",
    alignItems: "center",
    padding: 5,
    marginHorizontal: 20,
    marginTop: 20,
  },
  descriptionTitle: {
    fontSize: 30,
    fontWeight: "bold",
  },
  descriptionText: {
    fontSize: 15,
  },
  centeredContent: {
    justifyContent: "center", // Center content vertically
    alignItems: "center", // Center content horizontally
  },
});

export default RewardsScreen;
