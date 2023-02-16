import React, { useEffect, useState } from "react";
import { Switch, Text, View, TouchableOpacity } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { COLORS } from "../contains";
import HomeStackScreen from "./HomeNavigation";
import AreaStackScreen from "./AreaNavigation";
import SearchStackScreen from "./SearchNavigation";
import StudentStackScreen from "./StudentNavigation";
import { useSelector } from "react-redux";

const Tab = createBottomTabNavigator();

const MyTabs = () => {
  const user = useSelector((states) => states.User.user);
  if (user[0]?.ChucVu != "Sinh viên") {
    return (
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            switch (route.name) {
              case "Home": {
                iconName = focused ? "home" : "home-outline";
                return <Ionicons name={iconName} size={size} color={color} />;
              }
              case "SearchStack": {
                iconName = focused ? "ios-search-outline" : "ios-search";
                return <Ionicons name={iconName} size={size} color={color} />;
              }
              case "WaterAndElectric": {
                iconName = focused ? "water-outline" : "water";
                return <Ionicons name={iconName} size={size} color={color} />;
              }
              case "Area": {
                iconName = focused ? "door-open" : "door-sliding";
                return (
                  <MaterialCommunityIcons
                    name={iconName}
                    size={size}
                    color={color}
                  />
                );
              }
            }
          },
          tabBarActiveTintColor: COLORS.white,
          tabBarInactiveTintColor: "black",
          tabBarStyle: {
            backgroundColor: COLORS.logo,
            paddingBottom: 10,
            height: 65,
          },
          tabBarLabelStyle: {
            fontSize: 13,
          },
          headerShown: false,
        })}
      >
        <Tab.Screen
          name="Home"
          component={HomeStackScreen}
          options={{ title: "Trang chủ" }}
        />
        <Tab.Screen
          name="SearchStack"
          component={SearchStackScreen}
          options={{ title: "Tìm kiếm" }}
        />
        <Tab.Screen
          name="Area"
          component={AreaStackScreen}
          options={{ title: "Khu vực" }}
        />
      </Tab.Navigator>
    );
  } else {
    return (
      <StudentStackScreen/>
    );
  }
};

export default MyTabs;
