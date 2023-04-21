import React from 'react';
import {StyleSheet, View, Text, Pressable} from 'react-native';
import {useNavigation} from "@react-navigation/native";
import FooterNav from "../components/layout/header";

export default function Profile() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Aled</Text>
      <View style={styles.sectionContainers}>
        <Pressable style={styles.containers} onPress={() => navigation.navigate("EditProfil")}>
          <Text style={styles.containersTitle} >Modifier mes information</Text>
        </Pressable>
        <Pressable style={styles.containers} onPress={() => navigation.navigate("ChangePassword")}>
          <Text style={styles.containersTitle}>Modifier le mot de passe</Text>
        </Pressable>
        <Pressable style={styles.containers} onPress={() => navigation.navigate("ProfileLeasing")}>
          <Text style={styles.containersTitle}>Mes locations</Text>
        </Pressable>
      </View>
      <FooterNav/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 20,
  },
  containersTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  containers: {
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
    rowGap: 10,
  }
});
