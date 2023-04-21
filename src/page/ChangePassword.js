import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { StyleSheet, TextInput, View, Button, Text } from 'react-native';
import FooterNav from "../components/layout/header";

export default function ChangePassword() {
    const [password, setPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [newConfirmPassword, setNewConfirmPassword] = useState('');
    const navigation = useNavigation();

    const handleLogin = () => {
        // Add login logic here
        navigation.navigate("Profil");
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Modifer le mot de passe</Text>
            <TextInput
                style={styles.input}
                onChangeText={text => setPassword(text)}
                value={password}
                placeholder="Ancien mot de passe"
                secureTextEntry={true}
            />
            <TextInput
                style={styles.input}
                onChangeText={text => setNewPassword(text)}
                value={newPassword}
                placeholder="Nouveau mot de passe"
                secureTextEntry={true}
            />
            <TextInput
                style={styles.input}
                onChangeText={text => setNewConfirmPassword(text)}
                value={newConfirmPassword}
                placeholder="Corfirmation de mot de passe"
                secureTextEntry={true}
            />
            <Button
                title="Confirmer"
                onPress={handleLogin}
            />
            <FooterNav/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    input: {
        borderBottomWidth: 1,
        borderWidth: 0,
        padding: 10,
        margin: 10,
        width: '80%',
        fontSize: 18,
    },
});
