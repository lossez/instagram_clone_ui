import React from 'react'

import { NavigationContainer, TabActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screen/Home';
import ProfileScreen from '../screen/Profile';
import SearchScreen from '../screen/Search';
import ReelsScreen from '../screen/Reels';

import Ionicons from '@expo/vector-icons/Ionicons'
import { GestureResponderEvent, TouchableOpacity, StyleSheet, Text } from 'react-native';
import ShopScreen from '../screen/Shop';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

import { Avatar, HStack, Icon, View } from 'native-base'
import ReelsOutline, { ReelsFilled } from '../components/Icons/ReelsIcon';
import ShopOutline, { ShopFilled } from '../components/Icons/ShopIcon';
import MessegerIcon from '../components/Icons/MessegerIcon';
import InstagramLogo from '../components/Icons/InstagramLogo';
import AddIcon from '../components/Icons/AddIcon'
import HearthIcon from '../components/Icons/HearthIcon';

type TabBar = {
    item: any,
    onPress: (event: GestureResponderEvent) => void
    accessibilityState: any,
    custom: boolean
}

const AppNavigation = () => {

    const TabBar = (props: TabBar) => {
        const { item, onPress, accessibilityState } = props

        const focused = accessibilityState.selected;

        return (
            <TouchableOpacity
                onPress={onPress}
                activeOpacity={1}
                style={styles.container}>
                <Ionicons
                    name={focused ? item.activeIcon : item.inActiveIcon}
                    size={23}
                />
            </TouchableOpacity>
        )
    }
    const CustomTabBar = (props: any) => {
        const { activeIcon, inActiveIcon, onPress, accessibilityState, custom } = props

        const focused = accessibilityState.selected;

        return (
            <TouchableOpacity
                onPress={onPress}
                activeOpacity={1}
                style={styles.container}>
                {focused ? activeIcon : inActiveIcon}
            </TouchableOpacity>
        )
    }
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="Home" component={HomeScreen} options={{
                    tabBarButton: (props) => (
                        <TabBar
                            {...props}
                            item={{
                                activeIcon: "home",
                                inActiveIcon: "home-outline",
                                label: "Akun",
                            }}
                        />
                    ),
                    title: '',
                    headerStyle: {
                        borderBottomWidth: 0,
                        borderColor: '#ffffff',
                        shadowColor: '#ffffff'
                    },
                    headerLeft: () => (
                        <InstagramLogo />
                    ),
                    headerRight: () => (
                        <HStack space={3.5} style={{
                            paddingRight: 20
                        }}>

                            <AddIcon />
                            <HearthIcon />
                            <MessegerIcon />
                        </HStack>
                    ),
                    headerLeftContainerStyle: {
                        paddingLeft: 20,
                    }

                }} />
                <Tab.Screen name="Search" component={SearchScreen} options={{
                    tabBarButton: (props) => (
                        <TabBar
                            {...props}
                            item={{
                                activeIcon: "search",
                                inActiveIcon: "search-outline",
                                label: "Akun",
                            }}
                        />
                    ),

                }} />
                <Tab.Screen name="Reels" component={ReelsScreen} options={{
                    tabBarButton: (props) => (
                        <CustomTabBar
                            {...props}
                            activeIcon={<ReelsFilled />}
                            inActiveIcon={<ReelsOutline />}
                        />
                    )

                }} />
                <Tab.Screen name="Shop" component={ShopScreen} options={{
                    tabBarButton: (props) => (
                        <CustomTabBar
                            {...props}
                            activeIcon={<ShopFilled />}
                            inActiveIcon={<ShopOutline />}
                        />
                    )

                }} />
                <Tab.Screen name="Profile" component={ProfileScreen} options={{
                    tabBarButton: (props) => (
                        <CustomTabBar
                            {...props}
                            activeIcon={<Avatar source={{
                                uri: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
                            }} size={8} borderWidth={2} padding='0.5' />}
                            inActiveIcon={<Avatar source={{
                                uri: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
                            }} size={8} />}
                        />
                    )

                }} />
            </Tab.Navigator>

        </NavigationContainer>
    )
}

export default AppNavigation

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        position: 'relative',
        flex: 1

    }
})