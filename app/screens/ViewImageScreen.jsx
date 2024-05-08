import {
  Image,
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";

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
    backgroundColor: "#fc5c65",
    width: 50,
    height: 50,
  },
  container: {
    backgroundColor: "black",
    flex: 1,
    width: "100%",
    alignItems: "center",
    paddingTop: 20,
    // paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  deleteIcon: {
    backgroundColor: "#fc5c65",
    width: 50,
    height: 50,
  },
  image: {
    width: "100%",
    height: "100%",
  },
});
