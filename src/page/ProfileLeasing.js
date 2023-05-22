import React, {useState} from 'react';
import {StyleSheet, TextInput, View, Button, Text, Image, ScrollView} from 'react-native';
import {useNavigation} from "@react-navigation/native";
import FooterNav from "../components/layout/footer";

export default function ProfileLeasing() {
    const navigation = useNavigation();

    const handleLogin = () => {
        navigation.navigate("ProfileVehicle");
    }

    return (
        <ScrollView style={styles.scrollView}>
            <View style={styles.container}>
                <Text style={styles.title}>Vos véhicules</Text>
                <View style={styles.containerGap}>
                    <View>
                        <Text style={styles.p}>Véhicule 1</Text>
                        <Image
                            source={{uri: 'https://i.pinimg.com/originals/dc/19/e9/dc19e9b94a372ebc21ffeb7623d5632a.png'}}
                            style={{width: 300, height: 150}}/>
                        <Button
                            title="Voir le véhicule"
                            onPress={handleLogin}
                        />
                    </View>
                    <View>
                        <Text style={styles.p}>Véhicule 2</Text>
                        <Image
                            source={{uri: 'https://i.pinimg.com/originals/dc/19/e9/dc19e9b94a372ebc21ffeb7623d5632a.png'}}
                            style={{width: 300, height: 150}}/>
                        <Button
                            title="Voir le véhicule"
                            onPress={handleLogin}
                        />
                    </View>
                    <View>
                        <Text style={styles.p}>Véhicule 3</Text>
                        <Image
                            source={{uri: 'https://i.pinimg.com/originals/dc/19/e9/dc19e9b94a372ebc21ffeb7623d5632a.png'}}
                            style={{width: 300, height: 150}}/>
                        <Button
                            title="Voir le véhicule"
                            onPress={handleLogin}
                        />
                    </View>
                    <View>
                        <Text style={styles.p}>Véhicule 4</Text>
                        <Image
                            source={{uri: 'https://i.pinimg.com/originals/dc/19/e9/dc19e9b94a372ebc21ffeb7623d5632a.png'}}
                            style={{width: 300, height: 150}}/>
                        <Button
                            title="Voir le véhicule"
                            onPress={handleLogin}
                        />
                    </View>
                </View>
            </View>
            <FooterNav/>
        </ScrollView>
    )
        ;
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 80,
    },

    containerGap: {
        flex: 1,
        justifyContent: 'center',
        flexDirection: 'column',
        rowGap: 20,
    },
    title: {
        marginTop: 50,
        fontSize: 24,
        fontWeight: 'bold',
    },

    p: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    }

});
