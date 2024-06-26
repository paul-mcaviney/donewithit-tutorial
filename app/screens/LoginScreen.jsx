import { Image, StyleSheet } from "react-native";
import * as Yup from "yup";

import AppScreen from "../components/AppScreen";
import { AppForm, AppFormField, AppSubmitButton } from "../components/forms";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

export default function LoginScreen() {
  return (
    <AppScreen style={styles.container}>
      <Image style={styles.logo} source={require("../assets/logo-red.png")} />
      <AppForm
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="email"
          inputMode="email"
          name="email"
          placeholder="Email"
          textContentType="emailAddress"
        />
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="lock"
          name="password"
          placeholder="Password"
          secureTextEntry
          textContentType="password"
        />
        <AppSubmitButton style={styles.button} title="Login" />
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
  logo: {
    alignSelf: "center",
    height: 90,
    marginBottom: 20,
    marginTop: 50,
    width: 90,
  },
});
