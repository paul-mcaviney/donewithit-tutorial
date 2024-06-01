import { FlatList, StyleSheet } from "react-native";
import AppScreen from "../components/AppScreen";
import Card from "../components/Card";
import colors from "../config/colors";

const listings = [
  {
    id: 1,
    title: "Red Jacket for sale",
    price: 100,
    image: require("../assets/jacket.jpg"),
  },
  {
    id: 2,
    title: "Couch in great condition",
    price: 500,
    image: require("../assets/couch.jpg"),
  },
];

export default function ListingsScreen() {
  return (
    <AppScreen style={styles.screen}>
      <FlatList
        data={listings}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subTitle={"$" + item.price}
            imageUri={item.image}
          />
        )}
      />
    </AppScreen>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 20,
    paddingTop: 50,
    backgroundColor: colors.lightGrey,
  },
});
