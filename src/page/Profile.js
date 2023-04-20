import React, { useState } from 'react';
import { StyleSheet, TextInput, View, Button, Text } from 'react-native';
import FooterNav from "../components/layout/header";

export default function Profile() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Aled</Text>
      <View style={styles.sectionContainers}>
        <View style={styles.containers}>
          <Text style={styles.containersTitle}>Modifier mes information</Text>
        </View>
        <View style={styles.containers}>
          <Text style={styles.containersTitle}>Modifier le mot de passe</Text>
        </View>
        <View style={styles.containers}>
          <Text style={styles.containersTitle}>Mes locations</Text>
        </View>
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
