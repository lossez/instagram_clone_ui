import { Video } from "expo-av";
import {
  Avatar,
  Button,
  FlatList,
  HStack,
  Icon,
  ScrollView,
  Spacer,
  Text,
  View,
  VStack,
} from "native-base";
import React from "react";
import { StyleSheet, Dimensions, TouchableOpacity, Image } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { PlaneWhiteIcon } from "../components/Icons/PlaneIcon";
import { SafeAreaView } from "react-native-safe-area-context";

import * as NavigationBar from "expo-navigation-bar";
import { useIsFocused } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { ReelsVideo } from "../components/Reels/Reels";

const { width, height } = Dimensions.get("window");

type StatusType = {
  isPlaying: false;
};

const ReelsScreen = () => {
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});
  const isFocussed = useIsFocused();

  const number = [1, 2, 3, 4, 5];

  React.useEffect(() => {
    if (isFocussed) {
      NavigationBar.setBackgroundColorAsync("black");
    }
    return () => {
      NavigationBar.setBackgroundColorAsync("white");
    };
  }, [isFocussed]);

  return (
    <SafeAreaView style={styles.container}>
      {isFocussed ? (
        <StatusBar style="light" backgroundColor="black" />
      ) : (
        <StatusBar style="dark" />
      )}
      <ScrollView>
        <ReelsVideo />
      </ScrollView>
    </SafeAreaView>
  );
};

export default ReelsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#ffffff'
  },
  video: {
    height: height,
    width: width,
  },
  textWhite: {
    color: "#ffffff",
  },
});
