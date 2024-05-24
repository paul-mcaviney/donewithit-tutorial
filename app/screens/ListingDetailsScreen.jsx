import { Image, StyleSheet, View } from "react-native";

import AppText from "../components/AppText";
import colors from "../config/colors";

export default function ListingDetailsScreen({ imageUri, title, subTitle }) {
  return (
    <View>
      <Image source={imageUri} style={styles.image} />
      <View style={styles.textContainer}>
        <AppText style={styles.title}>{title}</AppText>
        <AppText style={styles.subTitle}>{subTitle}</AppText>
      </View>
      <View style={styles.authorContainer}>
        <Image
          source={require("../assets/mosh.jpg")}
          style={styles.authorImage}
        />
        <View>
          <AppText style={styles.authorName}>Mosh Hamedani</AppText>
          <AppText>5 Listings</AppText>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  authorContainer: {
    width: "100%",
    flexDirection: "row",
    columnGap: 15,
    padding: 20,
  },
  authorImage: {
    width: 75,
    height: 75,
    borderRadius: 50,
  },
  authorName: {
    fontWeight: "bold",
  },
  image: {
    width: "100%",
    height: 250,
  },
  subTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: colors.secondary,
  },
  textContainer: {
    padding: 20,
    rowGap: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
