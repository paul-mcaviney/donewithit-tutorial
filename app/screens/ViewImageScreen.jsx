import { Image, SafeAreaView, StatusBar, StyleSheet, View } from "react-native";

import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

import colors from "../config/colors";

export default function ViewImageScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />
      <View style={styles.buttonContainer}>
        <MaterialCommunityIcons
          name="close"
          size={32}
          color="white"
          style={styles.closeIcon}
        />
        <MaterialCommunityIcons
          name="trash-can-outline"
          size={32}
          color="white"
          style={styles.deleteIcon}
        />
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
    width: 50,
    height: 50,
  },
  image: {
    width: "100%",
    height: "100%",
  },
});
