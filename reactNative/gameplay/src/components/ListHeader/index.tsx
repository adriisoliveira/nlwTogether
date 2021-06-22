import React from "react";
import { RectButton, RectButtonProps } from "react-native-gesture-handler";
import { Text, View, } from 'react-native';

import DiscordImg from '../../assets/discord.png';
import { styles } from "./styles";
import { theme } from "../../global/styles/theme";

type Props = {
  title: string;
  subtitle: string;
}

export function ListHeader({ title, subtitle, ...rest }: Props) {
  const { secondary50, secondary70 } = theme.colors;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {title}
      </Text>
      <Text style={styles.subtitle}>
        {subtitle}
      </Text>

    </View>
  )
}