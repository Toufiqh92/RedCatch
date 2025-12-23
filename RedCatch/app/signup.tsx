import React from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity } from 'react-native';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';

export default function SignUp() {
  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title">Sign Up</ThemedText>
      <View style={styles.form}>
        <ThemedText>Name</ThemedText>
        <TextInput style={styles.input} placeholder="Your name" />
        <ThemedText>Email</ThemedText>
        <TextInput style={styles.input} placeholder="you@example.com" keyboardType="email-address" />
        <ThemedText>Password</ThemedText>
        <TextInput style={styles.input} placeholder="password" secureTextEntry />
        <TouchableOpacity style={styles.button} onPress={() => alert('Sign Up placeholder')}>
          <ThemedText type="subtitle">Create account</ThemedText>
        </TouchableOpacity>
      </View>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  form: { marginTop: 12, gap: 8 },
  input: { borderWidth: 1, borderColor: '#ccc', padding: 10, borderRadius: 6 },
  button: { marginTop: 12, backgroundColor: '#34c759', padding: 12, borderRadius: 8, alignItems: 'center' },
});
