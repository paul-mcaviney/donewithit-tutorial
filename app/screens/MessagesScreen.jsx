import { StyleSheet, FlatList, View } from "react-native";

import ListItem from "../components/ListItem";
import Screen from "../components/AppScreen";
import ListItemSeparator from "../components/ListItemSeparator";

export default function MessagesScreen() {
  const messages = [
    {
      id: 1,
      title: "T1",
      description: "D1",
      image: require("../assets/mosh.jpg"),
    },
    {
      id: 2,
      title: "T2",
      description: "D2",
      image: require("../assets/mosh.jpg"),
    },
  ];
  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subTitle={item.description}
            imageUri={item.image}
            onPress={() => console.log(`Message item ${item.title} pressed`)}
          />
        )}
        ItemSeparatorComponent={<ListItemSeparator />}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({});
