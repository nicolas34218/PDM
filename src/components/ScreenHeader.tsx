
import React from 'react';
import {
  View,
  Text,
  Pressable,
  StyleSheet,
} from 'react-native';

interface ScreenHeaderProps {
  onBack?: () => void;
  isHome?: boolean;
}

export default function ScreenHeader({
  onBack,
  isHome = false,
}: ScreenHeaderProps) {
  return (
    <View style={styles.container}>
      <Pressable
        onPress={onBack}
        style={styles.button}
      >
        <Text style={styles.buttonText}>
          {isHome ? '⌂' : '‹'}
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 45,
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  button: {
    width: 32,
    height: 32,
    borderRadius: 20,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#527F94',
    fontSize: 26,
    fontWeight: 'bold',
    lineHeight: 30,
  },
});
