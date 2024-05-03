import { useDeviceOrientation } from "@react-native-community/hooks";
import { View } from "react-native";

export default function App() {
  // Next video is on flexBasis

  return (
    <View
      style={{
        backgroundColor: "#fff",
        flex: 1,
        flexDirection: "row",
        justifyContent: "center", // align on primary axis
        alignItems: "center", // align on secondary axis
        alignContent: "center",
        flexWrap: "wrap",
      }}
    >
      <View
        style={{
          backgroundColor: "dodgerblue",
          width: 100,
          height: 100,
        }}
      />
      <View
        style={{
          backgroundColor: "gold",
          width: 100,
          height: 100,
        }}
      />
      <View
        style={{
          backgroundColor: "tomato",
          width: 100,
          height: 100,
        }}
      />
      <View
        style={{
          backgroundColor: "grey",
          width: 100,
          height: 100,
        }}
      />
      <View
        style={{
          backgroundColor: "greenyellow",
          width: 100,
          height: 100,
        }}
      />
    </View>
  );
}
