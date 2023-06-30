import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import LoginForm from './feature/loginApi/LoginScreen';
import Profile from "./page/Profile";
import ProfileLeasing from "./page/ProfileLeasing";
import EditEmail from "./page/EditEmail";
import ChangePassword from "./page/ChangePassword";
import ProfileVehicle from "./page/ProfileVehicle";
import EditInformation from "./page/EditInformation";
import Contact from "./page/Contact.js";
import App from '../App'; // Make sure the path to your App component is correct
import {AppRegistry} from "react-native";

AppRegistry.registerComponent('mobile-vehicule-manager', () => App);

const Stack = createStackNavigator();

export default function AppNavigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login">
                <Stack.Screen name="Login" component={LoginForm} options={{ title: 'Connexion' }}/>
                <Stack.Screen name="Profil" component={Profile} options={{ title: 'Mon Profil' }} />
                <Stack.Screen name="ProfileLeasing" component={ProfileLeasing} options={{ title: 'Mes véhicules' }}/>
                <Stack.Screen name="EditEmail" component={EditEmail} options={{ title: 'Modifier mes informations' }}/>
                <Stack.Screen name="ChangePassword" component={ChangePassword} options={{ title: 'Changer mon mot de passe' }}/>
                <Stack.Screen name="ChangeProfileInfo" component={EditInformation} options={{ title: 'Changer mes information' }}/>
                <Stack.Screen name="ProfileVehicle" component={ProfileVehicle} options={{ title: 'Mon véhicule' }}/>
                <Stack.Screen name="Contact" component={Contact} options={{ title: 'Contact' }}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}
