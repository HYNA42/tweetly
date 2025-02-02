import { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  Keyboard,
  TouchableOpacity,
} from "react-native";
import { Colors } from "@/src/constants/Colors";
import { format } from "date-fns";
import { Icon } from "react-native-elements";

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
      <Text> {value.length} / 140 </Text>
      <TextInput
        editable
        maxLength={140} //140
        numberOfLines={4}
        onChangeText={(text) => onChangeText(text)}
        value={value}
        style={styles.textInput}
        placeholder="Ajouter un nouveau tweet ...."
      />
      <TouchableOpacity onPress={handleAddTweet}>
        <View style={styles.addTweetBtnBloc}>
          <Icon name="add-circle" color={Colors.white} size={30} />
          <Text style={styles.adTweetText}>Envoyer</Text>
        </View>
      </TouchableOpacity>
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
  addTweetBtnBloc: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.primary,
    borderRadius: 8,
    marginTop: 4,
    paddingVertical: 4,
  },
  adTweetText: {
    color: Colors.white,
    fontSize: 15,
    marginLeft: 5,
  },
  textInput: {
    height: 45,
    borderWidth: 1,
    borderColor: Colors.primary,
    borderRadius: 5,
    padding: 8,
    backgroundColor: Colors.white,
  },
});
