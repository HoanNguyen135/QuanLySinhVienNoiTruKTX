import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { COLORS } from "../contains";
import { AddFloor,AddInfrastructureInRoom,InfoInfrastructureInRoom,ListInfrastructureInRoom,InfoRoomScreen,CreateRoomScreen,Rooms,ListStudentInRoom,InfoStudent,AreaScreen,InfoAreaScreen,CreateAreaScreen,UpdateInfoStudent,AddStudentInRoomScreen } from "../Screen";

const AreaStack = createNativeStackNavigator();

const AreaStackScreen = () => {
  return (
    <AreaStack.Navigator
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
      <AreaStack.Screen name="AreaScreen" component={AreaScreen} options={{title: 'Danh sách các khu'}}/>
      <AreaStack.Screen name="InfoAreaScreen" component={InfoAreaScreen} options={{title: 'Thông tin khu'}}/>
      <AreaStack.Screen name="CreateRoomScreen" component={CreateRoomScreen} options={{title: 'Thêm phòng mới'}}/>
      <AreaStack.Screen name="AddInfrastructureInRoom" component={AddInfrastructureInRoom} options={{title: 'Thêm cơ sở vật chất'}}/>
      <AreaStack.Screen name="CreateAreaScreen" component={CreateAreaScreen} options={{title: 'Thêm khu mới'}}/>
      <AreaStack.Screen name="RoomScreen" component={Rooms} options={{title: 'Danh sách phòng'}}/>
      <AreaStack.Screen name="InfoRoomScreen" component={InfoRoomScreen} options={{title: 'Chi tiết phòng'}}/>
      <AreaStack.Screen name="InfoInfrastructureInRoom" component={InfoInfrastructureInRoom} options={{title: 'Chi tiết thông tin'}}/>
      <AreaStack.Screen name="AddStudentInRoomScreen" component={AddStudentInRoomScreen} options={{title: 'Thêm sinh viên'}}/>
      <AreaStack.Screen name="AddFloor" component={AddFloor} options={{title: 'Thêm tầng'}}/>
      <AreaStack.Screen name="ListStudentInRoomScreen" component={ListStudentInRoom} options={{title: 'Danh sách sinh viên'}}/>
      <AreaStack.Screen name="UpdateInfoStudentScreen" component={UpdateInfoStudent} options={{title: 'Thông tin sinh viên'}}/>
      <AreaStack.Screen name="InfoStudentScreen" component={InfoStudent} options={{title: "Thông tin sinh viên"}}/>
      <AreaStack.Screen name="ListInfrastructureInRoom" component={ListInfrastructureInRoom} options={{title: 'Cơ sở vật chất'}}/>
    </AreaStack.Navigator>
  );
};

export default AreaStackScreen;
