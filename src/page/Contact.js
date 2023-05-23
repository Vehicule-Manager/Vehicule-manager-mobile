import React, {useState} from 'react';
import {StyleSheet, TextInput, View, Button, Text, Image, ScrollView} from 'react-native';
import {useNavigation} from "@react-navigation/native";
import FooterNav from "../components/layout/footer";

export default function Contact() {
    const [value, setValue] = useState('');
    const navigation = useNavigation();


    const handleLogin = () => {
        navigation.navigate("Contact");
    }

    return (
            <View style={styles.container}>
                <ScrollView>
                <View style={styles.containerGap}>
                    <View>
                        <Text style={styles.p}>Vous pouvez nous contacter pour des informations plus précise sur votre demande, grâce aux possibilités suivantes.</Text>

                        <Text style={styles.p}>Par téléphone :</Text>
                        <Text style={styles.p}>Au 03.02.04.20.4</Text>

                        <Text style={styles.p}>Par notre formulaire de contact :</Text>
                        <Text style={styles.p}>rien.rien@gmail.com</Text>
                            <Text style={styles.title}>Votre demande</Text>
                        <TextInput
                            placeholder="Veuillez inscrire votre demande"
                            onChangeText={text => setValue(text)}
                            value={value}
                            style={styles.demande}
                        />
                        <Button
                            title="Confirmer"
                            onPress={handleLogin}
                        />

                        <Text style={styles.margin}>Ou rendez-vous directement à notre adresse :</Text>
                        <Text style={styles.p}> 10 rue belleville 60200 Compiègne</Text>
                        <Text style={styles.p}> Horaires d'ouverture garage</Text>
                        <Text style={styles.p}>Lundi : Fermé | Mardi : 10h - 18h </Text>
                        <Text style={styles.p}> Mercredi : 10h - 18h | Jeudi : 10h - 18h</Text>
                        <Text style={styles.p}> Vendredi : 10h - 18h | Samedi : 10h - 18h</Text>
                        <Text style={styles.p}> Dimanche : Fermé</Text>


                    </View>
                </View>
                </ScrollView>
            <FooterNav/>
            </View>

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
        marginBottom: 100,
    },

    title: {
      textAlign: 'center',
      fontSize: 20,
      fontWeight: 'bold',
        margin:20,
        padding:10,
    },

    demande: {
        padding:10,
        margin:10,
    },

    margin:{
        textAlign: 'center',
        fontSize: 15,
        fontWeight: 'bold',
        padding: 10,
        marginTop:30,
    },

    p: {
        textAlign: 'center',
        fontSize: 15,
        fontWeight: 'bold',
        padding: 10,
    },

});
