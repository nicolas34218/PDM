
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  SafeAreaView,
  StatusBar,
  Alert,
  useWindowDimensions,
} from 'react-native';

import { WelcomeScreenNavigationProp } from '../types';

type Props = {
  navigation: WelcomeScreenNavigationProp;
};

export default function WelcomeScreen({ navigation }: Props) {
  const { width, height } = useWindowDimensions();

const handleStart = () => {
  navigation.replace('MainApp');
};

  const handleAbout = () => {
    Alert.alert(
      'O que é Libras?',
      'Libras é a Língua Brasileira de Sinais. É uma língua visual e espacial utilizada principalmente pela comunidade surda brasileira para se comunicar.'
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        backgroundColor="#F3F4F7"
        barStyle="dark-content"
      />

      {/* Moldura do celular */}
      <View
        style={[
          styles.phone,
          {
            width: Math.min(width * 0.85, 390),
            height: height * 0.94,
          },
        ]}
      >
        {/* Câmera do celular */}
        <View style={styles.camera} />

        {/* Tela interna */}
        <View style={styles.screen}>

          {/* Cabeçalho */}
          <View style={styles.header}>
            <View style={styles.titleRow}>
              <Text style={styles.spark}>〃</Text>

              <Text style={styles.title}>
                Libras para crianças
              </Text>

              <Text style={styles.spark}>〃</Text>
            </View>

            <Text style={styles.subtitle}>
              Vamos aprender juntos!
            </Text>
          </View>

          {/* Card principal */}
          <View style={styles.card}>

            {/* Ilustração */}
            <Image
            source={require('../../assets/home.webp')}
            style={styles.illustration}
            resizeMode="cover"
            />

            {/* Descrição */}
            <Text style={styles.description}>
              Introdução visual e divertida à
              {'\n'}
              Língua Brasileira de Sinais para
              {'\n'}
              crianças de 6 a 10 anos
            </Text>

            {/* Botão começar */}
            <TouchableOpacity
              style={styles.startButton}
              onPress={handleStart}
              activeOpacity={0.8}
            >
              <Text style={styles.startButtonText}>
                Vamos começar!
              </Text>
            </TouchableOpacity>

            {/* Link sobre Libras */}
            <TouchableOpacity
              onPress={handleAbout}
              activeOpacity={0.7}
            >
              <Text style={styles.aboutText}>
                O que é Libras?
              </Text>
            </TouchableOpacity>

          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F4F7',
    justifyContent: 'center',
    alignItems: 'center',
  },

  phone: {
    backgroundColor: '#D7D7D7',
    borderRadius: 42,
    padding: 10,
    elevation: 12,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.20,
    shadowRadius: 10,
  },

  camera: {
    position: 'absolute',
    top: 9,
    alignSelf: 'center',
    width: 7,
    height: 7,
    borderRadius: 10,
    backgroundColor: '#BDBDBD',
    zIndex: 2,
  },

  screen: {
    flex: 1,
    backgroundColor: '#527F94',
    borderRadius: 12,
    overflow: 'hidden',
    alignItems: 'center',
    paddingHorizontal: 12,
  },

  header: {
    width: '100%',
    alignItems: 'center',
    marginTop: '19%',
    marginBottom: 28,
  },

  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  title: {
    color: '#FFFFFF',
    fontSize: 19,
    fontWeight: '900',
    textAlign: 'center',
  },

  spark: {
    color: '#FFEB55',
    fontSize: 29,
    fontWeight: 'bold',
    marginHorizontal: 3,
  },

  subtitle: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: 'bold',
    marginTop: 8,
  },

  card: {
    width: '100%',
    backgroundColor: '#FFFFFF',
    borderRadius: 22,
    paddingHorizontal: 10,
    paddingTop: 25,
    paddingBottom: 40,
    alignItems: 'center',
  },

  illustration: {
    width: '100%',
    height: 117,
    marginBottom: 15,
  },

  description: {
    color: '#333333',
    fontSize: 10,
    lineHeight: 16,
    textAlign: 'center',
    marginBottom: 18,
  },

  startButton: {
    width: '100%',
    height: 35,
    backgroundColor: '#E9DDFB',
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 5,
  },

  startButtonText: {
    color: '#527F94',
    fontSize: 11,
    fontWeight: 'bold',
  },

  aboutText: {
    color: '#333333',
    fontSize: 9,
    textDecorationLine: 'underline',
    marginTop: 0,
  },
});
