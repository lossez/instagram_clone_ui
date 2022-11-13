import React from "react";

import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screen/Home";

const Stack = createNativeStackNavigator();

import TabNavigation from "./TabNavigation";
import ReelsScreen from "../screen/Reels";
import ShopVideos from "../screen/ShopVideos";
import { Icon } from "native-base";
import Ionicons from "@expo/vector-icons/Ionicons";
import BookmarkScreen from "../screen/Bookmark";

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Navigation"
          component={TabNavigation}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Reels" component={ReelsScreen} />
        <Stack.Screen
          name="ShopVideos"
          component={ShopVideos}
          options={{
            title: "Videos",
            headerRight: () => <Ionicons name="bookmark-outline" size={26} />,
          }}
        />
        <Stack.Screen name="Bookmark" component={BookmarkScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
