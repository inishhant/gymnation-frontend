import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from "react-native";
import { GymNation } from "./screens/login.js";

export default function App() {
  
  return <View style={styles.container}><GymNation /></View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
  },
});
