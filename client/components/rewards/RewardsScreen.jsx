import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { useEffect } from "react";
import Card from "./Card";

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
  return (
    <>
      {/* Rewards Description */}
      <View style={styles.rewardDescription}>
        <Text style={styles.descriptionTitle}>Rewards</Text>
        <Text style={styles.descriptionText}>
          Redeem your points for cool prizes!
        </Text>
      </View>

      {/* Rewards List */}
      <View style={styles.container}>
        <FlatList
          data={testRewardData}
          renderItem={({ item, index }) => (
            <Card
              key={index.toString()}
              name={item.name}
              description={item.description}
              price={item.price}
            />
          )}
          keyExtractor={(_item, index) => index.toString()}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  rewardDescription: {
    width: "90%",
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
  descriptionTitle: {
    fontSize: 40,
    fontWeight: "bold",
  },
  descriptionText: {
    fontSize: 20,
  },
});

export default RewardsScreen;
