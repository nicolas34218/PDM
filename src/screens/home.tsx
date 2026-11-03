import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, TextInput } from 'react-native';
import { HomeScreenNavigationProp } from '../types';
import { categorias } from '../data/librasdata';

type Props = {
    navigation: HomeScreenNavigationProp;
};

export default function HomeScreen({ navigation }: Props) {
    return (
        <View style={styles.container}>
            <Text style={styles.greeting}>Olá, Nome</Text>
            <TextInput style={styles.searchBar} placeholder="Buscar..." />

            <FlatList
                data={categorias}
                numColumns={2}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        style={styles.card}
                        onPress={() => navigation.navigate('List', { categoria: item.titulo })}
                    >
                        <Text style={styles.cardIcon}>{item.icone}</Text>
                        <Text style={styles.cardTitle}>{item.titulo}</Text>
                    </TouchableOpacity>
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, padding: 20, backgroundColor: '#FFF' },
    greeting: { fontSize: 24, fontWeight: 'bold', marginBottom: 20, marginTop: 40 },
    searchBar: { backgroundColor: '#F0F0F0', padding: 15, borderRadius: 10, marginBottom: 20 },
    card: { flex: 1, backgroundColor: '#FAFAFA', margin: 10, padding: 20, borderRadius: 15, alignItems: 'center', elevation: 2 },
    cardIcon: { fontSize: 40, marginBottom: 10 },
    cardTitle: { fontSize: 16, fontWeight: '600' }
});