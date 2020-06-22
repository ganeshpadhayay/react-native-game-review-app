import { createStackNavigator } from "react-navigation-stack";
import About from "../screens/about";
import Header from "../shared/header";
import React from "react";

const screens = {
  About: {
    screen: About,
    // navigationOptions: {
    //   // title: "About GameZone",
    //   headerTitle: () => <Header />,
    // },

    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => (
          <Header navigation={navigation} title="About GameZone" />
        ),
      };
    },
  },
};

const AboutStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: "#808080",
      height: 70,
      //   headerTintColor: "#444",
    },
  },
});

export default AboutStack;
