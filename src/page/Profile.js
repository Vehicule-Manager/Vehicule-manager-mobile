import React from 'react';
import {StyleSheet, View, Text, Pressable, ScrollView} from 'react-native';
import {useNavigation} from "@react-navigation/native";
import FooterNav from "../components/layout/footer";
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Profile() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.sectionContainers}>
          <View style={styles.sections}>
            <Text style={styles.sectionTitle}>Information de connexion</Text>
            <View style={styles.row}>
              <Text style={styles.textData}>jean.neymard@gmail.com</Text>
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
              <Text style={styles.textData}>Aled</Text>
              <Text style={styles.textData}>Aled</Text>
              <Text style={styles.textData}>Aled</Text>
              <Text style={styles.textData}>Aled</Text>
              <Text style={styles.textData}>Aled</Text>
              <Text style={styles.textData}>Aled</Text>
              <Text style={styles.textData}>Aled</Text>
              <Text style={styles.textData}>Aled</Text>
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
