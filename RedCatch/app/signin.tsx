import React from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity } from 'react-native';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';

export default function SignIn() {
  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title">Sign In</ThemedText>
      <View style={styles.form}>
        <ThemedText>Email</ThemedText>
        <TextInput style={styles.input} placeholder="you@example.com" keyboardType="email-address" />
        <ThemedText>Password</ThemedText>
        <TextInput style={styles.input} placeholder="password" secureTextEntry />
        <TouchableOpacity style={styles.button} onPress={() => alert('Sign In placeholder')}>
          <ThemedText type="subtitle">Sign In</ThemedText>
        </TouchableOpacity>
      </View>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  form: { marginTop: 12, gap: 8 },
  input: { borderWidth: 1, borderColor: '#ccc', padding: 10, borderRadius: 6 },
  button: { marginTop: 12, backgroundColor: '#1d9bf0', padding: 12, borderRadius: 8, alignItems: 'center' },
});
