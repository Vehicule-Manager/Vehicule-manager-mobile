import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import LoginForm from './page/LoginForm'; // Import your LoginForm component
import Profile from "./page/Profile";
import ProfileLeasing from "./page/ProfileLeasing";
import EditProfile from "./page/EditProfile";
import ChangePassword from "./page/ChangePassword";


const Stack = createStackNavigator();

export default function AppNavigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login">
                <Stack.Screen name="Login" component={LoginForm} />
                <Stack.Screen name="Profil" component={Profile} />
                <Stack.Screen name="ProfileLeasing" component={ProfileLeasing} />
                <Stack.Screen name="EditProfil" component={EditProfile} />
                <Stack.Screen name="ChangePassword" component={ChangePassword} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
