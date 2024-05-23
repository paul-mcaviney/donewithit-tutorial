import { View, StyleSheet, Text, Image } from "react-native";
import AppText from "./AppText";

export default function Card({ title, subTitle, imageUri }) {
  return (
    <View style={styles.cardContainer}>
      <Image source={imageUri} style={styles.cardImage} />
      <AppText>{title}</AppText>
      <AppText>{subTitle}</AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
