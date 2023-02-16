import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { COLORS } from "../contains";
import {
  HomeStudentScreen,
  RegisterInDorm,
  RegisterOfStudent,
  InfoApplicationScreen,
  ProfileStudent,
  AddProfileStudent,
  RepairOfStudent,
  AddRepairOfStudent,
  ViolationOfStudent
} from "../Screen";
import { useNavigation } from "@react-navigation/native";
import { View, TouchableOpacity, Text } from "react-native";
import { Feather } from "@expo/vector-icons";
const StudentStack = createNativeStackNavigator();

const StudentStackScreen = () => {
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
        <Text
          style={{ alignSelf: "center", fontSize: 25, color: COLORS.white }}
        >
          KÍ TÚC XÁ TLU
        </Text>
      </View>
    );
  };

  return (
    <StudentStack.Navigator
      screenOptions={{
        headerTintColor: COLORS.white,
        headerStyle: {
          height: 120,
          backgroundColor: COLORS.logo,
        },
        headerTitleStyle: {
          fontSize: 27,
        },
        headerTitleAlign: "center",
      }}
    >
      <StudentStack.Screen
        name="HomeStudentScreen"
        component={HomeStudentScreen}
        options={{ header: () => <Header /> }}
      />
      <StudentStack.Screen
        name="RegisterOfStudent"
        component={RegisterOfStudent}
        options={{ title: "Đơn đăng ký nội trú" }}
      />
      
      <StudentStack.Screen
        name="ProfileStudent"
        component={ProfileStudent}
        options={{ title: "Hồ sơ sinh viên" }}
      />
       <StudentStack.Screen
        name="ViolationOfStudent"
        component={ViolationOfStudent}
        options={{ title: "Danh sách vi phạm" }}
      />
      <StudentStack.Screen
        name="RegisterInDormScreen"
        component={RegisterInDorm}
        options={{ title: "Đơn đăng ký nội trú" }}
      />
       <StudentStack.Screen
        name="AddProfileStudent"
        component={AddProfileStudent}
        options={{ title: "Cập nhật hồ sơ sinh viên" }}
      />
       <StudentStack.Screen
        name="AddRepairOfStudent"
        component={AddRepairOfStudent}
        options={{ title: "Báo sửa chữa" }}
      />
      <StudentStack.Screen
        name="RepairOfStudent"
        component={RepairOfStudent}
        options={{ title: "Sửa chữa" }}
      />
      <StudentStack.Screen
        name="InfoApplicationScreen"
        component={InfoApplicationScreen}
        options={{ title: "Chi tiết đơn đăng ký" }}
      />
    </StudentStack.Navigator>
  );
};

export default StudentStackScreen;
