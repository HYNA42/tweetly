import { StyleSheet, Text, View } from "react-native";
import { Colors } from "../constants/Colors";

export default function TestScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.test}>Ceci est un Test </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "red",
  },
  test: {
    color: Colors.white,
    textAlign: "center",
  },
});
