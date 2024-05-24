
import {View, Text,TextInput,Image} from "react-native";
import React, {useState} from "react";
import { styles } from './styles';
import IllustratuionImg from '../assets/illustration.png';

export function SignIn(){
return(
  <View style={styles.container}>
    <StatusBar barSlyte='light-content' backgroudColor={"transparente"} transLucent/>
     <Image source={IllustratuionImg} style={styles.image} resizeMode='stretch'/> 

  </View>
);

}