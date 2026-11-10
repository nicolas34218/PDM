import React from 'react';
import { View, Text, StyleSheet, Image, ImageSourcePropType } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

interface LessonCardProps {
    letra: string;
    exemplo: string;
    dica: string;
    imagem: ImageSourcePropType;
}

export default function LessonCard({ letra, exemplo, dica, imagem }: LessonCardProps) {
    return (
        <View style={styles.card}>
            <View style={styles.letterHeader}>
                <Text style={styles.decor}>✨</Text>
                <Text style={styles.bigLetter}>{letra}</Text>
                <Text style={styles.decor}>✨</Text>
            </View>

            <Text style={styles.exampleText}>
                {letra} de <Text style={styles.boldText}>{exemplo}</Text>
            </Text>

            <Image
                source={imagem}
                style={styles.handImage}
                resizeMode="contain"
            />

            <View style={styles.tipBox}>
                <FontAwesome5 name="lightbulb" size={20} color="#6200EE" />
                <Text style={styles.tipText}>{dica}</Text>
            </View>

            <Text style={styles.encourageText}>Agora tente fazer você também!</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        flex: 1,
        backgroundColor: '#FFF',
        borderRadius: 30,
        padding: 20,
        alignItems: 'center',
        marginBottom: 100, // Espaço para os botões de navegação
    },
    letterHeader: { flexDirection: 'row', alignItems: 'center', gap: 15 },
    bigLetter: { fontSize: 80, fontWeight: '900', color: '#2A5C73' },
    decor: { fontSize: 30, color: '#BFA8E7' },
    exampleText: { fontSize: 22, color: '#2A5C73', marginBottom: 15 },
    boldText: { fontWeight: '900' },
    handImage: { width: '100%', height: 200, backgroundColor: '#EBE5F5', borderRadius: 15, marginBottom: 20 },
    tipBox: { flexDirection: 'row', backgroundColor: '#F3EAFB', padding: 15, borderRadius: 12, alignItems: 'center', gap: 15, marginBottom: 20 },
    tipText: { flex: 1, color: '#2A5C73', fontWeight: '600', fontSize: 14 },
    encourageText: { color: '#2A5C73', fontSize: 16, fontWeight: '500' },
});