import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const tarefas = [
  {
    nome: 'HOME PAGE',
  },
];

function Tarefas(props) {
  return (
    <View
      style={{
        padding: 30,
      }}
    >
      <TouchableOpacity onPress={() => props.navigation.navigate('Tarefas')}>
        <Text style={[css.text, css.red]}>VER MINHAS FOTOS</Text>
      </TouchableOpacity>
      {tarefas.map((tarefa, index) => (
        <Text style={css.text} key={index}>
          {tarefa.nome}
        </Text>
      ))}
      <TouchableOpacity onPress={() => props.navigation.navigate('Login')}>
        <Text style={[css.text, css.red]}>SAIR</Text>
      </TouchableOpacity>
    </View>
  );
}

export default Tarefas;

const css = StyleSheet.create({
  text: {
    fontSize: 60,
  },
  red: { color: 'red', fontWeight: 'bold' },
});
