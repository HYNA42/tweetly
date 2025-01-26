import { View, Text, StyleSheet, Image } from "react-native";

type TweeProps = {
  id: number;
  date: string;
  username: string;
  tweet: string;
  avatar: string;
};

const Tweet = ({ date, tweet, username, avatar }: TweeProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.meta}>
        <Text style={styles.date}>{date}</Text>
        <Text style={styles.tweet}>{tweet}</Text>
        <Text style={styles.date}>{username}</Text>
        <Text style={styles.date}>{avatar}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {}, //Tweet
  meta: {}, //Meta
  date: {},
  tweet: {},
  username: {},
  avatar: {},
});

export default Tweet;
