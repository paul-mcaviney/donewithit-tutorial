import { View, StyleSheet, Image } from "react-native";
import AppText from "./AppText";
import colors from "../config/colors";

export default function Card({ title, subTitle, imageUri }) {
  console.log(imageUri);
  return (
    <View style={styles.card}>
      {/* <Image source={require("../assets/jacket.jpg")} style={styles.image} /> */}
      <Image uri={imageUri} style={styles.image} />
      <AppText>{title}</AppText>
      <AppText>{subTitle}</AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    backgroundColor: colors.white,
    marginBottom: 20,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: 200,
  },
});
