import { StyleSheet } from "react-native";

import { theme } from "../../global/theme";

export const styles = StyleSheet.create({
  container: {
    width: 104,
    height: 120,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    marginRight: 8
  },
  content: {
    width: 100,
    height: 116,
    backgroundColor: theme.colors.secondary40,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 7
  },
  title: {
    fontFamily: theme.fonts.title500,
    color: theme.colors.heading,
    fontSize: 15
  },
  check: {
    width: 10,
    height: 10,
    backgroundColor: theme.colors.secondary100,
    alignSelf: 'flex-end'
  },
  checked: {

  }
});