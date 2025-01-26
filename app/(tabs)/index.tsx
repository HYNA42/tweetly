import { View, Text, StyleSheet, Image } from "react-native";
import tweets from "../../constants/TweetsList";

import Tweet from "@/components/Tweet";
import { Colors } from "@/constants/Colors";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Tweet
        date={tweets[0].date}
        avatar={tweets[0].avatar}
        tweet={tweets[0].tweet}
        username={tweets[0].username}
      />

      <Tweet
        date={tweets[1].date}
        avatar={tweets[1].avatar}
        tweet={tweets[1].tweet}
        username={tweets[1].username}
      />

      <Tweet
        date={tweets[2].date}
        avatar={tweets[2].avatar}
        tweet={tweets[2].tweet}
        username={tweets[2].username}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    // alignItems: "center",
    backgroundColor: Colors.lightblue,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    // color: "red",
  },
});
