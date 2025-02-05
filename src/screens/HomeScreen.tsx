import {
  View,
  StyleSheet,
  ImageSourcePropType,
  ScrollView,
} from "react-native";

import Tweet from "@/src/components/Tweet";
import { Colors } from "@/src/constants/Colors";
import TweetBox from "@/src/components/TweetBox";
import { useEffect, useState } from "react";
import {
  getAllTweetsFromStorage,
  updateTweetsInLocalStorage,
} from "../hooks/storage";

import uuid from "react-native-uuid";

type TweeProps = {
  id: string;
  date: string;
  username: string;
  tweet: string;
  avatar: ImageSourcePropType;
};

export default function HomeScreen() {
  const [tweets, setTweets] = useState<TweeProps[]>([]);

  // 🟢 Charger les tweets stockés au démarrage
  useEffect(() => {
    const fetchData = async () => {
      const storedTweets = await getAllTweetsFromStorage();
      if (storedTweets) setTweets(storedTweets);
      console.log("tweets", tweets);
    };
    fetchData();
  }, []);

  // 🟢 Ajouter un tweet et le sauvegarder dans AsyncStorage

  const addTweet = async (newTweet: TweeProps) => {
    const tweetWithid = { ...newTweet, id: uuid.v4() as string };
    const updateTweet = [tweetWithid, ...tweets];
    setTweets(updateTweet);
    await updateTweetsInLocalStorage(newTweet);
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
