import { Button, StyleSheet, Text, View } from "react-native";
import { Colors } from "../constants/Colors";
import { clearStorage } from "../hooks/storage";

export default function TestScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.test}>Ceci est un Test ww</Text>
   
        <Button
          title="Supprimer Tous les tweet"
          onPress={async () => {
            await clearStorage();
          }}
        />

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
