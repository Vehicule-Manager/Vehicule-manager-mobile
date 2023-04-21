import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import LoginForm from './page/LoginForm'; // Import your LoginForm component
import Profile from "./page/Profile";
import ProfileLeasing from "./page/ProfileLeasing";
import EditProfile from "./page/EditProfile";
import ChangePassword from "./page/ChangePassword";
import ProfileVehicle from "./page/ProfileVehicle";

const Stack = createStackNavigator();

export default function AppNavigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login">
                <Stack.Screen name="Login" component={LoginForm} options={{ title: 'Connexion' }}/>
                <Stack.Screen name="Profil" component={Profile} options={{ title: 'Mon Profil' }} />
                <Stack.Screen name="ProfileLeasing" component={ProfileLeasing} options={{ title: 'Mes véhicules' }}/>
                <Stack.Screen name="EditProfil" component={EditProfile} options={{ title: 'Modifier mes informations' }}/>
                <Stack.Screen name="ChangePassword" component={ChangePassword} options={{ title: 'Changer mon mot de passe' }}/>
                <Stack.Screen name="ProfileVehicle" component={ProfileVehicle} options={{ title: 'Mon véhicule' }}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}
