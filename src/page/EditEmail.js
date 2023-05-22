import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { StyleSheet, TextInput, View, Button, Text } from 'react-native';
import FooterNav from "../components/layout/footer";

export default function EditEmail() {
    const [email, setEmail] = useState('');
    const navigation = useNavigation();

    const handleLogin = () => {
        // Add login logic here
        navigation.navigate("Profil");
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Modifer mon email</Text>
            <TextInput
                style={styles.input}
                onChangeText={text => setEmail(text)}
                value={email}
                placeholder="Email"
                autoCapitalize="none"
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
