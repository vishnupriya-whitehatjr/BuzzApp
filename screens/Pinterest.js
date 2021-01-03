import * as React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Header from "../components/Header";

export default class Pinterest extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View>
          <Header />
          <Text style={styles.displayText}>Pinterest</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
  },
  displayText: {
    color: "black",
    marginTop: "30%",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    width: "80%",
    alignSelf: "center",
  },
});
