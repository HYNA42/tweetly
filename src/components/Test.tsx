import { StyleSheet, Text, View } from "react-native";
import { Colors } from "@/src/constants/Colors";

const Test = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.test}>Ceci est un Test</Text>
    </View>
  );
};
export default Test;

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
