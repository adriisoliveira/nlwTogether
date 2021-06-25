import React from "react";
import { RectButton, RectButtonProps } from "react-native-gesture-handler";
import { styles } from "./styles";
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { theme } from "../../global/styles/theme";
import { TextInput, TextInputProps } from "react-native";

export function SmallInput({ ...rest }: TextInputProps) {
  return (
    <TextInput
      style={styles.container}
      keyboardType="numeric"
      {...rest}
    />
  );
}