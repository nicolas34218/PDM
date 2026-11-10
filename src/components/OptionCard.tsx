
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Pressable,
} from 'react-native';

interface OptionCardProps {
  icon: string;
  title: string;
  description: string;
  color: string;
  onPress: () => void;
}

export default function OptionCard({
  icon,
  title,
  description,
  color,
  onPress,
}: OptionCardProps) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.card,
        { backgroundColor: color },
        pressed && styles.pressed,
      ]}
    >
      <Text style={styles.icon}>{icon}</Text>

      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>
          {description}
        </Text>
      </View>

      <Text style={styles.arrow}>›</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    minHeight: 76,
    borderRadius: 15,
    paddingHorizontal: 12,
    paddingVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 18,
  },
  icon: {
    fontSize: 38,
    width: 58,
    textAlign: 'center',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 4,
  },
  title: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#376C89',
    marginBottom: 5,
    textAlign: 'center',
  },
  description: {
    fontSize: 10,
    color: '#52758B',
    textAlign: 'center',
  },
  arrow: {
    fontSize: 29,
    color: '#83A5B8',
    marginLeft: 5,
  },
  pressed: {
    opacity: 0.75,
    transform: [{ scale: 0.98 }],
  },
});
