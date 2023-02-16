import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { COLORS } from "../contains";
import { HomeScreen,InfoStudent,AreaScreen } from "../Screen";
import { View, TouchableOpacity, Text } from "react-native";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const HomeStack = createNativeStackNavigator();

const Header = () => {
  const navigation = useNavigation();

  const handleClick = () => {
    navigation.openDrawer();
  };

  return (
    <View
      style={{
        width: "100%",
        height: 90,
        backgroundColor: COLORS.logo,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <TouchableOpacity
        onPress={handleClick}
        style={{ top: 27, alignSelf: "flex-start", position: "relative" }}
      >
        <Feather name="menu" size={24} color={"white"} />
      </TouchableOpacity>
      <Text style={{ alignSelf: "center", fontSize: 25, color: COLORS.white }}>
        KÍ TÚC XÁ TLU
      </Text>
    </View>
  );
};

const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator
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
      <HomeStack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ header: () => <Header /> }}
      />
      <HomeStack.Screen name="InfoStudentScreen" component={InfoStudent} />
    </HomeStack.Navigator>
  );
};

export default HomeStackScreen;
