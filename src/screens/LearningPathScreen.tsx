import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Alert,
} from 'react-native';

import ScreenHeader from '../components/ScreenHeader';
import StepCard from '../components/StepCard';

import { colors } from '../styles/theme';
import { LearningPathNavigationProp } from '../types';

type Props = {
  navigation: LearningPathNavigationProp;
};

const steps = [
  {
    number: 1,
    icon: '🤟',
    title: 'Alfabeto manual',
    description: 'Aprenda as letras de A a Z e pratique os sinais.',
    color: colors.purple,
    badgeColor: colors.purpleStrong,
    locked: false,
  },
  {
    number: 2,
    icon: '🧑‍🤝‍🧑',
    title: 'Primeiras conversas',
    description: 'Aprenda cumprimentos e expressões do dia a dia.',
    color: colors.blue,
    badgeColor: colors.blueStrong,
    locked: true,
  },
  {
    number: 3,
    icon: '🍎',
    title: 'Necessidades básicas',
    description: 'Conheça sinais de fome, sede, sons, dor e pedidos de ajuda.',
    color: colors.yellow,
    badgeColor: colors.yellowStrong,
    locked: true,
  },
  {
    number: 4,
    icon: '📚',
    title: 'Escola e aprendizagem',
    description: 'Aprenda sobre professor, estudar, amigo e dúvidas comuns.',
    color: colors.green,
    badgeColor: '#58C9A0',
    locked: true,
  },
];

export default function LearningPathScreen({ navigation }: Props) {
  const handleStepPress = (locked: boolean) => {
    if (locked) {
      Alert.alert(
        'Etapa bloqueada',
        'Conclua a etapa anterior para desbloquear esta atividade.'
      );
    } else {
      Alert.alert(
        'Alfabeto manual',
        'Vamos começar a aprender o alfabeto em Libras!'
      );
    }
  };

  return (
    <View style={styles.screen}>
      <ScreenHeader
        onBack={() => navigation.goBack()}
        />

      <View style={styles.header}>
        <View style={styles.titleRow}>
          <Text style={styles.spark}>〃</Text>
          <Text style={styles.title}>
            Minha trilha de
            {'\n'}
            aprendizagem
          </Text>
          <Text style={styles.spark}>〃</Text>
        </View>

        <Text style={styles.subtitle}>
          Vá concluindo as etapas e desbloqueie
          {'\n'}
          novos conteúdos!
        </Text>
      </View>

      <View style={styles.panel}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.panelContent}
        >
          <View style={styles.stepsContainer}>
            <View style={styles.progressLine} />

            {steps.map((step) => (
              <StepCard
                key={step.number}
                number={step.number}
                icon={step.icon}
                title={step.title}
                description={step.description}
                color={step.color}
                badgeColor={step.badgeColor}
                locked={step.locked}
                onPress={() => handleStepPress(step.locked)}
              />
            ))}
          </View>

          <View style={styles.reminder}>
            <Text style={styles.reminderIcon}>💡</Text>
            <Text style={styles.reminderText}>
              <Text style={styles.reminderBold}>Lembre-se:</Text>
              {' '}A Libras é uma língua visual-espacial,
              com movimentos, orientações e expressões faciais.
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
  header: {
    alignItems: 'center',
    paddingTop: 3,
    paddingBottom: 17,
  },
  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: '#FFFFFF',
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    lineHeight: 23,
  },
  spark: {
    color: '#FFEB55',
    fontSize: 30,
    fontWeight: 'bold',
    marginHorizontal: 7,
  },
  subtitle: {
    color: '#FFFFFF',
    fontSize: 11,
    fontWeight: 'bold',
    textAlign: 'center',
    lineHeight: 16,
    marginTop: 14,
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
  stepsContainer: {
    position: 'relative',
  },
  progressLine: {
    position: 'absolute',
    left: 13,
    top: 25,
    bottom: 30,
    width: 1,
    backgroundColor: '#82B9CF',
  },
  reminder: {
    backgroundColor: colors.purple,
    borderRadius: 13,
    minHeight: 47,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 9,
    marginTop: 0,
  },
  reminderIcon: {
    fontSize: 24,
    marginRight: 8,
  },
  reminderText: {
    flex: 1,
    color: '#52758B',
    fontSize: 8,
    lineHeight: 12,
  },
  reminderBold: {
    fontWeight: 'bold',
  },
});