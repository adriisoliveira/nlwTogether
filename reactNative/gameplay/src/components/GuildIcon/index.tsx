import React from "react";
import { RectButton, RectButtonProps } from "react-native-gesture-handler";
import { View, Text, Image } from "react-native";
import { styles } from "./styles";


export function GuildIcon() {
  const uri = 'https://logodownload.org/wp-content/uploads/2017/11/discord-logo-5.png';

  return (
    <Image
      source={{ uri }}
      style={styles.image}
      resizeMode="cover"
    />

  );
}