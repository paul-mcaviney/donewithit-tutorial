import { StyleSheet, View } from "react-native";
import { useFormikContext } from "formik";

import AppButton from "../AppButton";

export default function AppSubmitButton({ title, style }) {
  const { handleSubmit } = useFormikContext();

  return <AppButton style={style} title={title} onPress={handleSubmit} />;
}
