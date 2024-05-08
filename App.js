import WelcomeScreen from "./app/screens/WelcomeScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import { Text, View } from "react-native";

export default function App() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View
        style={{
          backgroundColor: "dodgerblue",
          width: 100,
          height: 100,
          shadowColor: "grey",
          shadowOffset: { width: 10, height: 10 },
          shadowOpacity: 1,
          elevation: 20,
        }}
      ></View>
    </View>
  );
}
