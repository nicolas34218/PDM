import React, { useState, useMemo } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, SafeAreaView, Alert } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types';
import { alfabetoData } from '../data/alfabetoData';

type Props = NativeStackScreenProps<RootStackParamList, 'ChallengeScreen'>;

// Cores de fundo extraídas do protótipo
const CARD_COLORS = ['#EAE2F8', '#CBE5F6', '#C7EDD4', '#FCE9BA'];

export default function ChallengeScreen({ route, navigation }: Props) {
    const { bloco } = route.params;
    const [selectedId, setSelectedId] = useState<string | null>(null);

    // Lógica matemática para montar o desafio apenas uma vez quando a tela carregar
    const challenge = useMemo(() => {
        // 1. Identifica quais letras pertencem a este bloco (ex: Bloco 1 = Index 0 a 4 = A, B, C, D, E)
        const startIndex = (bloco - 1) * 5;
        const letrasDoBloco = alfabetoData.slice(startIndex, startIndex + 5);

        // 2. Sorteia uma letra deste bloco para ser a resposta correta
        const correctLetter = letrasDoBloco[Math.floor(Math.random() * letrasDoBloco.length)];

        // 3. Pega 3 letras incorretas do restante do alfabeto
        let wrongOptions = alfabetoData.filter(item => item.id !== correctLetter.id);
        wrongOptions = wrongOptions.sort(() => 0.5 - Math.random()).slice(0, 3);

        // 4. Junta a certa com as erradas e embaralha as posições
        const allOptions = [correctLetter, ...wrongOptions].sort(() => 0.5 - Math.random());

        return { target: correctLetter, options: allOptions };
    }, [bloco]);

    const handleConfirm = () => {
        if (!selectedId) {
            Alert.alert('Atenção', 'Selecione uma opção antes de confirmar!');
            return;
        }

        if (selectedId === challenge.target.id) {
            Alert.alert('Parabéns! 🎉', 'Você acertou o sinal!', [
                { text: 'Continuar aprendendo', onPress: () => navigation.goBack() }
            ]);
        } else {
            Alert.alert('Ops!', 'Esse não é o sinal correto. Tente novamente!');
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                    <Feather name="chevron-left" size={28} color="#2A5C73" />
                </TouchableOpacity>
            </View>

            <View style={styles.titleContainer}>
                <Text style={styles.decor}>✨</Text>
                <Text style={styles.mainTitle}>Desafio!</Text>
                <Text style={styles.decor}>✨</Text>
            </View>

            {/* Card Principal */}
            <View style={styles.card}>
                <Text style={styles.instruction}>
                    Marque a opção que mostra corretamente a letra <Text style={styles.boldText}>{challenge.target.letra}</Text> em libras.
                </Text>

                {/* Grade 2x2 com as opções */}
                <View style={styles.grid}>
                    {challenge.options.map((item, index) => {
                        const isSelected = selectedId === item.id;

                        return (
                            <TouchableOpacity
                                key={item.id}
                                style={[
                                    styles.optionCard,
                                    { backgroundColor: CARD_COLORS[index] }, // Aplica as cores na ordem
                                    isSelected && styles.optionCardSelected
                                ]}
                                activeOpacity={0.8}
                                onPress={() => setSelectedId(item.id)}
                            >
                                <Image
                                    source={item.imagem}
                                    style={styles.handImage}
                                    resizeMode="contain"
                                />
                            </TouchableOpacity>
                        );
                    })}
                </View>

                {/* Botão de Confirmação */}
                <TouchableOpacity style={styles.confirmButton} onPress={handleConfirm}>
                    <Text style={styles.confirmButtonText}>Confirmar</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#527E8E',
        paddingHorizontal: 20,
        paddingTop: 40,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    backButton: {
        backgroundColor: '#FFF',
        width: 40,
        height: 40,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    titleContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 15,
        marginBottom: 30,
    },
    mainTitle: {
        fontSize: 32,
        fontWeight: '900',
        color: '#FFF',
    },
    decor: {
        fontSize: 24,
        color: '#FFEB55', // Cor amarela dos brilhos do protótipo
    },
    card: {
        backgroundColor: '#FFF',
        borderRadius: 30,
        padding: 20,
        alignItems: 'center',
    },
    instruction: {
        fontSize: 16,
        color: '#2A5C73',
        textAlign: 'center',
        fontWeight: '600',
        marginBottom: 25,
        paddingHorizontal: 10,
    },
    boldText: {
        fontWeight: '900',
        fontSize: 18,
    },
    grid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        width: '100%',
        marginBottom: 20,
    },
    optionCard: {
        width: '48%',
        aspectRatio: 1, // Garante que seja um quadrado perfeito
        borderRadius: 16,
        marginBottom: 15,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 15,
        borderWidth: 3,
        borderColor: 'transparent', // Borda invisível padrão
    },
    optionCardSelected: {
        borderColor: '#2A5C73', // Borda escura quando selecionado
    },
    handImage: {
        width: '100%',
        height: '100%',
    },
    confirmButton: {
        backgroundColor: '#527E8E',
        width: '100%',
        paddingVertical: 18,
        borderRadius: 15,
        alignItems: 'center',
        marginTop: 10,
    },
    confirmButtonText: {
        color: '#FFF',
        fontSize: 16,
        fontWeight: 'bold',
    }
});