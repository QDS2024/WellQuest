import React from "react";
import { StyleSheet, Text, Pressable, View } from "react-native";
import Modal from "react-native-modal";
import Colors from "../../colors";

const QuestCardModal = ({ modalVisible, handleClose, questData }) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onBackdropPress={() => handleClose(false)}
    >
      <View style={styles.centeredView} activeOpacity={1}>
        <View style={styles.modalView}>
          <Text style={styles.modalTitle}>{questData.title}</Text>
          <Text>{questData.description}</Text>
          <Text style={styles.modalPoints}>{questData.points + " points"}</Text>
          <Pressable
            style={[styles.button, styles.buttonClose]}
            onPress={() => handleClose(false)}
          >
            <Text style={styles.textStyle}>Close</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: "80%",
    gap: 15,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: Colors.darkBeige,
    width: "auto",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalTitle: {
    textAlign: "left",
    textAlignVertical: "top",
    fontWeight: "bold",
  },
  modalPoints: {
    marginVertical: 15,
    textAlign: "center",
    fontSize: 18,
  },
});

export default QuestCardModal;
