import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import LoginForm from './page/LoginForm'; // Import your LoginForm component
import Profile from "./page/Profile";

const Stack = createStackNavigator();

export default function AppNavigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login">
                <Stack.Screen name="Login" component={LoginForm} />
                <Stack.Screen name="Profil" component={Profile} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
