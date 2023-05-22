import React, {useState} from 'react';
import {StyleSheet, TextInput, View, Button, Text, Image, ScrollView} from 'react-native';
import {useNavigation} from "@react-navigation/native";
import FooterNav from "../components/layout/footer";

export default function Contact() {
    const navigation = useNavigation();

    const handleLogin = () => {
        navigation.navigate("Contact");
    }

    return (
        <ScrollView style={styles.scrollView}>
            <View style={styles.container}>
                <View style={styles.containerGap}>
                    <View>
                        <Text style={styles.p}>Vous souhaitez nous contacter ?</Text>

                        <Text style={styles.p}>Par téléphone :</Text>
                        <Text style={styles.p}>Au 030204204</Text>

                        <Text style={styles.p}>Par mail :</Text>
                        <Text style={styles.p}>rien.rien@gmail.com</Text>

                        <Text style={styles.p}>Ou rendez-vous directement à notre adresse !</Text>
                        <Text style={styles.p}> 10 rue belleville 60200 Compiègne</Text>



                    </View>


                </View>
                <FooterNav/>
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
