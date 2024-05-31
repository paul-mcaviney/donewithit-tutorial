import { FlatList, StyleSheet, View } from "react-native";

import AppScreen from "../components/AppScreen";
import ListItem from "../components/ListItem";
import colors from "../config/colors";
import AppIcon from "../components/AppIcon";

const menuItems = [
  {
    title: "My Listings",
    icon: {
      iconName: "format-list-bulleted",
      backgroundColor: colors.primary,
    },
  },
  {
    title: "My Messages",
    icon: {
      iconName: "email",
      backgroundColor: colors.secondary,
    },
  },
];

export default function AccountScreen() {
  return (
    <AppScreen style={styles.screen}>
      <View style={styles.mainContainer}>
        <ListItem
          imageUri={require("../assets/mosh.jpg")}
          title="Mosh Hamedani"
          subTitle="programmingwithmosh@gmail.com"
          style={styles.listItem}
        />
      </View>
      <View style={styles.container}>
        <FlatList
          data={menuItems}
          keyExtractor={(menuItem) => menuItem.title}
          renderItem={({ item }) => (
            <ListItem
              style={styles.listItem}
              title={item.title}
              IconComponent={
                <AppIcon
                  iconName={item.icon.iconName}
                  backgroundColor={item.icon.backgroundColor}
                />
              }
            />
          )}
          ItemSeparatorComponent={
            <View style={{ height: 1, backgroundColor: colors.lightGrey }} />
          }
        />
      </View>
      <ListItem
        title="Log Out"
        IconComponent={<AppIcon iconName="logout" backgroundColor="#ffe66d" />}
        style={styles.listItem}
      />
    </AppScreen>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
  listItem: {
    backgroundColor: colors.white,
  },
  mainContainer: {
    height: 100,
    marginVertical: 20,
  },
  screen: {
    backgroundColor: colors.lightGrey,
  },
});
