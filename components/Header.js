import * as React from "react";
import { Text, View, StyleSheet } from "react-native";

export default class Header extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.displayText}>Buzz App </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  displayText: {
    backgroundColor: "pink",
    color: "white",
    textAlign: "center",
    fontSize: 30,
    height: 80,
    paddingTop: "9%",
  },
});
