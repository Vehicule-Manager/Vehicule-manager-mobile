import { useNavigation } from '@react-navigation/native';
import React, {useContext, useState, useEffect} from 'react';
import {View, Image, TextInput, Button, StyleSheet, Text} from 'react-native';
import { ApiContext } from './ApiContext';

export default function LoginScreen({setToken: setTokenProp}) {
    const navigation = useNavigation(); // définition de la navigation
    const {login, user, loginError} = useContext(ApiContext);
    const [mail, setMail] = useState(''); // initialized with an empty string
    const [password, setPassword] = useState('') // définition des states pour la récupération des informations de connexion, notament ici des du mot de passe

//redirige vers la page d'accueil si l'utilisateur est connecté, le useEffect est appelé à chaque fois que la valeur de user est mise à jour
    useEffect(() => {
        if(user.message === "success"){// on vérifie que l'utilisateur est bien connecté et que le contenu de user est bien celui d'un utilisateur connecté
            navigation.navigate("Profil") // permet la navigation vers la page d'accueil
        }
    }, [user])

//fonction qui permet de récupérer les informations de connexion et de les envoyer à l'api à l'aide de login qui est défini dans le contexte
    const handleSubmit = async e => {
        login({
            mail,
            password
        });
    }
//mise en place de la vue avec les différents composants et éléments
    return (
        <View style={styles.container}>
            <Text style={styles.TextError}>{loginError}</Text>
            <TextInput style={styles.input} onChangeText={e => setMail(e)} value={mail} placeholder="Email" autoCapitalize="none"/>
            <TextInput style={styles.input} onChangeText={e => setPassword(e)} value={password} placeholder="Password" secureTextEntry={true}/>
            <Button onPress={handleSubmit} title='Connexion'/>
        </View>
    )
};

// définition du style de la vue
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    input: {
        borderBottomWidth: 1,
        borderWidth: 0,
        padding: 10,
        margin: 10,
        width: '80%',
        fontSize: 18,
    },
})
