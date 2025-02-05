import AsyncStorage from "@react-native-async-storage/async-storage";

import TweetsList from "../constants/TweetsList";

export const getAllTweetsFromStorage = async () => {
  try {
    const value = await AsyncStorage.getItem("tweets");
    if (!value) return TweetsList;
    return JSON.parse(value);
  } catch (err) {
    console.error("Async storage Error", err);
  }
};

export const updateTweetsInLocalStorage = async (tweet: any) => {
  try {
    const oldTweets = await getAllTweetsFromStorage();
    const newTweets = [tweet, ...oldTweets];
    return AsyncStorage.setItem("tweets", JSON.stringify(newTweets));
  } catch (err) {
    console.error("Async storage Error", err);
  }
};

export const clearStorage = async () => {
  try {
    await AsyncStorage.removeItem("tweets"); // 🟢 Supprime les tweets du stockage local
    console.log("AsyncStorage cleared!");
  } catch (err) {
    console.error("Error clearing AsyncStorage:", err);
  }
};
