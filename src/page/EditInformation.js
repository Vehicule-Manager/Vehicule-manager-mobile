import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {StyleSheet, TextInput, View, Button, Text, ScrollView} from 'react-native';
import FooterNav from "../components/layout/footer";

export default function EditInformation() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [city, setCity] = useState('');
    const [address, setAddress] = useState('');
    const [zipCode, setZipCode] = useState('');
    const navigation = useNavigation();

    const handleLogin = () => {
        // Add login logic here
        navigation.navigate("Profil");
    }

    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={styles.editInfoContainer}>
                    <Text style={styles.title}>Modifer mon prénom</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={text => setFirstName(text)}
                        value={firstName}
                        placeholder="Jean-Yves"
                        autoCapitalize="none"
                    />
                    <Text style={styles.title}>Modifer mon nom de famille</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={text => setLastName(text)}
                        value={lastName}
                        placeholder="Le Skeleton"
                        autoCapitalize="none"
                    />
                    <Text style={styles.title}>Modifer mon addresse</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={text => setAddress(text)}
                        value={address}
                        placeholder="12 rue saint Diablo 4"
                        autoCapitalize="none"
                    />
                    <Text style={styles.title}>Modifer mon code postal</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={text => setZipCode(text)}
                        value={zipCode}
                        placeholder="06660"
                        autoCapitalize="none"
                    />
                    <Text style={styles.title}>Modifer ma ville</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={text => setCity(text)}
                        value={city}
                        placeholder="Kyovashad"
                        autoCapitalize="none"
                    />
                    <Button
                        title="Confirmer"
                        onPress={handleLogin}
                    />
                </View>
            </ScrollView>
            <FooterNav/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    editInfoContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 40,
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
