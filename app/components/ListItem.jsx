import { Image, StyleSheet, TouchableHighlight, View } from "react-native";

import {
  GestureHandlerRootView,
  Swipeable,
} from "react-native-gesture-handler";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

import AppText from "./AppText";
import colors from "../config/colors";

export default function ListItem({
  imageUri,
  subTitle,
  title,
  onPress,
  renderRightActions,
  style,
  IconComponent,
}) {
  return (
    <GestureHandlerRootView>
      <Swipeable renderRightActions={renderRightActions}>
        <TouchableHighlight onPress={onPress} underlayColor={colors.lightGrey}>
          <View style={[styles.container, style]}>
            {IconComponent}
            {imageUri && <Image source={imageUri} style={styles.image} />}
            <View style={styles.detailsContainer}>
              <AppText style={styles.title}>{title}</AppText>
              {subTitle && (
                <AppText style={styles.subtitle}>{subTitle}</AppText>
              )}
            </View>
          </View>
        </TouchableHighlight>
      </Swipeable>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 15,
    columnGap: 15,
  },
  detailsContainer: {
    justifyContent: "center",
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
