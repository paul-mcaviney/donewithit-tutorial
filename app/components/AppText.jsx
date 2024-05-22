import React from "react";
import { Platform, Text, StyleSheet } from "react-native";

export default function AppText({ children, color, size, weight }) {
  return (
    <Text
      style={[
        styles.text,
        { color: color, fontSize: size, fontWeight: weight },
      ]}
    >
      {children}
    </Text>
  );
}

const styles = StyleSheet.create({
  text: {
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
  },
});
