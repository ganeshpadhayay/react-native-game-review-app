import React, { useState } from "react";
import { View, FlatList, TouchableOpacity, Text } from "react-native";
import { globalStyles } from "../styles/global";
import Card from "../shared/card";

export default function Home({ navigation }) {
  const [reviews, setReviews] = useState([
    {
      title: "Zelda, Breath of Fresh Air",
      rating: 5,
      body: "lorem ipsum",
      key: "1",
    },
    { title: "Gotta catch them all", rating: 4, body: "lorem ipsum", key: "2" },
    { title: "Final Fantasy", rating: 3, body: "lorem ipsum", key: "3" },
  ]);

  const pressHandler = () => {
    navigation.navigate("ReviewDetails");
    // navigation.push("ReviewDetails")
  };

  return (
    <View style={globalStyles.container}>
      <FlatList
        data={reviews}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate("ReviewDetails", item)}
          >
            <Card>
              <Text style={globalStyles.titleText}>{item.title}</Text>
            </Card>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
