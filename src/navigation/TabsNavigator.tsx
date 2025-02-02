import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import TestScreen from "../screens/TestScreen";
// import { Icon } from "@rneui/themed";
import { Icon } from "react-native-elements";
import Colors from "../constants/Colors";

const Tab = createBottomTabNavigator();

export default function TabsNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: Colors.primary, //couleur de l'onglet actif
        tabBarInactiveTintColor: Colors.black, //couleur de l'onglet inactif
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="language" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Account"
        component={TestScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="person" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
