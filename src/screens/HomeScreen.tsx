import React from 'react';
import { View, Text, StyleSheet, ScrollView, Alert, TextInput, TouchableOpacity } from 'react-native';
import OptionCard from '../components/OptionCard';
import ScreenHeader from '../components/ScreenHeader';
import { colors } from '../styles/theme';
import { HomeScreenNavigationProp } from '../types';
import { categorias } from '../data/librasdata';

type Props = {
  navigation: HomeScreenNavigationProp;
};

export default function HomeScreen({ navigation }: Props) {
  const showMessage = (message: string) => {
    Alert.alert('Libras Mobile', message);
  };

  return (
    <View style={styles.screen}>
      <ScreenHeader isHome />

      {/* Saudação e Instrução unificadas */}
      <View style={styles.headerInfo}>
        <Text style={styles.greeting}>Olá, Estudante! 👋</Text>
        <Text style={styles.instructionText}>O que vamos aprender hoje?</Text>
      </View>

      <View style={styles.panel}>
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.panelContent}>
          
          {/* Barra de Pesquisa do home.tsx */}
          <TextInput style={styles.searchBar} placeholder="Buscar sinal ou categoria..." />

          <Text style={styles.sectionTitle}>Aprender Sinais</Text>

          {/* Grade de Categorias do home.tsx convertida para Map (para funcionar bem com ScrollView) */}
          <View style={styles.grid}>
            {categorias.map((item) => (
              <TouchableOpacity
                key={item.id}
                style={styles.card}
                onPress={() => {
                  if (item.titulo === 'Alfabeto') {
                    navigation.navigate('AlphabetLesson'); // Navega para a tela que criamos antes
                  } else {
                    navigation.navigate('List', { categoria: item.titulo });
                  }
                }}
              >
                <Text style={styles.cardIcon}>{item.icone}</Text>
                <Text style={styles.cardTitle}>{item.titulo}</Text>
              </TouchableOpacity>
            ))}
          </View>

          <Text style={styles.sectionTitle}>Praticar e Acompanhar</Text>

          {/* Cards Originais do HomeScreen.tsx */}
          <OptionCard
            icon="🎮"
            title="Jogar e praticar"
            description="Desafios, quizzes e muito mais!"
            color={colors.yellow}
            onPress={() => showMessage('Em breve: jogos e desafios!')}
          />

          <OptionCard
            icon="🏆"
            title="Meu progresso"
            description="Veja o que você já aprendeu."
            color={colors.green}
            onPress={() => showMessage('Em breve: seu progresso!')}
          />

          {/* Dica Original */}
          <View style={styles.tip}>
            <Text style={styles.tipIcon}>💡</Text>
            <Text style={styles.tipText}>
              <Text style={styles.tipBold}>Dica: </Text>
              Você pode continuar de onde parou. Seu progresso fica salvo no seu dispositivo!
            </Text>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.background,
    paddingTop: 8,
    paddingHorizontal: 12,
  },
  headerInfo: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 15,
  },
  greeting: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 5,
  },
  instructionText: {
    color: '#FFFFFF',
    fontSize: 14,
    opacity: 0.9,
  },
  panel: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderRadius: 23,
    padding: 15,
    marginBottom: 35,
  },
  panelContent: {
    paddingTop: 5,
    paddingBottom: 20,
  },
  searchBar: {
    backgroundColor: '#F0F0F0',
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
    fontSize: 16,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
    marginLeft: 5,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  card: {
    width: '48%', // Garante que fiquem 2 por linha
    backgroundColor: '#FAFAFA',
    padding: 20,
    borderRadius: 15,
    alignItems: 'center',
    marginBottom: 15,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  cardIcon: {
    fontSize: 40,
    marginBottom: 10,
  },
  cardTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
  },
  tip: {
    minHeight: 44,
    backgroundColor: colors.blue,
    borderRadius: 13,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    marginTop: 10,
  },
  tipIcon: {
    fontSize: 25,
    marginRight: 10,
  },
  tipText: {
    flex: 1,
    fontSize: 12,
    color: '#52758B',
    lineHeight: 16,
  },
  tipBold: {
    fontWeight: 'bold',
  },
});