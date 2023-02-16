import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { COLORS } from '../contains';
import { InfoWaterScreen,WaterAndElectric,AreaElectricAndWaterScreen,InfoElectricScreen,AddElectricAndWaterScreen } from '../Screen';

const ElecAndWaterStack = createNativeStackNavigator();

const ElecAndWaterStackScreen  = () => {
  return (
    <ElecAndWaterStack.Navigator
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
      <ElecAndWaterStack.Screen name="AreaElectricAndWaterScreen" component={AreaElectricAndWaterScreen} options={{title: 'Danh sách khu'}}/>
      <ElecAndWaterStack.Screen name="ElecAndWater" component={WaterAndElectric} options={{title: 'Điện nước'}}/>
      <ElecAndWaterStack.Screen name="AddElectricAndWaterScreen" component={AddElectricAndWaterScreen} options={{title: 'Điện nước'}}/>
      <ElecAndWaterStack.Screen name="InfoElectricScreen" component={InfoElectricScreen} options={{title: 'Chi tiết tiền điện'}}/>
      <ElecAndWaterStack.Screen name="InfoWaterScreen" component={InfoWaterScreen} options={{title: 'Chi tiết tiền nước'}}/>
      {/* <ElecAndWaterStack.Screen name="Notifications" component={Notifications} />
      <ElecAndWaterStack.Screen name="Profile" component={Profile} />
      <ElecAndWaterStack.Screen name="Settings" component={Settings} /> */}
    </ElecAndWaterStack.Navigator>
  );
}

export default ElecAndWaterStackScreen