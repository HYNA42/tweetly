import { View, Text, StyleSheet,Image } from "react-native";
import tweets from "../../constants/TweetsList";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text>{tweets[0].username}</Text>
      <Text>{tweets[0].tweet}</Text>
      <Text>{tweets[0].id}</Text>
      <Image source={tweets[0].avatar } style={{width:50, height:50}} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    // alignItems: "center",
    backgroundColor: "#FFD042",
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    // color: "red",
  },
});
