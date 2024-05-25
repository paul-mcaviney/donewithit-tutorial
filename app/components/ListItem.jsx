import { Image, StyleSheet, View } from "react-native";

import AppText from "./AppText";
import colors from "../config/colors";

export default function ListItem({ imageUri, subTitle, title }) {
  return (
    <View style={styles.container}>
      <Image source={imageUri} style={styles.image} />
      <View>
        <AppText style={styles.title}>{title}</AppText>
        <AppText style={styles.subtitle}>{subTitle}</AppText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    columnGap: 15,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  subTitle: {
    color: colors.mediumGrey,
  },
  title: {
    fontWeight: "700",
  },
});
