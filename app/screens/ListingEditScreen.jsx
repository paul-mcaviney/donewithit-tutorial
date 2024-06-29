import { StyleSheet } from "react-native";
import * as Yup from "yup";

import AppScreen from "../components/AppScreen";
import AppPicker from "../components/AppPicker";
import { AppForm, AppFormField, AppSubmitButton } from "../components/forms";

const validationSchema = Yup.object().shape({
  title: Yup.string().required().label("Name"),
  price: Yup.string().required().email().label("Email"),
  category: Yup.string().required().label("Category"),
  description: Yup.string().required().label("Description"),
});

export default function RegisterScreen() {
  return (
    <AppScreen style={styles.container}>
      <AppForm
        initialValues={{ name: "", email: "", password: "" }}
        onSubmit={({ name, email, category, password }) => console.log()}
        validationSchema={validationSchema}
      >
        <AppFormField
          autoCapitalize="words"
          autoCorrect={false}
          name="name"
          placeholder="Title"
          textContentType="username"
        />
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          inputMode="email"
          name="price"
          placeholder="Price"
          textContentType="emailAddress"
        />
        <AppPicker placeholder="Category" />
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          name="description"
          placeholder="Description"
          secureTextEntry
          textContentType="password"
        />
        <AppSubmitButton style={styles.button} title="Post" />
      </AppForm>
    </AppScreen>
  );
}

const styles = StyleSheet.create({
  button: {
    marginTop: 10,
  },
  container: {
    padding: 10,
  },
});
