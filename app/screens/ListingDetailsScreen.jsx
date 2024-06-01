import { Image, StyleSheet, View } from "react-native";

import AppText from "../components/AppText";
import ListItem from "../components/ListItem";
import colors from "../config/colors";

export default function ListingDetailsScreen({ imageUri, title, subTitle }) {
  return (
    <View style={styles.container}>
      <Image source={imageUri} style={styles.image} />
      <View style={styles.textContainer}>
        <AppText style={styles.title}>{title}</AppText>
        <AppText style={styles.subTitle}>{subTitle}</AppText>
      </View>
      <View style={styles.userContainer}>
        <ListItem
          imageUri={require("../assets/mosh.jpg")}
          title="Mosh Hamedani"
          subTitle="5 Listings"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 300,
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
    fontWeight: "500",
  },
  userContainer: {
    padding: 20,
    height: 100,
  },
});
