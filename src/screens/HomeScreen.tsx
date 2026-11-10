
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Alert,
} from 'react-native';

import OptionCard from '../components/OptionCard';
import ScreenHeader from '../components/ScreenHeader';
import { colors } from '../styles/theme';
import { HomeScreenNavigationProp } from '../types';

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

      <View style={styles.instruction}>
        <Text style={styles.spark}>〃</Text>

        <Text style={styles.instructionText}>
          Escolha uma das opções
          {'\n'}
          abaixo para continuar
        </Text>

        <Text style={styles.spark}>〃</Text>
      </View>

      <View style={styles.panel}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.panelContent}
        >
          <OptionCard
            icon="🤟"
            title="Aprender sinais"
            description="Alfabeto, palavras e expressões do dia a dia."
            color={colors.purple}
            onPress={() => navigation.navigate('LearningPath')}
          />

          <OptionCard
            icon="🎮"
            title="Jogar e praticar"
            description="Desafios, quizzes e muito mais!"
            color={colors.yellow}
            onPress={() =>
              showMessage('Em breve: jogos e desafios!')
            }
          />

          <OptionCard
            icon="🏆"
            title="Meu progresso"
            description="Veja o que você já aprendeu."
            color={colors.green}
            onPress={() =>
              showMessage('Em breve: seu progresso!')
            }
          />

          <View style={styles.tip}>
            <Text style={styles.tipIcon}>💡</Text>

            <Text style={styles.tipText}>
              <Text style={styles.tipBold}>Dica: </Text>
              Você pode continuar de onde parou.
              Seu progresso fica salvo no seu dispositivo!
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
  instruction: {
    height: 112,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  instructionText: {
    color: '#FFFFFF',
    fontSize: 13,
    fontWeight: 'bold',
    textAlign: 'center',
    lineHeight: 18,
  },
  spark: {
    color: '#FFEB55',
    fontSize: 30,
    fontWeight: 'bold',
    marginHorizontal: 8,
    transform: [{ rotate: '-25deg' }],
  },
  panel: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderRadius: 23,
    padding: 10,
    marginBottom: 35,
  },
  panelContent: {
    paddingTop: 7,
    paddingBottom: 5,
  },
  tip: {
    minHeight: 44,
    backgroundColor: colors.blue,
    borderRadius: 13,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 9,
  },
  tipIcon: {
    fontSize: 25,
    marginRight: 7,
  },
  tipText: {
    flex: 1,
    fontSize: 8,
    color: '#52758B',
    lineHeight: 12,
  },
  tipBold: {
    fontWeight: 'bold',
  },
});
