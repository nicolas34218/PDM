
import React from 'react';
import {
  View,
  Text,
  Pressable,
  StyleSheet,
} from 'react-native';

interface StepCardProps {
  number: number;
  icon: string;
  title: string;
  description: string;
  color: string;
  badgeColor: string;
  locked?: boolean;
  onPress: () => void;
}

export default function StepCard({
  number,
  icon,
  title,
  description,
  color,
  badgeColor,
  locked = false,
  onPress,
}: StepCardProps) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.container,
        { backgroundColor: color },
        pressed && styles.pressed,
      ]}
    >
      <View
        style={[
          styles.number,
          { backgroundColor: badgeColor },
        ]}
      >
        <Text style={styles.numberText}>
          {number}
        </Text>
      </View>

      <View style={styles.iconContainer}>
        <Text style={styles.icon}>{icon}</Text>
      </View>

      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>
          {description}
        </Text>
      </View>

      <Text style={styles.status}>
        {locked ? '🔒' : '▶'}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    minHeight: 62,
    borderRadius: 14,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 7,
    paddingVertical: 7,
    marginBottom: 12,
  },
  number: {
    width: 27,
    height: 27,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  numberText: {
    color: '#FFFFFF',
    fontSize: 11,
    fontWeight: 'bold',
  },
  iconContainer: {
    width: 45,
    height: 45,
    borderRadius: 30,
    backgroundColor: 'rgba(255,255,255,0.45)',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 5,
  },
  icon: {
    fontSize: 25,
  },
  content: {
    flex: 1,
    paddingHorizontal: 3,
  },
  title: {
    fontSize: 11,
    fontWeight: 'bold',
    color: '#376C89',
    marginBottom: 3,
  },
  description: {
    fontSize: 9,
    color: '#52758B',
  },
  status: {
    fontSize: 16,
    marginHorizontal: 3,
  },
  pressed: {
    opacity: 0.75,
  },
});
