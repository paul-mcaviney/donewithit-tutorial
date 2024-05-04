import { useDeviceOrientation } from "@react-native-community/hooks";
import {
  Button,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from "react-native";

export default function App() {
  return (
    <ImageBackground
      source={require("./assets/background.jpg")}
      resizeMode="cover"
      style={styles.image}
    >
      <Image source={require("./assets/logo-red.png")} style={styles.logo} />
      <Text>Sell What You Don't Need</Text>
      <View>
        <Button title="Login" style={styles.bar} />
      </View>
      <View style={styles.bar}></View>
    </ImageBackground>
  );
}
const styles = StyleSheet.create({
  bar: {
    width: 100,
    backgroundColor: "#fc5c65",
  },
  image: {
    flex: 1,
    alignItems: "center",
  },
  logo: {
    width: 100,
    height: 100,
  },
});
