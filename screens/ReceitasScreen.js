import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, FlatList } from 'react-native';

export default function ReceitasScreen({ navigation }) {
  const receitas = [
    { 
      id: '1', 
      nome: 'Bolo de Chocolate', 
      ingredientes: 'Farinha, Ovos, Chocolate...', 
      preparo: 'Misture tudo e asse por 40min.', 
      imagem: 'https://static.itdg.com.br/images/360-240/3b03a942ab534200a0a80eb324828ccb/246606-postprocess-71802381-1893-4fbe-b302-726bfca18774.jpg' 
    },
    { 
      id: '2', 
      nome: 'Panqueca', 
      ingredientes: 'Farinha, Leite, Ovos...', 
      preparo: 'Misture tudo e frite em uma frigideira.', 
      imagem: 'https://www.sadia.com.br/assets/images/_/recipes/46bba7a677ff997c3384cad1c699dba18d1e5873.webp?1738939939934' 
    },
    { 
      id: '3', 
      nome: 'Brigadeiro', 
      ingredientes: 'Leite Condensado, Chocolate, Manteiga...', 
      preparo: 'Cozinhe até engrossar e enrole.', 
      imagem: 'https://www.finafarinha.com.br/wp-content/uploads/2021/04/brigadeiro-scaled.jpg' 
    },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🍽 Lista de Receitas</Text>

      <FlatList
        data={receitas}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={{ uri: item.imagem }} style={styles.image} />
            <Text style={styles.recipeName}>{item.nome}</Text>
            <TouchableOpacity 
              style={styles.button} 
              onPress={() => navigation.navigate('Detalhes', item)}
            >
              <Text style={styles.buttonText}>Ver Detalhes</Text>
            </TouchableOpacity>
          </View>
        )}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
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
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  card: {
    backgroundColor: 'orange',
    padding: 15,
    marginVertical: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3, 
  },
  recipeName: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  button: {
    backgroundColor: 'red',
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  image: {
    width: '100%',
    height: 180,
    borderRadius: 10,
    marginBottom: 10,
  },
});
