import WelcomeScreen from "./app/screens/WelcomeScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";

export default function App() {
  // return <WelcomeScreen />;
  return <ViewImageScreen />;
}
// import {
//   Button,
//   Image,
//   ImageBackground,
//   StyleSheet,
//   Text,
//   View,
// } from "react-native";

// export default function App() {
//   return (
//     <ImageBackground
//       source={require("./assets/background.jpg")}
//       resizeMode="cover"
//       style={styles.image}
//     >
//       <View style={styles.logoContainer}>
//         <Image source={require("./assets/logo-red.png")} style={styles.logo} />
//         <Text>Sell What You Don't Need</Text>
//       </View>
//       <View style={styles.buttonContainer}>
//         <View style={styles.bar}></View>
//         <View style={[styles.bar, { backgroundColor: "#4ECDC4" }]}></View>
//       </View>
//     </ImageBackground>
//   );
// }

// const styles = StyleSheet.create({
//   bar: {
//     height: 60,
//     backgroundColor: "#fc5c65",
//   },
//   buttonContainer: {
//     width: "100%",
//     height: 120,
//     position: "absolute",
//     bottom: 0,
//   },
//   image: {
//     flex: 1,
//     alignItems: "center",
//   },
//   logo: {
//     width: 100,
//     height: 100,
//   },
//   logoContainer: {
//     flex: 1,
//     alignItems: "center",
//     top: 100,
//   },
// });
