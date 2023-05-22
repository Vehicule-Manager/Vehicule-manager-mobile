import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from "@react-navigation/native";

export default function FooterNav() {
    const [selectedIcon, setSelectedIcon] = useState(null);
    const navigation = useNavigation();

    const handlePress1 = () => {
        navigation.navigate("Profil");
        setSelectedIcon(1);
    };

    const handlePress2 = () => {
        navigation.navigate("ProfileLeasing");
        setSelectedIcon(2);
    };

    const handlePress3 = () => {
        navigation.navigate("Contact");
        setSelectedIcon(3);
    };

    const getIconStyle = (iconNumber) => {
        if (iconNumber === selectedIcon) {
            return [styles.icon, styles.selectedIcon];
        }
        return styles.icon;
    };

    return (
        <View style={styles.navBar}>
            <TouchableOpacity
                style={getIconStyle(1)}
                onPress={handlePress1}
                size="30"
            >
                <Icon name="user-o" color={selectedIcon === 1 ? "#FFFFFF" : "#00aced"} size={30} />
            </TouchableOpacity>
            <TouchableOpacity
                style={getIconStyle(2)}
                onPress={handlePress2}
            >
                <Icon name="car" color={selectedIcon === 2 ? "#FFFFFF" : "#00aced"} size={30}/>
            </TouchableOpacity>
            <TouchableOpacity
                style={getIconStyle(3)}
                onPress={handlePress3}
            >
                <Icon name="phone" color={selectedIcon === 3 ? "#FFFFFF" : "#00aced"} size={30}/>
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
        backgroundColor : '#00aced',
        borderRadius : 200,
    },
});
