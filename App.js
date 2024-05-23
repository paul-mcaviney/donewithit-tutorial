import WelcomeScreen from "./app/screens/WelcomeScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import { Button, Text, View } from "react-native";

import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

import AppText from "./app/components/AppText";
import AppButton from "./app/components/AppButton";
import colors from "./app/config/colors";
import Card from "./app/components/Card";

export default function App() {
  return (
    <Card
      title="Red Jacket For Sale!"
      subTitle={"$100"}
      imageUrl={require("appassetsjacket.jpg")}
    />
  );
}
