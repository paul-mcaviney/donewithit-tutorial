import { StyleSheet, View } from "react-native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

import AppScreen from "../components/AppScreen";
import ListItem from "../components/ListItem";
import colors from "../config/colors";
import AppIcon from "../components/AppIcon";

export default function AccountScreen() {
  return (
    <AppScreen style={styles.screen}>
      <ListItem
        imageUri={require("../assets/mosh.jpg")}
        title="Mosh Hamedani"
        subTitle="programmingwithmosh@gmail.com"
        style={[styles.listItem, { marginBottom: 20 }]}
      />
      <AppIcon iconName="logout" color={"#ffe66d"} />
      <ListItem />
    </AppScreen>
  );
}

const styles = StyleSheet.create({
  continer: {
    width: "100%",
    height: 200,
  },
  listItem: {
    backgroundColor: colors.white,
    alignItems: "center",
  },
  screen: {
    backgroundColor: colors.lightGrey,
  },
});
