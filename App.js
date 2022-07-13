import { StatusBar } from "expo-status-bar";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import MyNavigation from "./navigation";
import { createDrawerNavigator } from "@react-navigation/drawer";
import SettingStackScreen from "./navigation/SettingStackScreen";
import { DrawerScreen } from "./Screen";
import TabStackScreen from "./navigation/TabStackScreen";

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <>
      <StatusBar hidden={true} />
      <NavigationContainer>
        <Drawer.Navigator
          initialRouteName="Home"
          screenOptions={{ headerShown: false }}
          drawerContent={(props)=><DrawerScreen {...props}/>}
        >
          <Drawer.Screen name="Navigation" component={TabStackScreen} />
          <Drawer.Screen name="Setting" component={SettingStackScreen} />
        </Drawer.Navigator>
      </NavigationContainer>
    </>
  );
}
