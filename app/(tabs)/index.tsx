import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageSourcePropType,
  ScrollView,
} from "react-native";
import initialTweets from "../../constants/TweetsList";

import Tweet from "@/components/Tweet";
import { Colors } from "@/constants/Colors";
import TweetBox from "@/components/TweetBox";
import { useState } from "react";
import { format } from "date-fns";

type TweeProps = {
  id: number;
  date: string;
  username: string;
  tweet: string;
  avatar: ImageSourcePropType;
};

export default function HomeScreen() {
  const [tweets, setTweets] = useState<TweeProps[]>(initialTweets);
  const addTweet = (newTweet: TweeProps) => {
    setTweets([newTweet, ...tweets]);
  };
  return (
    <View style={styles.container}>
      <TweetBox addTweet={addTweet} />
      <ScrollView contentContainerStyle={styles.scrolltweets}>
        {tweets.map((tweet) => (
          <Tweet key={tweet.id} {...tweet} />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: Colors.grey,
  },
  scrolltweets: {
    paddingBottom: 16,
  },
});
