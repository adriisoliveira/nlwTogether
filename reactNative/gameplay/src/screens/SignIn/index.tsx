import React from "react";
import { useState } from "react";
import {
  View,
  Text,
  Image,
  StatusBar
} from "react-native";
import { ButtonIcon } from "../../components/ButtonIcon/indext";
import { styles } from "./style";
import IllustrationImg from '../../assets/illustration.png'

export function SigIn() {
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />

      <Image source={IllustrationImg}
        style={styles.image}
        resizeMode="stretch" />

      <View style={styles.content}>
        <Text style={styles.title}>
          Organize{`\n`}
          suas jogatinas{`\n`}
          facilmente{`\n`}
        </Text>
        <Text style={styles.subtitle}>
          Crie grupos para jogar seus games {`\n`}
          favoritos com seus amigos
        </Text>

        <ButtonIcon title="Entrar com Discord" activeOpacity={0.5} />

      </View>

    </View>
  );
}
