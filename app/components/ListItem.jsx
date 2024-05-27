import { Image, StyleSheet, TouchableHighlight, View } from "react-native";

import AppText from "./AppText";
import colors from "../config/colors";

export default function ListItem({ imageUri, subTitle, title, onPress }) {
  return (
    <TouchableHighlight onPress={onPress} underlayColor={colors.lightGrey}>
      <View style={styles.container}>
        <Image source={imageUri} style={styles.image} />
        <View>
          <AppText style={styles.title}>{title}</AppText>
          <AppText style={styles.subtitle}>{subTitle}</AppText>
        </View>
      </View>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    columnGap: 15,
    padding: 15,
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
