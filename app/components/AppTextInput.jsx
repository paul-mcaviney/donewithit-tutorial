import { StyleSheet, TextInput, View, Platform } from "react-native";

import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import colors from "../config/colors";

export default function AppTextInput({ icon, ...otherProps }) {
  const test = { ...otherProps };
  console.log(test);
  // TODO: figure out why the spread operator isn't working properly
  return (
    <View style={styles.container}>
      {icon && <MaterialCommunityIcons name={icon} size={20} />}
      <TextInput style={styles.TextInput} {...otherProps} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.lightGrey,
    borderRadius: 25,
    flexDirection: "row",
    width: "100%",
    padding: 10,
    marginVertical: 10,
    alignItems: "center",
    columnGap: 10,
  },
  TextInput: {
    fontSize: 16,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
  },
});
