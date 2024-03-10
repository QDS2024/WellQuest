import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { useEffect, useState } from "react";
import Card from "./Card";
import apiUrl from "../../apiUrl";
import axios from "axios";
import { LinearGradient } from "expo-linear-gradient";
import Colors from "../../colors";

const RewardsScreen = () => {
  const [user, setUser] = useState({});
  const [rewards, setRewards] = useState({});
  const { username, points } = user;

  const purchase = (user, reward) => {
    if (user.points >= reward.price) {
      axios
        .post(`${apiUrl}reward/create`, reward)
        .then((response) => {
          const storedId = response.data._id;
          const updatedUser = {
            ...user,
            points: user.points - reward.price,
            rewardIds: [...user.rewardIds, storedId],
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
        })
        .catch((error) => {
          console.error("There was an error!", error);
        });
    }
  };

  useEffect(() => {
    const userId = "65ece8ca4b6c918715c69896";
    console.log(apiUrl);

    const executeApi = async () => {
      axios
        .get(`${apiUrl}user/read?id=${userId}`)
        .then((response) => {
          console.log("Success User:", response.data);
          let { username, points, _id, rewardIds } = response.data;
          let userData = {
            id: _id,
            username,
            points,
            rewardIds,
          };
          setUser(userData);
        })
        .catch((error) => {
          console.error("There was an error!", error);
        });

      axios
        .get(`${apiUrl}catalogue/read?id=65ecc1437df23e30031e706d`)
        .then(async (response) => {
          let rewardIds = response.data.rewardIds;
          console.log("Success Catalogue: ", rewardIds);

          const requests = rewardIds.map((id) =>
            axios.get(`${apiUrl}reward/read?id=${id}`)
          );
          const responses = await Promise.all(requests);
          const data = responses.map((response) => response.data);
          parsedRewards = data.map((reward) => {
            console.log(reward);
            return {
              name: reward.name,
              description: reward.description,
              price: reward.price,
              image: reward.image_tag,
            };
          });
          setRewards(parsedRewards);
        })
        .catch((error) => {
          console.error("There was an error!", error);
        });
    };

    executeApi();
  }, []);

  const percentage = Math.min((points / 1000) * 100, 100);

  return (
    <>
      {/* Rewards Description */}
      <View style={styles.rewardDescription}>
        <View style={{ alignItems: "center" }}>
          <Text style={styles.descriptionTitle}>Rewards</Text>
          <Text style={styles.descriptionText}>
            Redeem your points for cool prizes!
          </Text>
        </View>

        <View style={{ width: "100%", alignItems: "center", gap: 10 }}>
          <Text style={styles.pointsText}>{points} pts</Text>
          <View
            style={{
              width: "100%",
              borderWidth: 1,
              borderRadius: 10,
              backgroundColor: "#CCCCCC",
            }}
          >
            <LinearGradient
              colors={["#fefae0", "#588157"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={[styles.bar, { width: `${percentage}%` }]}
            />
            <View style={styles.thresholdsContainer}>
              <View style={[styles.thresholdCircle, { left: "20%" }]} />
              <View style={[styles.thresholdCircle, { left: "40%" }]} />
              <View style={[styles.thresholdCircle, { left: "60%" }]} />
              <View style={[styles.thresholdCircle, { left: "80%" }]} />
            </View>
          </View>
        </View>
      </View>
      {/* User Information */}
      {/* <View style={styles.pointsContainer}></View> */}

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
              image={item.image}
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
    backgroundColor: Colors.lightBeige,
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
    gap: 30,
    paddingVertical: "5%",
    paddingHorizontal: 10,
    marginHorizontal: 20,
    marginTop: 20,
  },
  pointsContainer: {
    width: "90%",
    height: "12%",
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
    padding: 15,
    marginHorizontal: 20,
    marginTop: 20,
    gap: "12%",
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
  pointsText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  bar: {
    height: 20,
    borderRadius: 10,
  },
  thresholdsContainer: {
    position: "absolute",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    height: "100%",
    paddingHorizontal: 5,
  },
  thresholdCircle: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "#FFFFFF",
    position: "absolute",
    top: "50%",
    transform: [{ translateY: -5 }],
  },
});

export default RewardsScreen;
