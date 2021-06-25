import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  container: {
    height: 95,
    width: '100%',
    backgroundColor: theme.colors.secondary40,
    color: theme.colors.heading,
    borderRadius: 8,
    fontFamily: theme.fonts.text400,
    fontSize: 13,
    marginRight: 4,
    borderWidth: 1,
    borderColor: theme.colors.secondary50,
    paddingLeft: 16,
    paddingTop: 16,
    textAlignVertical: 'top'
  },
});