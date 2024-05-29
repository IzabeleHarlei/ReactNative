
import {View, Text,TextInput,Image} from "react-native";
import React, {useState} from "react";
import { styles } from './styles';
import IllustratuionImg from '../assets/illustration.png';
import { StatusBar } from "expo-status-bar";

export function SignIn(){
return(
  <View style={styles.container}>
    <StatusBar barStyle= 'light-content' backgroundColor={"transparent"} transLucent />
     <Image source={IllustratuionImg} /> 
  <View style={styles.content}> 
      
    <Text style = {styles.title}>
      Organize Suas {'\n'}
      Jogatinas {'\n'}
      facilmente
    </Text>
    <Text style={styles.subtitle}>
      Crie grupos para jogar seus games{'\n'}
      favoritos com seus amigos

    </Text>
  </View>
  </View>
);

}