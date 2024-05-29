import { View } from "react-native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

import colors from "../config/colors";

export default function AppIcon({
  backgroundColor = colors.black,
  iconColor = colors.white,
  iconName = "alert-box-outline",
  size = 40,
}) {
  return (
    <View
      style={{
        backgroundColor,
        width: size,
        height: size,
        borderRadius: size / 2,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <MaterialCommunityIcons
        name={iconName}
        size={size * 0.5}
        color={iconColor}
      />
    </View>
  );
}
