import { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  Keyboard,
} from "react-native";
import { Colors } from "@/src/constants/Colors";
import { format } from "date-fns";

const TweetBox = ({ addTweet }: any) => {
  const [value, onChangeText] = useState<string>("");
  const handleAddTweet = async () => {
    const newTweet = {
      id: Date.now(),
      date: format(new Date(), "dd/MM/yyyy"),
      // date: format(new Date(), "yyyy-MM-dd"),
      username: "Hyna",
      tweet: value,
      avatar: require("../../assets/logos/default.jpg"),
    };

    await addTweet(newTweet);
    onChangeText("");
    Keyboard.dismiss(); // Réinitialise le champ
  };
  return (
    <View style={styles.tweetbox}>
      <Text style={styles.count}> {value.length} / 140 </Text>
      <TextInput
        editable
        maxLength={140} //140
        numberOfLines={4}
        onChangeText={(text) => onChangeText(text)}
        value={value}
        style={styles.textInput}
      />
      <Button
        onPress={handleAddTweet}
        title="Ajouter un nouveau tweet"
        color={Colors.primary}
        accessibilityLabel="Learn more about this purple button"
      />
    </View>
  );
};

export default TweetBox;

const styles = StyleSheet.create({
  tweetbox: {
    marginBottom: 15,
    paddingLeft: 8,
    paddingRight: 8,
  },
  count: {},
  textInput: {
    height: 45,
    borderWidth: 1,
    borderColor: Colors.primary,
    borderRadius: 5,
    padding: 8,
    backgroundColor: Colors.white,
  },
});
