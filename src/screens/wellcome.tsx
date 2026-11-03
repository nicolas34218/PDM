import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { WelcomeScreenNavigationProp } from '../types';

type Props = {
    navigation: WelcomeScreenNavigationProp;
};

export default function WelcomeScreen({ navigation }: Props) {
    return (
        <View style={styles.container}>
            <View style={styles.logoPlaceholder}>
                <Text style={styles.logoText}>pdmproj</Text>
            </View>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')}>
                <Text style={styles.buttonText}>Começar</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#F5F5F5' },
    logoPlaceholder: { width: 150, height: 150, backgroundColor: '#E0E0E0', justifyContent: 'center', alignItems: 'center', borderRadius: 20, marginBottom: 50 },
    logoText: { fontSize: 24, fontWeight: 'bold', color: '#333' },
    button: { backgroundColor: '#6200EE', paddingVertical: 15, paddingHorizontal: 40, borderRadius: 30 },
    buttonText: { color: '#FFF', fontSize: 18, fontWeight: 'bold' }
});