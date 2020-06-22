import { createStackNavigator } from "react-navigation-stack";
import Home from "../screens/home";
import ReviewDetails from "../screens/reviewDetails";

const screens = {
  Home: {
    screen: Home,
    navigationOptions: {
      title: "GameZone",
      // headerStyle: { backgroundColor: "#eee" },
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

const HomeStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: "#808080",
      height: 70,
      // headerTintColor: "#000",
    },
  },
});

//we do not need this now as we have implemented drawer
// export default createAppContainer(HomeStack);
//but we still need to export it
export default HomeStack;
