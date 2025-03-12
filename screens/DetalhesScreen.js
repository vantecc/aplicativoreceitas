import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function DetalhesScreen({ route, navigation }) {
  const { nome, ingredientes, preparo } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{nome}</Text>
      
      <Text style={styles.subtitle}>Ingredientes:</Text>
      <Text style={styles.text}>{ingredientes}</Text>

      <Text style={styles.subtitle}>Modo de Preparo:</Text>
      <Text style={styles.text}>{preparo}</Text>

      <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
        <Text style={styles.buttonText}>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'pink',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 15,
  },
  text: {
    fontSize: 16,
    marginBottom: 10,
    lineHeight: 22, 
  },
  button: {
    backgroundColor: '#FF4500',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
