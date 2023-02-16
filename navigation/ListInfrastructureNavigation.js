import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { COLORS } from "../contains";
import {
  ListInfrastructureScreen,
  AddInfrastructureScreen,
  InfoInfrastructureScreen,
} from "../Screen";
import { Text } from "react-native";

const Stack = createNativeStackNavigator();

const ListInfrastructureStackScreen = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTintColor: COLORS.white,
        headerStyle: {
          height: 120,
          backgroundColor: COLORS.logo,
        },
        headerTitleStyle: {
          fontSize: 25,
        },
        headerTitleAlign: "center",
      }}
    >
      <Stack.Screen
        name="ListInfrastructureScreen"
        component={ListInfrastructureScreen}
        options={{ title: "Danh sách cơ sở vật chất" }}
      />
      <Stack.Screen
        name="AddInfrastructureScreen"
        component={AddInfrastructureScreen}
        options={{ title: "Thêm cơ sở vật chất" }}
      />
      <Stack.Screen
        name="InfoInfrastructureScreen"
        component={InfoInfrastructureScreen}
        options={{ title: "Chi tiết thông tin" }}
      />
    </Stack.Navigator>
  );
};

export default ListInfrastructureStackScreen;
