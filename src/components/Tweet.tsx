import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageSourcePropType,
} from "react-native";
import { Colors } from "@/src/constants/Colors";

type TweeProps = {
  date: string;
  username: string;
  tweet: string;
  avatar: ImageSourcePropType;
};

const Tweet = ({ date, tweet, username, avatar }: TweeProps) => {
  return (
    <View style={styles.tweetContainer}>
      <View style={styles.left}>
        <Image source={avatar} style={styles.avatar} />
      </View>

      <View style={styles.right}>
        <View style={styles.top}>
          <Text style={styles.date}>{date}</Text>
          <Text style={styles.username}>@{username}</Text>
        </View>
        <View style={styles.bottom}>
          <Text style={styles.tweet}>{tweet}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  tweetContainer: {
    flexDirection: "row",
    backgroundColor: Colors.white,
    borderWidth: 0.5,
    borderColor: Colors.blue,
    marginBottom: 4,
    padding: 4,
  }, //Tweet
  // meta: {}, //Meta informations
  left: {
    // borderWidth: 2,
    // borderColor: "red",
  },
  avatar: {
    width: 50,
    height: 50,
  },
  right: {
    flex: 1,
    paddingLeft: 8,
    // borderWidth: 2,
    // borderColor: "green",
  },
  top: { flexDirection: "row" },
  bottom: {},
  date: { marginRight: 10 },
  username: {
    color: Colors.primary,
  },
  tweet: {
    fontWeight: "bold",
  },
});

export default Tweet;
