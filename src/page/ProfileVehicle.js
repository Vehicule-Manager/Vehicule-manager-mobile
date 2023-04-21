import React, {useState} from 'react';
import {StyleSheet, TextInput, View, Button, Text, Image, ScrollView} from 'react-native';
import {useNavigation} from "@react-navigation/native";

export default function ProfileLeasing() {
    const navigation = useNavigation();

    const handleLogin = () => {
        navigation.navigate("Profil");
    }

    return (
        <ScrollView style={styles.scrollView}>
            <View style={styles.container}>
                <View style={styles.containerGap}>
                    <View>
                        <Text style={styles.p}>Votre Véhicule</Text>
                        <Image
                            source={{uri: 'https://i.pinimg.com/originals/dc/19/e9/dc19e9b94a372ebc21ffeb7623d5632a.png'}}
                            style={{width: 300, height: 150}}/>
                        <Text style={styles.p}>Caractéristiques :</Text>
                        <Text style={styles.p}>Options :</Text>
                    </View>


                </View>
            </View>
        </ScrollView>
    )
        ;
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',

    },

    containerGap: {
        flex: 1,
        justifyContent: 'center',
        flexDirection: 'column',
        rowGap: 20,
    },

    p: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    }

});
