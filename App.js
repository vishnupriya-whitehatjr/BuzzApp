import * as React from "react";
import { View } from "react-native";

import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import Facebook from "./screens/Facebook";
import Instagram from "./screens/Instagram";
import LinkedIn from "./screens/LinkedIn";
import Pinterest from "./screens/Pinterest";
export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}

var AppNavigator = createBottomTabNavigator({
  Facebook: { screen: Facebook },
  Instagram: { screen: Instagram },
  Pinterest: { screen: Pinterest },
  LinkedIn: { screen: LinkedIn },
});

const AppContainer = createAppContainer(AppNavigator);
