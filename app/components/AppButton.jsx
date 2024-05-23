import { Pressable, View, StyleSheet } from "react-native";
import AppText from "./AppText";

import colors from "../config/colors";

export default function AppButton({ title, color = "primary", onPress }) {
  return (
    <View style={styles.buttonContainer}>
      <Pressable
        style={{ ...styles.button, backgroundColor: colors[color] }}
        onPress={onPress}
        android_ripple={{ color: colors.white }}
      >
        <AppText
          style={styles.text}
          color={colors.white}
          size={16}
          weight={700}
        >
          {title}
        </AppText>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
  },
  buttonContainer: {
    borderRadius: 25,
    overflow: "hidden",
  },
});
