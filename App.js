import { useState } from "react";

import AppScreen from "./app/components/AppScreen";
import AppTextInput from "./app/components/AppTextInput";
import AppPicker from "./app/components/AppPicker";

const categories = [
  { label: "Furniture", value: 1 },
  { label: "Clothes", value: 2 },
  { label: "Random", value: 3 },
];

export default function App() {
  const [category, setCategory] = useState();

  return (
    <AppScreen>
      <AppPicker
        items={categories}
        icon="apps"
        onSelectItem={(item) => {
          setCategory(item);
        }}
        placeholder="Category"
        selectedItem={category}
      />
      <AppTextInput icon="email" placeholder="Email" />
    </AppScreen>
  );
}
