import {
  Button,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from "react-native";

import colors from "../config/colors";
import AppButton from "../components/AppButton";

export default function WelcomeScreen() {
  return (
    <ImageBackground
      source={require("../assets/background.jpg")}
      resizeMode="cover"
      style={styles.background}
    >
      <View style={styles.logoContainer}>
        <Image source={require("../assets/logo-red.png")} style={styles.logo} />
        <Text>Sell What You Don't Need</Text>
      </View>
      <AppButton
        title="login"
        bgColor={colors.primary}
        onPress={() => console.log("Login")}
      />
      <AppButton
        title="Register"
        bgColor={colors.secondary}
        onPress={() => console.log("Login")}
      />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
  },
  loginButton: {
    height: 70,
    backgroundColor: colors.primary,
  },
  logo: {
    width: 100,
    height: 100,
  },
  logoContainer: {
    flex: 1,
    alignItems: "center",
    top: 100,
  },
  registerButton: {
    height: 70,
    backgroundColor: colors.secondary,
  },
});
