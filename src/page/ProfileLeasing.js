import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Image, Button, ScrollView } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import axios from 'axios';
import FooterNav from "../components/layout/footer";
import { API_PATH } from '@env';

export default function ProfileLeasing() {
    const navigation = useNavigation();
    const [clientData, setClientData] = useState([]);
    const [leasingVehicles, setLeasingVehicles] = useState([]);
    const [vehiclesInfo, setVehiclesInfo] = useState([]);
    const [carsInfo, setCarsInfos] = useState([]);

    const handleLogin = () => {
        navigation.navigate("ProfileVehicle");
    }

    useEffect(() => {
        axios.get(`${API_PATH}client/1`)
            .then(response => {
                const data = response.data;
                setClientData(data);
            })
            .catch(error => console.error(error));
    }, []);

    useEffect(() => {
        axios.get(`${API_PATH}leavingVehicule/client/2`)
            .then(response => {
                const data = response.data;
                setLeasingVehicles(data);
            })
            .catch(error => console.error(error));
    }, []);

    useEffect(() => {
        const fetchVehiclesInfo = async () => {
            // Obtention des IDs de véhicules à partir de leasingVehicles
            const vehicleIds = leasingVehicles.map(vehicle => vehicle.id);

            // Création d'un tableau de promesses pour les requêtes individuelles
            const vehiclePromises = vehicleIds.map(vehicleId =>
                axios.get(`${API_PATH}vehicule/${vehicleId}`)
            );

            try {
                // Exécution des requêtes en parallèle
                const responses = await Promise.all(vehiclePromises);

                // Obtention des données des véhicules depuis les réponses
                const vehicleData = responses.map(response => response.data);
                setVehiclesInfo(vehicleData);
            } catch (error) {
                console.error(error);
            }
        };

        if (leasingVehicles.length > 0) {
            fetchVehiclesInfo();
        }
    }, [leasingVehicles]);

    // Aucun affichage dans console
    useEffect(() => {
        const fetchCarsInfo = async () => {
            // Obtention des IDs de véhicules à partir de leasingVehicles
            const carsIds = vehiclesInfo.map(cars => cars.id_model_car);

            // Création d'un tableau de promesses pour les requêtes individuelles
            const carsPromises = carsIds.map(carsIds =>
                axios.get(`${API_PATH}model/${carsIds}`)
            );

            try {
                // Exécution des requêtes en parallèle
                const responses = await Promise.all(carsPromises);

                // Obtention des données des véhicules depuis les réponses
                const carsData = responses.map(response => response.data);
                setCarsInfos(carsData);
            } catch (error) {
                console.error(error);
            }
        };

        if (leasingVehicles.length > 0) {
            fetchCarsInfo();
        }
    }, [leasingVehicles]);
    // And modify
    console.log(carsInfo);
    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={styles.leasingContainer}>
                    <Text>{clientData.length > 0 ? clientData[0].contract : null}</Text>
                    <Text style={styles.title}>{clientData.length > 0 ? `${clientData[0].firstname} ${clientData[0].lastname}, Vos véhicules` : null}</Text>
                    <View style={styles.containerGap}>
                        {vehiclesInfo.length > 0 ? (
                            vehiclesInfo.map(vehicle => (
                                <View key={vehicle.id}>
                                    <Text style={styles.p}>{vehicle[0].id_model_car}</Text>
                                    <Image
                                        source={{ uri: 'https://i.pinimg.com/originals/dc/19/e9/dc19e9b94a372ebc21ffeb7623d5632a.png' }}
                                        style={{ width: 300, height: 150 }} />
                                    <Button title="Voir le véhicule" onPress={handleLogin} />
                                </View>
                            ))
                        ) : (
                            <Text>Aucun véhicule en leasing trouvé.</Text>
                        )}
                    </View>
                </View>
            </ScrollView>
            <FooterNav />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    leasingContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 80,
    },
    containerGap: {
        flex: 1,
        justifyContent: 'center',
        flexDirection: 'column',
        gap: 20,  // Utilisation de 'gap' au lieu de 'rowGap' (compatible avec React Native)
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
    },
});
