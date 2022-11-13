import { Video } from "expo-av";
import {
  Avatar,
  Button,
  HStack,
  Icon,
  Spacer,
  Text,
  View,
  VStack,
} from "native-base";
import React from "react";
import { StyleSheet, Dimensions, TouchableOpacity, Image } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { SafeAreaView } from "react-native-safe-area-context";

import * as NavigationBar from "expo-navigation-bar";
import { useIsFocused } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { PlaneWhiteIcon } from "../Icons/PlaneIcon";

const { width, height } = Dimensions.get("window");

type StatusType = {
  isPlaying: false;
};

export const ReelsVideo = () => {
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});
  return (
    <>
      {/* <Pressable onPress={() =>
                // status?.isPlaying ? video.current?.pauseAsync() : video.current?.playAsync()
                console.log('pressed')
            }>
                <Video
                    ref={video}
                    style={styles.video}
                    source={{
                        uri: 'https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
                    }}
                    resizeMode='cover'
                    useNativeControls={false}
                    isLooping
                    shouldPlay
                    onPlaybackStatusUpdate={status => setStatus(() => status)}
                />
            </Pressable> */}
      {/* <TouchableOpacity onPress={() => console.log("pressed")}> */}
      <Video
        ref={video}
        style={styles.video}
        source={{
          uri: "https://assets.mixkit.co/videos/preview/mixkit-portrait-of-a-fashion-woman-with-silver-makeup-39875-large.mp4",
        }}
        resizeMode="cover"
        useNativeControls={false}
        // isLooping
        // shouldPlay
        onPlaybackStatusUpdate={(status) => setStatus(() => status)}
      />
      {/* </TouchableOpacity> */}
      <View
        style={{
          position: "absolute",
          bottom: 0,
          right: 0,
          left: 0,
        }}
      >
        <HStack
          //   style={{
          //     display: "flex",
          //     alignItems: "flex-end",
          //   }}
          alignItems={"flex-end"}
        >
          <Spacer>
            <HStack alignItems={"center"} space="2" pb={2} pl={4}>
              <Avatar
                size={8}
                source={{
                  uri: "https://images.unsplash.com/photo-1614289371518-722f2615943d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
                }}
              />
              <Text
                bold
                style={{
                  color: "#ffffff",
                }}
              >
                Sabrina Watts
              </Text>
              <Button
                variant={"outline"}
                borderRadius="8"
                borderColor={"white"}
                py={"1.5"}
                _text={{
                  color: "white",
                }}
              >
                Follow
              </Button>
            </HStack>
            <Text style={styles.textWhite} pb={4} pl={4}>
              Lorem ipsum dolor sit amet consectetu ...
            </Text>
          </Spacer>
          <VStack space={4} justifyContent={"center"} textAlign="center" p={4}>
            <Spacer alignSelf="center">
              <Icon as={Ionicons} name="heart-outline" size={8} color="white" />
              <Text style={styles.textWhite}>20.8k</Text>
            </Spacer>
            <Spacer alignSelf="center">
              <Icon
                as={Ionicons}
                name="chatbubble-outline"
                size={7}
                color="white"
                style={{
                  transform: [{ scaleX: -1 }],
                }}
              />
              <Text style={{ ...styles.textWhite, textAlign: "center" }}>
                208
              </Text>
            </Spacer>
            <Spacer alignSelf="center">
              <PlaneWhiteIcon />
            </Spacer>
            <Spacer>
              <Icon
                as={Ionicons}
                name="ellipsis-vertical-outline"
                size={5}
                color="white"
                style={{
                  alignSelf: "center",
                }}
              />
            </Spacer>
            <Spacer>
              {/* <Avatar
                size={8}
                rounded={"md"}
                borderWidth="2"
                borderColor="white"
                _image={{
                  resizeMode: "cover",
                }}
                source={{
                  uri: "https://source.unsplash.com/user/c_v_r/100x100",
                }}
                // https://source.unsplash.com/user/c_v_r/100x100
              /> */}
              <Image
                source={{
                  uri: "https://source.unsplash.com/user/c_v_r/100x100",
                }}
                style={{
                  width: 36,
                  height: 36,
                  borderWidth: 2,
                  borderColor: "white",
                  borderRadius: 8,
                }}
              />
            </Spacer>
          </VStack>
        </HStack>
      </View>
    </>
  );
};

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
