import React from "react";

import { Text, StyleSheet, View } from "react-native";

type Props = {};

export const CommentScreen = (props: Props) => {
  return (
    <View style={styles.container}>
      <Text>Comment</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
});
