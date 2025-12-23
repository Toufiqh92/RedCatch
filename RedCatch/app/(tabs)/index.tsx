import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';

export default function HomeScreen() {
  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title">RedCatch</ThemedText>
      <ThemedText type="subtitle">AI-assisted dating — simple, transparent, and private</ThemedText>

      <View style={styles.section}>
        <ThemedText type="default">What this app does:</ThemedText>
        <ThemedText>• Shows AI-generated green and red flags for profiles</ThemedText>
        <ThemedText>• Gives a compatibility hint to help decision-making</ThemedText>
        <ThemedText>• Keeps analysis on the server (you control sharing)</ThemedText>
      </View>

      <View style={styles.actions}>
        <Link href="/signin">
          <Link.Trigger>
            <TouchableOpacity style={styles.buttonPrimary}>
              <ThemedText type="subtitle">Sign In</ThemedText>
            </TouchableOpacity>
          </Link.Trigger>
        </Link>

        <Link href="/signup">
          <Link.Trigger>
            <TouchableOpacity style={styles.buttonSecondary}>
              <ThemedText>Sign Up</ThemedText>
            </TouchableOpacity>
          </Link.Trigger>
        </Link>
      </View>

      <ThemedText style={styles.note}>This is a minimal introduction page — edit app/(tabs)/index.tsx to customize.</ThemedText>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    gap: 12,
  },
  section: {
    marginTop: 12,
    gap: 6,
  },
  actions: {
    flexDirection: 'row',
    gap: 12,
    marginTop: 20,
  },
  buttonPrimary: {
    paddingVertical: 10,
    paddingHorizontal: 18,
    backgroundColor: '#1d9bf0',
    borderRadius: 8,
  },
  buttonSecondary: {
    paddingVertical: 10,
    paddingHorizontal: 18,
    backgroundColor: '#e5e5ea',
    borderRadius: 8,
  },
  note: {
    marginTop: 24,
    fontSize: 12,
    opacity: 0.8,
  },
});
