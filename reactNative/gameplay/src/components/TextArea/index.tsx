import React from "react";
import { styles } from "./styles";
import { theme } from "../../global/styles/theme";
import { TextInput, TextInputProps } from "react-native";

export function TextArea({ ...rest }: TextInputProps) {
  return (
    <TextInput
      style={styles.container}
      {...rest}
    />
  );
}