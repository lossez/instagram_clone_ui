import React from "react";

import { Avatar, Text, VStack } from "native-base";
import { FlatList, StyleSheet, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useIsFocused } from "@react-navigation/native";
import { AvatarGradient } from "../components/Avatar/Avatar";

const ShopVideos = () => {
  const [dataStory, setDataStory] = React.useState<any>([]);
  const isFocussed = useIsFocused();

  React.useEffect(() => {
    if (isFocussed) {
      fetch("https://randomuser.me/api/?results=6")
        .then((res) => res.json())
        .then((data) => setDataStory(data.results));
    }
  }, [isFocussed]);

  return (
    <View style={styles.container}>
      <View
        style={{
          padding: 20,
        }}
      >
        <Text bold>Live now</Text>
        <FlatList
          showsHorizontalScrollIndicator={false}
          horizontal
          data={dataStory}
          renderItem={({ item }) => (
            <AvatarGradient
              uri={item.picture.medium}
              name={item.name.first}
              key={Math.random()}
            />
          )}
          keyExtractor={(item) => Math.random().toString()}
        />
        <Text bold>For you</Text>
      </View>
    </View>
  );
};

export default ShopVideos;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
});
