import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation, useRoute } from '@react-navigation/native';

export default function FooterNav() {
  const navigation = useNavigation();
  const route = useRoute();

  const handlePress1 = () => {
    navigation.navigate('Profil');
  };

  const handlePress2 = () => {
    navigation.navigate('ProfileLeasing');
  };

  const handlePress3 = () => {
    navigation.navigate('AutreRoute');
  };

  const getIconStyle = (iconNumber) => {
    const routeName = route.name;
    if (
      (iconNumber === 1 && routeName === 'Profil') ||
      (iconNumber === 2 && routeName === 'ProfileLeasing') ||
      (iconNumber === 3 && routeName === 'AutreRoute')
    ) {
      return [styles.icon, styles.selectedIcon];
    }
    return styles.icon;
  };

  return (
    <View style={styles.navBar}>
      <TouchableOpacity
        style={getIconStyle(1)}
        onPress={handlePress1}
      >
        <Icon name="user-o" color={route.name === 'Profil' ? '#FFFFFF' : '#00aced'} size={30} />
      </TouchableOpacity>
      <TouchableOpacity
        style={getIconStyle(2)}
        onPress={handlePress2}
      >
        <Icon name="car" color={route.name === 'ProfileLeasing' ? '#FFFFFF' : '#00aced'} size={30} />
      </TouchableOpacity>
      <TouchableOpacity
        style={getIconStyle(3)}
        onPress={handlePress3}
      >
        <Icon name="vcard-o" color={route.name === 'AutreRoute' ? '#FFFFFF' : '#00aced'} size={30} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  navBar: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
    paddingVertical: 10,
    paddingHorizontal: 20,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  icon: {
    padding: 10,
  },
  selectedIcon: {
    transform: [{ translateY: -20 }],
    backgroundColor: '#00aced',
    borderRadius: 200,
  },
});
