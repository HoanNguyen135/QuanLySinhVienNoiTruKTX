import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { COLORS } from "../contains";
import { ManageNumber } from "../Screen";
import { Text } from "react-native";

const Stack = createNativeStackNavigator();

const ManageNumberScreen = () => {
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
        name="ManageNumber"
        component={ManageNumber}
        options={{ title: "Thống kê" }}
      />
    </Stack.Navigator>
  );
};

export default ManageNumberScreen;
