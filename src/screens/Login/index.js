import React, { useState } from 'react';
import {
  View,
  Text,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  Alert,
  Platform,
} from 'react-native';

import Fundo from '../../../assets/fundo.jpg';

import styles from './styles';

function Login(props) {
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');

  const APIuser = {
    id: 1,
    name: 'raquel',
    pass: 'raquel',
  };

  const autenticacao = () => {
    if (usuario.toLowerCase().trim() == APIuser.name && senha == APIuser.pass) {
      props.navigation.navigate('Home');
    } else {
      Platform.OS === 'web' ? alert(`Invalid`) : Alert.alert(`Invalid`);
    }
  };

  return (
    <View style={styles.caixa}>
      <ImageBackground source={Fundo} style={styles.fundo}>
        <View>
          <Text style={styles.titulo}>LOGIN</Text>
        </View>

        <View style={styles.inputs}>
          <TextInput
            placeholder="Digite o email..."
            style={styles.input}
            value={usuario}
            onChangeText={(t) => setUsuario(t)}
          />
          <TextInput
            placeholder="Digite o senha..."
            style={styles.input}
            value={senha}
            onChangeText={(t) => setSenha(t)}
            secureTextEntry={true}
          />

          <TouchableOpacity style={styles.btn} onPress={autenticacao}>
            <Text style={styles.texto}>Entrar</Text>
          </TouchableOpacity>
        </View>
        <View>
          <Text style={styles.titulo}>EMAIL: raquel</Text>
          <Text style={styles.titulo}>SENHA: raquel</Text>
        </View>
      </ImageBackground>
    </View>
  );
}

export default Login;
