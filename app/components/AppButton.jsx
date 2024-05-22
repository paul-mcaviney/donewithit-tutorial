import { Button, Pressable, View, StyleSheet, Platform } from "react-native";
import AppText from "./AppText";

import colors from "../config/colors";

export default function AppButton({ title, bgColor, onPress }) {
  return (
    <Pressable
      style={{ ...styles.button, backgroundColor: bgColor }}
      onPress={onPress}
      android_ripple={{ color: "white" }}
    >
      <AppText style={styles.text} color={colors.white} size={16} weight={700}>
        {title}
      </AppText>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    width: "100%",
    height: 50,
    overflow: "hidden",
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
  },
});
