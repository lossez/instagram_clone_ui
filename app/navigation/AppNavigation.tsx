import React from 'react'

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screen/Home';

const Stack = createNativeStackNavigator();

import TabNavigation from './TabNavigation';

const AppNavigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator >
                <Stack.Screen name="Navigation" component={TabNavigation} options={{
                    headerShown: false
                }} />
                <Stack.Screen name="Home" component={HomeScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default AppNavigation