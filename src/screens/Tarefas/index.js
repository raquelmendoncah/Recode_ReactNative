import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useEffect, useState } from 'react';

function Tarefas(props) {
  const [fotos, setFotos] = useState([]);

  useEffect(() => {
    fetchFotos();
  }, []);

  const fetchFotos = async () => {
    const res = await fetch(`https://picsum.photos/v2/list`);
    const pictures = await res.json();
    setFotos(pictures);
    console.log(pictures);
  };

  return (
    <View style={{ padding: 30 }}>
      <TouchableOpacity onPress={() => props.navigation.navigate('Home')}>
        <Text style={[css.text, css.red]}>VOLTAR</Text>
      </TouchableOpacity>
      <View style={{ paddingVertical: 30 }}>
        <ScrollView>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              flexWrap: 'wrap',
            }}
          >
            {fotos.map((foto, index) => (
              <Image
                source={{ uri: foto.download_url }}
                key={index}
                style={{ width: 140, height: 140, margin: 5 }}
              />
            ))}
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

export default Tarefas;

const css = StyleSheet.create({
  text: {
    fontSize: 70,
  },
  red: { color: 'red', fontWeight: 'bold' },
});
