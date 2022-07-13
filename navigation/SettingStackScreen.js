import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SettingScreen } from "../Screen";
import { IconHeader } from "../component";

const SettingStack = createNativeStackNavigator();

const SettingStackScreen = () => {
  return (
    <SettingStack.Navigator>
      <SettingStack.Screen
        name="SettingStackScreen"
        component={SettingScreen}
        options={{ title: "Cài đặt" }}
      />
    </SettingStack.Navigator>
  );
};

export default SettingStackScreen;
