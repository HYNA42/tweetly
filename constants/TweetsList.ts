type TweetsListProps = {
  id: number;
  date: string;
  username: string;
  tweet: string;
  avatar: string;
};

const TweetsList : TweetsListProps[] = [
  {
    id: 0,
    date: "26/01/2025",
    username: "Elephorm",
    tweet: "Bienvenu sur le sur le site de React Native avec Guillaume ",
    avatar: require("../assets/logos/elephorm.png"),
  },

  {
    id: 1,
    date: "26/01/2020",
    username: "Clubic",
    tweet: "Les magasins sans caisse autmatiques amazon débarquent en France ",
    avatar: require("../assets/logos/clubic.jpg"),
  },
  {
    id: 2,
    date: "26/01/2014",
    username: "Facebook",
    tweet: "Faacenbook est aussi sur twitter ",
    avatar: require("../assets/logos/facebook.png"),
  },
  {
    id: 3,
    date: "26/01/2023",
    username: "Twitter",
    tweet: "Ceci est votre premier tweet",
    avatar: require("../assets/logos/twitter.jpg"),
  },
];

export default TweetsList;
