import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {ListUserScreen,InfoUserScreen,AddUserScreen,ManagePermission,InfoUserManage,AddUserManage} from '../Screen'
import { COLORS } from '../contains';
const Stack = createNativeStackNavigator();


function ListUserStackScreen() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTintColor: COLORS.white,
        headerStyle: {
          height: 120,
          backgroundColor: COLORS.logo,
        },
        headerTitleStyle: {
          fontSize: 21,
        },
        headerTitleAlign: "center",
      }}
    >
      <Stack.Screen name="ListUserScreen" component={ ListUserScreen } options={{title: 'Quản lý tài khoản'}}/>
      <Stack.Screen name="AddUserScreen" component={ AddUserScreen } options={{title: 'Thêm tài khoản'}}/>
      <Stack.Screen name="AddUserManage" component={ AddUserManage } options={{title: 'Thêm người quản lý khu vực'}}/>
      <Stack.Screen name="InfoUserManage" component={ InfoUserManage } options={{title: 'Thông tin người quản lý'}}/>
      <Stack.Screen name="ManagePermission" component={ ManagePermission } options={{title: 'Phân công người quản lý khu vực'}}/>
      <Stack.Screen name="InfoUserScreen" component={ InfoUserScreen } options={{title: 'Thông tin chi tiết'}}/>
    </Stack.Navigator>
  );
}

export default ListUserStackScreen;