import { createStackNavigator } from "react-navigation-stack";
import Home from "../screens/home";
import ReviewDetails from "../screens/reviewDetails";
import Header from "../shared/header";
import React from "react";

const screens = {
  Home: {
    screen: Home,
    //this is a static navigationOptions with data but we can make it dynamic also see the below impl
    // navigationOptions: {
    //   // title: "GameZone",
    //   // headerStyle: { backgroundColor: "#eee" },
    //   headerTitle: () => <Header />,
    // },

    //get the navigation object here and pass it to custom header
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => <Header navigation={navigation} title="GameZone" />,
      };
    },
  },
  ReviewDetails: {
    screen: ReviewDetails,
    navigationOptions: {
      title: "Review Details",
      // headerStyle: { backgroundColor: "#eee" },
    },
  },
};

const HomeStack = createStackNavigator(screens);

//we do not need this now as we have implemented drawer
// export default createAppContainer(HomeStack);
//but we still need to export it
export default HomeStack;
