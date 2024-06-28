import { TouchableWithoutFeedback, StyleSheet, View } from "react-native";
import colors from "../../config/colors";

import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

export default function ListItemDeleteAction({ onPress }) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <MaterialCommunityIcons
          name="trash-can"
          size={32}
          color="white"
          style={styles.deleteIcon}
        />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.red,
    width: 70,
    alignItems: "center",
    justifyContent: "center",
  },
});
