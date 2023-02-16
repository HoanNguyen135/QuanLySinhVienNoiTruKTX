import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { COLORS } from "../contains";
import { FilterScreen } from "../Screen";

const FilterStack = createNativeStackNavigator();

const FilterStackScreen = () => {
  return (
    <FilterStack.Navigator
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
      <FilterStack.Screen name="FilterScreen" component={FilterScreen} options={{headerShown: false}}/>
    </FilterStack.Navigator>
  );
};

export default FilterStackScreen;
