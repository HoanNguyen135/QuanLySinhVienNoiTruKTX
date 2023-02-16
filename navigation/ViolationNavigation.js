import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { COLORS } from "../contains";
import {
  AreaViolationScreen,
  RoomViolationScreen,
  ListViolationInRoom,
  InfoViolation,
  AddViolationScreen
} from "../Screen";

const ViolationStack = createNativeStackNavigator();

const ViolationStackScreen = () => {
  return (
    <ViolationStack.Navigator
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
      <ViolationStack.Screen
        name="AreaViolationScreen"
        component={AreaViolationScreen}
        options={{ title: "Danh sách các khu" }}
      />
      <ViolationStack.Screen
        name="RoomViolationScreen"
        component={RoomViolationScreen}
        options={{ title: "Danh sách phòng" }}
      />
      <ViolationStack.Screen
        name="ListViolationInRoomScreen"
        component={ListViolationInRoom}
        options={{ title: "Danh sách vi phạm" }}
      />
      <ViolationStack.Screen
        name="InfoViolationScreen"
        component={InfoViolation}
        options={{ title: "Chi tiết vi phạm" }}
      />
      <ViolationStack.Screen
        name="AddViolationScreen"
        component={AddViolationScreen}
        options={{ title: "Thêm vi phạm" }}
      />
      {/* <ViolationStack.Screen name="AddStudentInRoomScreen" component={AddStudentInRoomScreen} options={{title: 'Thêm sinh viên'}}/>
      <ViolationStack.Screen name="ListStudentInRoomScreen" component={ListStudentInRoom} options={{title: 'Danh sách sinh viên'}}/> */}
      {/* <ViolationStack.Screen name="UpdateInfoStudentScreen" component={UpdateInfoStudent} options={{title: 'Thông tin sinh viên'}}/>
      <ViolationStack.Screen name="InfoStudentScreen" component={InfoStudent} options={{title: "Thông tin sinh viên"}}/> */}
    </ViolationStack.Navigator>
  );
};

export default ViolationStackScreen;
