import React, {useEffect, useState} from 'react';
import {StyleSheet, View, Text, Image, ScrollView} from 'react-native';
import {useRoute} from "@react-navigation/native";
import axios from "axios";
import { API_PATH } from '@env';

export default function ProfileLeasing() {
    const route = useRoute();
    const vehicleId = route.params.vehicleId;
    const [vehicle, setVehicle] = useState([]);
    const [model, setModel] = useState([]);
    const [brand, setBrand] = useState([]);
    const [energie, setEnergie] = useState([]);
    const [type, setType] = useState([]);
    const [gearboxe, setGearBoxe] = useState([]);

    useEffect(() => {
        axios.get(`${API_PATH}vehicules/${vehicleId}`)
            .then(response => {
                const data = response.data;
                setVehicle(data[0]);
            })
            .catch(error => console.error(error));
    }, []);

    useEffect(() => {
        axios.get(`${API_PATH}models/${vehicle.id_model_car}`)
            .then(response => {
                const data = response.data;
                setModel(data[0]);
            })
            .catch(error => console.error(error));
    }, [vehicle]);

    useEffect(() => {
        axios.get(`${API_PATH}brands/${vehicle.id_brands}`)
            .then(response => {
                const data = response.data;
                setBrand(data[0]);
            })
            .catch(error => console.error(error));
    }, [vehicle]);

    useEffect(() => {
        axios.get(`${API_PATH}energies/${vehicle.id_energies}`)
            .then(response => {
                const data = response.data;
                setEnergie(data[0]);
            })
            .catch(error => console.error(error));
    }, [vehicle]);

    useEffect(() => {
        axios.get(`${API_PATH}types/${vehicle.id_types}`)
            .then(response => {
                const data = response.data;
                setType(data[0]);
            })
            .catch(error => console.error(error));
    }, [vehicle]);

    useEffect(() => {
        axios.get(`${API_PATH}gearBoxes/${vehicle.id_gear_boxes}`)
            .then(response => {
                const data = response.data;
                setGearBoxe(data[0]);
            })
            .catch(error => console.error(error));
    }, [vehicle]);

    return (
        <ScrollView style={styles.scrollView}>
            <View style={styles.container}>
                <View style={styles.containerGap}>
                    <View>
                        <Text style={styles.carName}>{brand ? brand.name : ''} {model ? model.name : ''}</Text>
                        <Image
                            source={{uri: 'https://i.pinimg.com/originals/dc/19/e9/dc19e9b94a372ebc21ffeb7623d5632a.png'}}
                            style={{width: 300, height: 150, alignSelf: 'center'}}/>
                        <Text style={styles.p}>Caractéristiques :</Text>
                        <Text style={styles.textData}>boite de vitesse : {gearboxe ? gearboxe.name : ''}</Text>
                        <Text style={styles.textData}>Énergie : {energie ? energie.name : ''}</Text>
                        <Text style={styles.textData}>Type de véhicule : {type ? type.name : ''}</Text>
                        <Text style={styles.p}>Description :</Text>
                        <Text style={styles.textData}>{vehicle ? vehicle.description : ''}</Text>
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
        padding: 20,
    },

    p: {
        textAlign: 'start',
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    carName: {
        textAlign: 'center',
        fontSize: 24,
        marginTop: 10,
    },
    textData: {
        marginLeft: 40,
        fontSize: 16,
        marginBottom: 10,
    },
});
