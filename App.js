import { useDeviceOrientation } from "@react-native-community/hooks";
import {
  Dimensions,
  StyleSheet,
  StatusBar,
  Text,
  Button,
  Platform,
  SafeAreaView,
  View,
  LogBox,
} from "react-native";

export default function App() {
  const orientation = useDeviceOrientation();
  if (orientation === "landscape") {
    StatusBar.setHidden(true);
  } else {
    StatusBar.setHidden(false);
  }
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <View
        style={{
          backgroundColor: "dodgerblue",
          width: "100%",
          height: orientation === "landscape" ? "100%" : "30%",
        }}
      ></View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // paddingTop: Platform.OS === "android" ? 40 : 0,
    // alignItems: "center",
    // justifyContent: "center",
  },
});
