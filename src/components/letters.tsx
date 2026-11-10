
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';

export interface LetterCardProp {
  letra: string;
  imagem?: string;
  onPress: () => void;
}

export default function LetterCard({
  letra,
  imagem,
  onPress,
}: LetterCardProp) {
  return (
    <TouchableOpacity
      style={styles.card}
      onPress={onPress}
      activeOpacity={0.7}
    >
      <View style={styles.imageContainer}>
        {imagem ? (
          <Image
            source={{ uri: imagem }}
            style={styles.image}
            resizeMode="contain"
          />
        ) : (
          <Text style={styles.placeholderText}>
            {letra}
          </Text>
        )}
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 75,
    height: 85,
    backgroundColor: '#E9DDFB',
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 6,
  },

  imageContainer: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },

  image: {
    width: '85%',
    height: '85%',
  },

  placeholderText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#376C89',
  },
});