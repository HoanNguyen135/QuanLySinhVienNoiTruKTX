import React, { useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { COLORS } from "../contains";
import MyTabs from ".";
import { ListRegisterDormScreen } from "../Screen";
import AuthStackScreen from "./AuthNavigation";
import { useSelector } from "react-redux";
import ListUserStackScreen from "./ListUserNavigation";
import AreaStackScreen from "./AreaNavigation";
import ApplicationStackScreen from "./ApplicationNavigation";
import ViolationStackScreen from "./ViolationNavigation";
import ElecAndWaterStackScreen from "./ElecAndWaterNavigation";
import ListInfrastructureStackScreen from "./ListInfrastructureNavigation";
import RepairStackScreen from "./RepairNavigation";
import PriceElectricAndWaterStackScreen from "./PriceElectricAndWater";
import ManageNumberScreen from "./ManageNumberNavigation";

const TabStack = createNativeStackNavigator();

const TabStackScreen = () => {
  const user = useSelector((states) => states.User.user);

  if (user[0]?.ChucVu !== "Sinh viên" && user.length > 0) {
    return (
      <TabStack.Navigator
        screenOptions={{
          headerTintColor: COLORS.white,
          headerTitleStyle: {
            fontSize: 30,
          },
          headerStyle: {
            height: 120,
            backgroundColor: COLORS.logo,
          },
        }}
      >
        <TabStack.Screen
          name="MyTabs"
          component={MyTabs}
          options={{ headerShown: false }}
        />
        <TabStack.Screen
          name="ListUser"
          component={ListUserStackScreen}
          options={{ headerShown: false }}
        />
        <TabStack.Screen
          name="AreaStackScreen"
          component={AreaStackScreen}
          options={{ headerShown: false }}
        />
         <TabStack.Screen
          name="ManageNumberScreen"
          component={ManageNumberScreen}
          options={{ headerShown: false }}
        />
        <TabStack.Screen
          name="ListInfrastructure"
          component={ListInfrastructureStackScreen}
          options={{ headerShown: false }}
        />
        <TabStack.Screen
          name="ViolationStackScreen"
          component={ViolationStackScreen}
          options={{ headerShown: false }}
        />
        <TabStack.Screen
          name="RepairStackScreen"
          component={RepairStackScreen}
          options={{ headerShown: false }}
        />
        <TabStack.Screen
          name="ApplicationStackScreen"
          component={ApplicationStackScreen}
          options={{ headerShown: false }}
        />
        <TabStack.Screen
          name="ElecAndWaterStackScreen"
          component={ElecAndWaterStackScreen}
          options={{ headerShown: false }}
        />
        <TabStack.Screen
          name="ListRegisterDorm"
          component={ListRegisterDormScreen}
          options={{ title: "Danh sách đơn nội trú" }}
        />
        <TabStack.Screen
          name="PriceElectricAndWaterStackScreen"
          component={PriceElectricAndWaterStackScreen}
          options={{ headerShown: false }}
        />
      </TabStack.Navigator>
    );
  } else if (user[0]?.ChucVu == "Sinh viên" && user.length > 0) {
    return (
      <TabStack.Navigator
        screenOptions={{
          headerTintColor: COLORS.white,
          headerTitleStyle: {
            fontSize: 30,
          },
          headerStyle: {
            height: 120,
            backgroundColor: COLORS.logo,
          },
        }}
      >
        <TabStack.Screen
          name="MyTabs"
          component={MyTabs}
          options={{ headerShown: false }}
        />
      </TabStack.Navigator>
    );
  } else {
    return <AuthStackScreen />;
  }

  // return (
  //   user.length>0 ? (<TabStack.Navigator
  //     screenOptions={{
  //       headerTintColor: COLORS.white,
  //       headerTitleStyle: {
  //         fontSize: 30,
  //       },
  //       headerStyle: {
  //         height: 120,
  //         backgroundColor: COLORS.logo,
  //       },
  //     }}
  //   >
  //     <TabStack.Screen name="MyTabs" component={MyTabs} options={{headerShown: false}}/>
  //     <TabStack.Screen name="ListUser" component={ListUserStackScreen} options={{headerShown: false}}/>
  //     <TabStack.Screen name="AreaStackScreen" component={AreaStackScreen} options={{headerShown: false}}/>
  //     <TabStack.Screen name="ListRegisterDorm" component={ListRegisterDormScreen} options={{title: 'Danh sách đơn nội trú'}}/>
  //   </TabStack.Navigator>
  // ): (
  //   <AuthStackScreen/>
  // )
  // );
};

export default TabStackScreen;
