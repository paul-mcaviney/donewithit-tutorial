import { Image, SafeAreaView, StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.buttonContainer}>
        <View style={styles.button} />
        <View style={[styles.button, { backgroundColor: "#4ECDC4" }]} />
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
  button: {
    backgroundColor: "#fc5c65",
    width: 50,
    height: 50,
  },
  buttonContainer: {
    flex: 1,
    width: "80%",
    flexDirection: "row",
    alignContent: "center",
  },
  container: {
    backgroundColor: "black",
    flex: 1,
    width: "100%",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: "100%",
  },
});
