import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screen/Home";
import ProfileScreen from "../screen/Profile";
import SearchScreen from "../screen/Search";
import ReelsScreen from "../screen/Reels";

import Ionicons from "@expo/vector-icons/Ionicons";
import {
  GestureResponderEvent,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import ShopScreen from "../screen/Shop";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

import { Avatar, HStack, Input, Spacer } from "native-base";
import ReelsOutline, { ReelsFilled } from "../components/Icons/ReelsIcon";
import ShopOutline, { ShopFilled } from "../components/Icons/ShopIcon";
import MessegerIcon from "../components/Icons/MessegerIcon";
import InstagramLogo from "../components/Icons/InstagramLogo";
import AddIcon from "../components/Icons/AddIcon";
import HearthIcon from "../components/Icons/HearthIcon";

type TabBar = {
  activeIcon: JSX.Element;
  inActiveIcon: JSX.Element;
  onPress: (event: GestureResponderEvent) => void;
  accessibilityState: any;
};

const TabNavigation = () => {
  const [isReels, setIsReels] = React.useState(false);

  // const TabBar = (props: TabBar) => {
  //   const { item, onPress, accessibilityState } = props;

  //   const focused = accessibilityState.selected;

  //   return (
  //     <TouchableOpacity
  //       onPress={onPress}
  //       activeOpacity={1}
  //       style={styles.container}
  //     >
  //       <Ionicons
  //         name={focused ? item.activeIcon : item.inActiveIcon}
  //         size={23}
  //       />
  //     </TouchableOpacity>
  //   );
  // };
  const CustomTabBar: React.FC<TabBar> = ({ ...props }) => {
    const { activeIcon, inActiveIcon, onPress, accessibilityState } = props;

    const focused = accessibilityState.selected;

    return (
      <TouchableOpacity
        onPress={onPress}
        activeOpacity={1}
        style={styles.container}
      >
        {focused ? activeIcon : inActiveIcon}
      </TouchableOpacity>
    );
  };
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarButton: (props) => (
            <CustomTabBar
              {...props}
              activeIcon={<Ionicons name="home" size={23} />}
              inActiveIcon={<Ionicons name="home-outline" size={23} />}
            />
          ),
          title: "",
          headerStyle: {
            borderBottomWidth: 0,
            borderColor: "#ffffff",
            shadowColor: "#ffffff",
          },
          headerLeft: () => <InstagramLogo />,
          headerRight: () => (
            <HStack
              space={3.5}
              style={{
                paddingRight: 20,
              }}
            >
              <AddIcon />
              <HearthIcon />
              <MessegerIcon />
            </HStack>
          ),
          headerLeftContainerStyle: {
            paddingLeft: 20,
          },
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          tabBarButton: (props) => (
            <CustomTabBar
              {...props}
              activeIcon={<Ionicons name="search" size={23} />}
              inActiveIcon={<Ionicons name="search-outline" size={23} />}
            />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Reels"
        component={ReelsScreen}
        options={{
          tabBarButton: (props) => (
            <>
              {
                /* {props.accessibilityState?.selected
                ? setIsReels(true)
                : setIsReels(false)} */
                // console.log("ww")
              }
              <CustomTabBar
                {...props}
                activeIcon={<ReelsOutline />}
                // inActiveIcon={<ReelsOutline />}
                inActiveIcon={<ReelsOutline />}
              />
            </>
          ),
          headerTransparent: true,
          headerRight: () => <Ionicons name="camera-outline" size={26} />,
          headerRightContainerStyle: {
            paddingRight: 20,
            // paddingTop: 0o
          },
          // tabBarStyle: {
          //   backgroundColor: "black",
          // },
        }}
      />
      <Tab.Screen
        name="Shop"
        component={ShopScreen}
        options={{
          tabBarButton: (props) => (
            <CustomTabBar
              {...props}
              activeIcon={<ShopFilled />}
              inActiveIcon={<ShopOutline />}
            />
          ),
          // title: "",
          // headerLeft: () => (
          //   // <Input size="xs" placeholder="xs Input" w="10" px="4" />
          //   <Input
          //     variant={"filled"}
          //     borderRadius="2xl"
          //     placeholder="Search shops"
          //     size={"lg"}
          //     py={0.5}
          //     style={{
          //       width: 280,
          //       // maxWidth: 100,
          //     }}
          //   />
          // ),
          headerRight: () => (
            <HStack justifyContent={"space-between"} space="4">
              <Ionicons name="bookmark-outline" size={26} />
              <Ionicons name="menu-outline" size={26} />
            </HStack>
          ),
          headerRightContainerStyle: {
            paddingRight: 10,
          },
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarButton: (props) => (
            <CustomTabBar
              {...props}
              activeIcon={
                <Avatar
                  source={{
                    uri: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                  }}
                  size={8}
                  borderWidth={2}
                  padding="0.5"
                />
              }
              inActiveIcon={
                <Avatar
                  source={{
                    uri: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                  }}
                  size={8}
                />
              }
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigation;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    position: "relative",
    flex: 1,
  },
});
