import React from "react";
import { useEffect } from "react";
import {
  View,
  Text,
  FlatList,
  Button,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";

const Card = ({ name, description, price, purchase, user }) => {
  const handlePurchase = () => {
    purchase(user, price);
  };

  useEffect(() => {
    console.log(price);
  }, []);

  return (
    <>
      <View style={styles.card}>
        <View style={styles.row}>
          {/* Image container */}
          <View style={[styles.column, { width: "25%" }]}>
            <View style={styles.imgContainer}>
              <Image
                source={require("./testReward.png")} // Specify the path to the local image
                style={styles.image}
              />
            </View>
          </View>
          {/* Details container */}
          <View style={([styles.column], { width: "75%" })}>
            <Text style={styles.name}>{name}</Text>
            <Text>{description}</Text>
            <View style={[styles.row, { justifyContent: "space-between" }]}>
              <View style={[styles.column]}>
                <Text>Price: {price} points</Text>
              </View>
              {/* Purchase button */}
              <View style={[styles.column]}>
                <TouchableOpacity
                  onPress={handlePurchase}
                  style={styles.button}
                >
                  <Text>Buy</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  card: {
    width: "90%",
    backgroundColor: "white",
    padding: 10,
    marginVertical: 5,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  row: {
    flexDirection: "row",
  },
  column: {
    margin: 5,
    paddingRight: 10,
    // borderColor: "black",
    // borderWidth: 1,
  },
  image: {
    width: 70,
    height: 70,
    resizeMode: "cover", // Set the image resizing mode
  },
  imgContainer: {},
  button: {
    backgroundColor: "lightgray",
    borderRadius: 5,
    height: 30,
    width: 60,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Card;
