import React, {useEffect, useMemo, useState} from 'react';
import {StyleSheet, View, Text, Pressable, ScrollView} from 'react-native';
import {useNavigation} from "@react-navigation/native";
import FooterNav from "../components/layout/footer";
import Icon from 'react-native-vector-icons/FontAwesome';
import axios from "axios";
import { API_PATH } from '@env';

export default function Profile() {
  const navigation = useNavigation();
  const [client, setClient] = useState([]);
  const [user, setUser] = useState([]);

  useEffect(() => {
    axios.get(`${API_PATH}client/1`)
        .then(response => {
          const data = response.data;
          setClient(data[0]);
        })
        .catch(error => console.error(error));
  }, []);

  useEffect(() => {
    axios.get(`${API_PATH}user/${client.id_users}`)
        .then(response => {
          const data = response.data;
          setUser(data[0]);
        })
        .catch(error => console.error(error));
  }, [client]);

  const getMergedClient = useMemo(() => {
    if (user) {
      return { ...client, user: user };
    }
  }, [client, user]);

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.sectionContainers}>
          <View style={styles.sections}>
            <Text style={styles.sectionTitle}>Information de connexion</Text>
            <View style={styles.row}>
              <View style={styles.loginContainer}>
                <Text style={styles.textData}> alias : {getMergedClient ? getMergedClient.user.login : ''}</Text>
                <Text style={styles.textData}> email : {getMergedClient ? getMergedClient.user.mail : ''}</Text>
              </View>
              <Pressable onPress={() => navigation.navigate("EditEmail")}>
                <Icon name="user-o" color="#00aced" size={30} />
              </Pressable>
            </View>
          </View>
          <View style={styles.sections}>
            <Text style={styles.sectionTitle}>Information personnel</Text>
            <Pressable style={styles.editPersonalData} onPress={() => navigation.navigate("ChangeProfileInfo")}>
              <Icon name="user-o" color="#00aced" size={30} />
            </Pressable>
            <View style={styles.personalDataContainer}>
              <Text style={styles.textData}>Prénom : {getMergedClient ? getMergedClient.firstname : ''}</Text>
              <Text style={styles.textData}>Nom : {getMergedClient ? getMergedClient.lastname : ''}</Text>
              <Text style={styles.textData}>Civilité : {getMergedClient ? getMergedClient.civility : ''}</Text>
              <Text style={styles.textData}>Addresse :</Text>
              <Text style={styles.textData}>{getMergedClient ? getMergedClient.address : ''}</Text>
              <Text style={styles.textData}>Code postal : {getMergedClient ? getMergedClient.zipCode : ''}</Text>
              <Text style={styles.textData}>addresse optionel : {getMergedClient ? getMergedClient.optionalAddress : ''}</Text>
            </View>
          </View>
          <View style={styles.sections}>
            <Text style={styles.sectionTitle}>Mot de passe</Text>
            <View style={styles.editPersonalData}>
              <Pressable onPress={() => navigation.navigate("ChangePassword")}>
                <Icon name="user-o" color="#00aced" size={30} />
              </Pressable>
            </View>
          </View>
          <Pressable style={styles.leasingContainer} onPress={() => navigation.navigate("ProfileLeasing")}>
            <Text style={styles.leasingContainerTitle}>Mes locations</Text>
          </Pressable>
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
  loginContainer: {
    flexDirection:  'column',
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 10,
    alignSelf: 'center'
  },
  leasingContainerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  sections: {
    flexDirection: 'column',
    rowGap: 20,
  },
  leasingContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 4,
    paddingVertical: 10,
    paddingHorizontal: 30,
    marginHorizontal: 20,
  },
  sectionContainers: {
    flexDirection: 'column',
    rowGap: 30,
    paddingHorizontal: 40,
    marginBottom: 80,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  editPersonalData: {
    alignSelf: 'flex-end'
  },
  textData: {
    fontSize: 16,
  },
  personalDataContainer: {
    flexDirection: 'column',
    rowGap: 10,
  }
});
