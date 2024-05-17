
import {View, Text,TextInput} from "react-native";
import React, {useState} from "react";
import { styles } from './styles';
export function SignIn(){

  const [text, setText] = useState ("(você não digitou nada ainda)");
  return(
    <View style={styles.container}>     
      <Text>Bom dia</Text>

      <TextInput style={styles.input} onChangeText={setText}/>
      
      <Text>
        Você digitou : {text}
      </Text>
    </View>
  );
}