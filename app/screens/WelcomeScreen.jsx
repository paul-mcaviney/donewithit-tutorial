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
import AppText from "../components/AppText";

export default function WelcomeScreen() {
  return (
    <ImageBackground
      source={require("../assets/background.jpg")}
      resizeMode="cover"
      style={styles.background}
      blurRadius={4}
    >
      <View style={styles.logoContainer}>
        <Image source={require("../assets/logo-red.png")} style={styles.logo} />
        <AppText size={18} weight={700}>
          Sell What You Don't Need
        </AppText>
      </View>
      <View style={styles.buttonContainer}>
        <AppButton
          title="LOGIN"
          bgColor={colors.primary}
          onPress={() => console.log("Login")}
        />
        <AppButton
          title="REGISTER"
          bgColor={colors.secondary}
          onPress={() => console.log("Register")}
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
  },
  buttonContainer: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 40,
    rowGap: 20,
  },
  logo: {
    width: 100,
    height: 100,
  },
  logoContainer: {
    flex: 1,
    alignItems: "center",
    top: 100,
    rowGap: 20,
  },
});
