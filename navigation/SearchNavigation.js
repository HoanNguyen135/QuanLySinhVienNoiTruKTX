import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { COLORS } from "../contains";
import { SearchScreen, ResultSearch, InfoViolation,InfoStudent,UpdateInfoStudent,InfoApplicationScreen,InfoUserSearchScreen } from "../Screen";
import { HeaderComponent } from "../component";

const SearchStack = createNativeStackNavigator();

const SearchStackScreen = () => {
  return (
    <SearchStack.Navigator
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
      <SearchStack.Screen
        name="SearchScreen"
        component={SearchScreen}
        options={{ title: "Danh mục tìm kiếm" }}
      />
      <SearchStack.Screen
        name="ResultSearch"
        component={ResultSearch}
        options={{ headerShown: false }}
      />
      <SearchStack.Screen
        name="InfoViolationScreen"
        component={InfoViolation}
        options={{ title: "Chi tiết vi phạm" }}
      />
      <SearchStack.Screen name="InfoStudentScreen" component={InfoStudent} options={{title: "Thông tin sinh viên"}}/>
      <SearchStack.Screen name="UpdateInfoStudentScreen" component={UpdateInfoStudent} options={{title: 'Thông tin sinh viên'}}/>
      <SearchStack.Screen name="InfoApplicationScreen" component={InfoApplicationScreen} options={{title: 'Chi tiết đơn đăng ký'}} />
      <SearchStack.Screen name="InfoUserSearchScreen" component={ InfoUserSearchScreen } options={{title: 'Thông tin chi tiết'}}/>
    </SearchStack.Navigator>
  );
};

export default SearchStackScreen;
