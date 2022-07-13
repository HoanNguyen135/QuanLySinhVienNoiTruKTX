import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from '@expo/vector-icons';
import HomeStackScreen from "./HomeStackScreen";
import FavouriteStackScreen from "./FavouriteStackScreen";


const Tab = createBottomTabNavigator();

const MyNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = focused
              ? "home"
              : "home-outline";
          } else if (route.name === "Favourite") {
            iconName = focused ? "heart-circle" : "heart-circle-outline";
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "tomato",
        tabBarInactiveTintColor: "gray",
        headerShown: false,
        tabBarStyle:{
          position: 'absolute',
          borderTopRightRadius: 20,
          borderTopLeftRadius: 20
        }
      })}
    >
      <Tab.Screen name="Home" component={HomeStackScreen} />
      <Tab.Screen name="Favourite" component={FavouriteStackScreen} />
    </Tab.Navigator>
  );
};

export default MyNavigation;
