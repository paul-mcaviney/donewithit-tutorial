import { Button, Pressable, View, StyleSheet } from "react-native";
import AppText from "./AppText";

export default function AppButton({ title, bgColor, onPress }) {
  const buttonTitle = title.toString();
  return (
    <Pressable style={styles.container} styles={{ backgroundColor: bgColor }}>
      {/* TODO: Style this properly without using the button part of it (just a pressable and text) */}
      {/* <Button
        title={buttonTitle}
        onPress={onPress}
        color={bgColor}
        style={styles.button}
      /> */}
      {/* <AppText>{title}</AppText> */}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 70,
    overflow: "hidden",
    borderRadius: 25,
  },
  // button: {
  //   borderRadius: 50,
  //   overflow: "hidden",
  // },
});
