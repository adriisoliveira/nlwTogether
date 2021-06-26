import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";
import { getStatusBarHeight } from "react-native-iphone-x-helper";

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  user: {
    flexDirection: 'row',
  },
  greeting: {
    fontFamily: theme.fonts.title500,
    fontSize: 24,
    color: theme.colors.heading,
    marginRight: 6
  },
  username: {
    fontFamily: theme.fonts.title700,
    fontSize: 24,
    color: theme.colors.heading
  },
  message: {
    fontFamily: theme.fonts.text400,
    color: theme.colors.highlight,
    flexDirection: 'row'
  },
  overlay: {
    flex: 1,
    backgroundColor: theme.colors.overlay
  },
  containerText: {
    alignItems: 'center',
    paddingTop: 30,
    paddingBottom: 27,
    justifyContent: 'center',
    flexDirection: 'row'
  },
  containerButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 24,
    marginRight: 23
  },
  backgroundSignOut: {
    width: 375,
    height: 812,
    backgroundColor: 'transparent'
  },
  buttonNo: {
    height: 56,
    width: 160,
    borderRadius: 8,
    borderColor: theme.colors.discord,
    backgroundColor: theme.colors.primary,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonYes: {
    height: 56,
    width: 160,
    backgroundColor: theme.colors.primary,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center'
  },
  question: {
    fontFamily: theme.fonts.title500,
    fontSize: 24,
    color: theme.colors.heading,
    marginRight: 6
  },

  text: {
    fontFamily: theme.fonts.title700,
    fontSize: 24,
    color: theme.colors.heading,
  },
  colorText: {
    fontFamily: theme.fonts.title700,
    fontSize: 24,
    color: theme.colors.primary

  },
  footer: {
    marginVertical: 20,
    marginBottom: 56
  }
});