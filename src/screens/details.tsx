import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { DetailScreenRouteProp } from '../types';

type Props = {
    route: DetailScreenRouteProp;
};

export default function DetailScreen({ route }: Props) {
    const { item } = route.params;

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{item.titulo}</Text>

            <View style={styles.imagePlaceholder}>
                <Text style={styles.placeholderText}>[ Imagem / GIF do Sinal ]</Text>
            </View>

            <Text style={styles.description}>{item.descricao}</Text>

            <TouchableOpacity style={styles.nextButton}>
                <Text style={styles.nextButtonText}>Próximo</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, padding: 20, alignItems: 'center', backgroundColor: '#FFF' },
    title: { fontSize: 28, fontWeight: 'bold', marginVertical: 20 },
    imagePlaceholder: { width: '100%', height: 300, backgroundColor: '#E0E0E0', justifyContent: 'center', alignItems: 'center', borderRadius: 15, marginBottom: 20 },
    placeholderText: { color: '#666' },
    description: { fontSize: 16, textAlign: 'center', color: '#333', marginBottom: 40, lineHeight: 24 },
    nextButton: { backgroundColor: '#6200EE', paddingVertical: 15, width: '100%', borderRadius: 30, alignItems: 'center', position: 'absolute', bottom: 30 },
    nextButtonText: { color: '#FFF', fontSize: 18, fontWeight: 'bold' }
});