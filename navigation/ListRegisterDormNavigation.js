import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { COLORS } from "../contains";
import { ListRegisterDormScreen } from "../Screen";

const ListRegisStack = createNativeStackNavigator();

const ListRegisterStackScreen = () => {
  return (
    <ListRegisStack.Navigator
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
      <ListRegisStack.Screen name="ListRegisterDormScreen" component={ListRegisterDormScreen} options={{title: 'Danh sách đơn đăng ký'}}/>
    </ListRegisStack.Navigator>
  );
};

export default ListRegisterStackScreen;
