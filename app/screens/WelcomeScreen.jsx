import {
  Button,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from "react-native";

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
      <View style={styles.loginButton}></View>
      <View style={styles.registerButton}></View>
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
    backgroundColor: "#fc5c65",
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
    backgroundColor: "#4ECDC4",
  },
});
