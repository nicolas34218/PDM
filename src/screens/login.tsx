import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { LoginScreenNavigationProp } from '../types';

type Props = {
    navigation: LoginScreenNavigationProp;
};

export default function LoginScreen({ navigation }: Props) {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Login</Text>
            <TextInput style={styles.input} placeholder="E-mail" value={email} onChangeText={setEmail} keyboardType="email-address" />
            <TextInput style={styles.input} placeholder="Senha" value={senha} onChangeText={setSenha} secureTextEntry />

            <TouchableOpacity>
                <Text style={styles.linkText}>Esqueci minha senha</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={() => navigation.replace('MainApp')}>
                <Text style={styles.buttonText}>Entrar</Text>
            </TouchableOpacity>

            <Text style={styles.orText}>Ou entre com</Text>
            <View style={styles.socialButtons}>
                <View style={styles.socialCircle}><Text>G</Text></View>
                <View style={styles.socialCircle}><Text>f</Text></View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, padding: 20, justifyContent: 'center', backgroundColor: '#FFF' },
    title: { fontSize: 28, fontWeight: 'bold', marginBottom: 30, textAlign: 'center' },
    input: { borderWidth: 1, borderColor: '#CCC', borderRadius: 8, padding: 15, marginBottom: 15 },
    linkText: { color: '#6200EE', textAlign: 'right', marginBottom: 30 },
    button: { backgroundColor: '#6200EE', padding: 15, borderRadius: 8, alignItems: 'center' },
    buttonText: { color: '#FFF', fontSize: 16, fontWeight: 'bold' },
    orText: { textAlign: 'center', marginTop: 30, color: '#666' },
    socialButtons: { flexDirection: 'row', justifyContent: 'center', marginTop: 15, gap: 20 },
    socialCircle: { width: 50, height: 50, borderRadius: 25, backgroundColor: '#E0E0E0', justifyContent: 'center', alignItems: 'center' }
});