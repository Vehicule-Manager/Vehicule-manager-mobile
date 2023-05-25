import React, {useState, useEffect, useMemo} from 'react';
import { StyleSheet, View, Text, Image, Button, ScrollView } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import axios from 'axios';
import FooterNav from "../components/layout/footer";
import { API_PATH } from '@env';

export default function ProfileLeasing() {
    const navigation = useNavigation();
    const [clientData, setClientData] = useState([]);
    const [leasingVehicles, setLeasingVehicles] = useState([]);
    const [vehicle, setVehicle] = useState([]);
    const [model, setModel] = useState([]);
    const [brand, setBrand] = useState([]);
    const [status, setStatus] = useState([]);

    useEffect(() => {
        axios.get(`${API_PATH}client/1`)
            .then(response => {
                const data = response.data;
                setClientData(data);
            })
            .catch(error => console.error(error));
    }, []);

    useEffect(() => {
        axios.get(`${API_PATH}leavingVehicule/client/1`)
            .then(response => {
                const data = response.data;
                setLeasingVehicles(data);
            })
            .catch(error => console.error(error));
    }, []);

    useEffect(() => {
        const fetchVehiclesInfo = async () => {
            // Obtention des IDs de véhicules à partir de leasingVehicles
            const vehicleIds = leasingVehicles.map(leasingVehicles => leasingVehicles.id);

            // Création d'un tableau de promesses pour les requêtes individuelles
            const vehiclePromises = vehicleIds.map(vehicleId =>
                axios.get(`${API_PATH}vehicule/${vehicleId}`)
            );

            try {
                // Exécution des requêtes en parallèle
                const responses = await Promise.all(vehiclePromises);

                // Obtention des données des véhicules depuis les réponses
                const vehicleData = responses.map(response => response.data);
                setVehicle(vehicleData);
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
        const fetchModels = async () => {
            // Obtention des IDs de véhicules à partir de leasingVehicles
            const modelsIds = vehicle.map(vehicle => vehicle[0].id_model_car);

            // Création d'un tableau de promesses pour les requêtes individuelles
            const modelsPromises = modelsIds.map(modelsIds =>
                axios.get(`${API_PATH}model/${modelsIds}`)
            );

            try {
                // Exécution des requêtes en parallèle
                const responses = await Promise.all(modelsPromises);

                // Obtention des données des véhicules depuis les réponses
                const modelsData = responses.map(response => response.data);
                setModel(modelsData);
            } catch (error) {
                console.error(error);
            }
        };

        if (vehicle.length > 0) {
            fetchModels();
        }
    }, [vehicle]);

    useEffect(() => {
        const fetchBrands = async () => {
            // Obtention des IDs de véhicules à partir de leasingVehicles
            const brandsIds = model.map(models => models[0].id_brands);

            // Création d'un tableau de promesses pour les requêtes individuelles
            const brandsPromises = brandsIds.map(brandsIds =>
                axios.get(`${API_PATH}brand/${brandsIds}`)
            );

            try {
                // Exécution des requêtes en parallèle
                const responses = await Promise.all(brandsPromises);

                // Obtention des données des véhicules depuis les réponses
                const brandsData = responses.map(response => response.data);
                setBrand(brandsData);
            } catch (error) {
                console.error(error);
            }
        };

        if (model.length > 0) {
            fetchBrands();
        }
    }, [model]);

    useEffect(() => {
        const fetchStatuses = async () => {
            // Obtention des IDs de véhicules à partir de leasingVehicles
            const statusesIds = leasingVehicles.map(leasingVehicles => leasingVehicles.id_statuses);

            // Création d'un tableau de promesses pour les requêtes individuelles
            const statusesPromises = statusesIds.map(statusesIds =>
                axios.get(`${API_PATH}status/${statusesIds}`)
            );

            try {
                // Exécution des requêtes en parallèle
                const responses = await Promise.all(statusesPromises);

                // Obtention des données des véhicules depuis les réponses
                const statusesData = responses.map(response => response.data);
                setStatus(statusesData);
            } catch (error) {
                console.error(error);
            }
        };

        if (leasingVehicles.length > 0) {
            fetchStatuses();
        }
    }, [leasingVehicles]);
    // And modify
    const getModel = useMemo(() => {
        return model.map((model) => {
            return model[0];
        });
    }, [model]);

    const getBrand = useMemo(() => {
        return brand.map((brand) => {
            return brand[0];
        });
    }, [brand]);

    const getLeasingVehicles = useMemo(() => {
        return leasingVehicles.map((leasingVehicles) => {
            return leasingVehicles;
        });
    }, [leasingVehicles]);

    const getStatus = useMemo(() => {
        return status.map((status) => {
            return status[0];
        });
    }, [status]);

    const getMergedVehicles = useMemo(() => {
        return vehicle.map((vehicle) => {
            const vehicleModel = getModel.find((m) => m.id === vehicle[0].id_model_car);
            const modelBrand = getBrand.find((b) => b.id === vehicleModel.id_brands);
            const vehicleLeasing = getLeasingVehicles.find((l) => l.id_vehicles === vehicle.id);
            const LeasingStatus = getStatus.find((s) => s.id === vehicleLeasing.id_statuses);
            return { ...vehicle[0], model: vehicleModel, brand: modelBrand, status: LeasingStatus };
        });
    }, [vehicle, getModel, getBrand, getLeasingVehicles, getStatus]);
    console.log(getMergedVehicles)

    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={styles.leasingContainer}>
                    <Text style={styles.title}>{clientData.length > 0 ? `${clientData[0].firstname} ${clientData[0].lastname}, Vos véhicules` : null}</Text>
                    <View style={styles.containerGap}>
                        {getMergedVehicles.length > 0 ? (
                            getMergedVehicles.map(vehicle => (
                                <View key={vehicle.id}>
                                    <Text style={styles.p}>{ `${vehicle.brand ? vehicle.brand.name : ''} ${vehicle.model ? vehicle.model.name : ''}`}</Text>
                                    <View style={styles.containerBubble}>
                                        <Text style={styles.badge}>{ vehicle.status ? vehicle.status.name : ''}</Text>
                                        <Image
                                            source={{ uri: 'https://i.pinimg.com/originals/dc/19/e9/dc19e9b94a372ebc21ffeb7623d5632a.png' }}
                                        style={{ width: 300, height: 150 }} />
                                    </View>
                                    <Button title="Voir le véhicule" onPress={() => navigation.navigate('ProfileVehicle', { vehicleId: vehicle.id })} />
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
        marginTop: 30,
        gap: 30,  // Utilisation de 'gap' au lieu de 'rowGap' (compatible avec React Native)
    },
    containerBubble: {
        position: 'relative',
        flexDirection: 'column',
        paddingTop: 10,
    },
    badge: {
        position: 'absolute',
        left: 10,
        top: 0,
        paddingHorizontal: 5,
        borderColor: 'black',
        borderWidth: 1,
        borderStyle: 'solid',
        zIndex: 10,
        backgroundColor: 'rgba(255, 255, 255, 0.7)',
        borderRadius: '50%',
        paddingVertical: 10,
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
