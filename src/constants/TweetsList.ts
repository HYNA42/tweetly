import { ImageSourcePropType } from "react-native";
import uuid from "react-native-uuid";

type TweetsListProps = {
  id: string;
  date: string;
  username: string;
  tweet: string;
  avatar: ImageSourcePropType;
};

const TweetsList: TweetsListProps[] = [
  {
    id: uuid.v4() as string,
    date: "26/01/2025",
    username: "Elephorm",
    tweet: "Bienvenu sur le sur le site de React Native avec Guillaume ",
    avatar: require("../../assets/logos/elephorm.png"),
  },

  {
    id: uuid.v4() as string,
    date: "26/01/2020",
    username: "Clubic",
    tweet: "Les magasins sans caisse autmatiques amazon débarquent en France ",
    avatar: require("../../assets/logos/clubic.jpg"),
  },
  {
    id: uuid.v4() as string,
    date: "26/01/2014",
    username: "Facebook",
    tweet: "Faacenbook est aussi sur twitter ",
    avatar: require("../../assets/logos/facebook.png"),
  },
  {
    id: uuid.v4() as string,
    date: "26/01/2023",
    username: "Twitter",
    tweet: "Ceci est votre premier tweet",
    avatar: require("../../assets/logos/twitter.jpg"),
  },
];

export default TweetsList;
