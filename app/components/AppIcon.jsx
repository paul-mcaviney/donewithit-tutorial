import { StyleSheet, View } from "react-native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

import colors from "../config/colors";

export default function AppIcon({ color, iconName }) {
  return (
    <View style={[styles.container, { backgroundColor: color }]}>
      <MaterialCommunityIcons name={iconName} size={26} color="white" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 50,
    height: 50,
    backgroundColor: colors.primary,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
  },
});
