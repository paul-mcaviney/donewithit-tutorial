import {
  Image,
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";

import colors from "../config/colors";

export default function ViewImageScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />
      <View style={styles.buttonContainer}>
        <View style={styles.closeIcon} />
        <View style={[styles.deleteIcon, { backgroundColor: "#4ECDC4" }]} />
      </View>
      <Image
        source={require("../assets/chair.jpg")}
        resizeMode="contain"
        style={styles.image}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    flex: 1,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: 20,
    paddingRight: 20,
  },
  closeIcon: {
    backgroundColor: colors.primary,
    width: 50,
    height: 50,
  },
  container: {
    backgroundColor: colors.black,
    flex: 1,
    width: "100%",
    alignItems: "center",
    paddingTop: 20,
    // paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  deleteIcon: {
    backgroundColor: colors.secondary,
    width: 50,
    height: 50,
  },
  image: {
    width: "100%",
    height: "100%",
  },
});
