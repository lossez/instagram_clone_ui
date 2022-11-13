import React from "react";

import { LinearGradient } from "expo-linear-gradient";
import { Avatar, VStack } from "native-base";
import { Text } from "react-native";

type AvatarType = {
  uri: string;
  name: string;
};

export const AvatarGradient = ({ uri, name }: AvatarType) => {
  return (
    <VStack space={1} p={2}>
      <LinearGradient
        colors={["#EA0C5F", "#FF5341", "#FF8820"]}
        // start={{ x: 0.0, y: 1.0 }}
        // end={{ x: 1.0, y: 1.0 }}
        style={{
          borderRadius: 100,
          padding: 3, // This should be the border width you want to have
        }}
      >
        <Avatar
          bg="gray.500"
          size={"lg"}
          source={{
            uri: uri,
          }}
          borderWidth={2}
          borderColor={"#ffffff"}
        ></Avatar>
      </LinearGradient>
      <Text style={{ textAlign: "center" }}>{name}</Text>
    </VStack>
  );
};
