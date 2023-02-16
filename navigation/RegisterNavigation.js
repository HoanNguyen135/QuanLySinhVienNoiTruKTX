import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { COLORS } from "../contains";
import { ListRepairScreen, AddRepairScreen } from "../Screen";

const RegisterInDormStack = createNativeStackNavigator();

const RegisterInDormStackScreen = () => {
  return (
    <RegisterInDormStack.Navigator
      screenOptions={{
        headerTintColor: COLORS.white,
        headerStyle: {
          height: 120,
          backgroundColor: COLORS.logo,
        },
        headerTitleStyle: {
          fontSize: 30,
        },
        headerTitleAlign: "center",
      }}
    >
      <RegisterInDormStack.Screen
        name="ListRepairScreen"
        component={ListRepairScreen}
        options={{ title: "Danh sách sửa chữa" }}
      />
      <RegisterInDormStack.Screen
        name="AddRepairScreen"
        component={AddRepairScreen}
        options={{ title: "Thêm sửa chữa" }}
      />
    </RegisterInDormStack.Navigator>
  );
};

export default RegisterInDormStackScreen;
