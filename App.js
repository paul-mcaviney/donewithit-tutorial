import WelcomeScreen from "./app/screens/WelcomeScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import { Button, Switch, Text, TextInput, View } from "react-native";

import Card from "./app/components/Card";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
import MessagesScreen from "./app/screens/MessagesScreen";
import AccountScreen from "./app/screens/AccountScreen";
import AppScreen from "./app/components/AppScreen";
import ListingsScreen from "./app/screens/ListingsScreen";
import { useState } from "react";
import AppTextInput from "./app/components/AppTextInput";

export default function App() {
  const [isNew, setIsNew] = useState(false);

  return (
    <AppScreen>
      <Switch value={isNew} onValueChange={(newValue) => setIsNew(newValue)} />
    </AppScreen>
  );
}
