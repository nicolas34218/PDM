import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';
import { Feather, FontAwesome5 } from '@expo/vector-icons';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { alfabetoData } from '../data/alfabetoData'; // Seu arquivo com as 26 letras
import { RootStackParamList } from '../types';
import LessonCard from '../components/LessonCard';

type Props = {
    navigation: NativeStackNavigationProp<RootStackParamList, 'AlphabetLesson'>;
};

export default function AlphabetLessonScreen({ navigation }: Props) {
    const [currentIndex, setCurrentIndex] = useState(0); // O estado que controla tudo!

    const totalLetras = alfabetoData.length;
    const currentLetter = alfabetoData[currentIndex];

    const handleNext = () => {
        if (currentIndex < totalLetras - 1) {
            const nextIndex = currentIndex + 1;
            setCurrentIndex(nextIndex);

            if (nextIndex % 5 === 0) {
                navigation.navigate('ChallengeScreen', { bloco: nextIndex / 5 });
            }
        } else {
            navigation.navigate('MainApp');
        }
    };

    const handlePrev = () => {
        if (currentIndex > 0) setCurrentIndex(currentIndex - 1);
        else navigation.goBack();
    };

    return (
        <SafeAreaView style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                    <Feather name="chevron-left" size={28} color="#2A5C73" />
                </TouchableOpacity>
                <View style={styles.progressPill}>
                    <FontAwesome5 name="star" size={14} color="#FFD700" solid />
                    <Text style={styles.progressText}>{currentIndex + 1}/{totalLetras}</Text>
                </View>
            </View>

            <Text style={styles.mainTitle}>Alfabeto manual</Text>
            <Text style={styles.subtitle}>Vamos aprender as letras em Libras!</Text>

            {/* Componente Reutilizável que muda conforme o estado */}
            <LessonCard
                letra={currentLetter.letra}
                exemplo={currentLetter.exemplo}
                dica={currentLetter.dica}
                imagem={currentLetter.imagem}
            />

            {/* Botões de Navegação Inferiores */}
            <View style={styles.navButtonsContainer}>
                <TouchableOpacity style={styles.navCircleButton} onPress={handlePrev}>
                    <Feather name="chevron-left" size={32} color="#FFF" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.navCircleButton} onPress={handleNext}>
                    <Feather name="chevron-right" size={32} color="#FFF" />
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#527E8E', paddingHorizontal: 20, paddingTop: 40 },
    header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 },
    backButton: { backgroundColor: '#FFF', width: 40, height: 40, borderRadius: 20, justifyContent: 'center', alignItems: 'center' },
    progressPill: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#FFF', paddingHorizontal: 12, paddingVertical: 6, borderRadius: 20, gap: 6 },
    progressText: { fontWeight: 'bold', color: '#2A5C73' },
    mainTitle: { fontSize: 28, fontWeight: '900', color: '#FFF', textAlign: 'center' },
    subtitle: { fontSize: 16, color: '#FFF', textAlign: 'center', marginBottom: 20, marginTop: 5 },
    navButtonsContainer: { flexDirection: 'row', justifyContent: 'space-between', width: '100%', paddingHorizontal: 30, position: 'absolute', bottom: 30, alignSelf: 'center' },
    navCircleButton: { backgroundColor: '#BFA8E7', width: 60, height: 60, borderRadius: 30, justifyContent: 'center', alignItems: 'center' }
});