import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { COLORS } from '../contains';
import { PriceElectricAndWater,InfoPrice } from '../Screen';


const PriceElectricAndWaterStack = createNativeStackNavigator();

const PriceElectricAndWaterStackScreen  = () => {
  return (
    <PriceElectricAndWaterStack.Navigator
     screenOptions={{
        headerTintColor: COLORS.white,
        headerStyle: {
          height: 120,
          backgroundColor: COLORS.logo,
        },
        headerTitleStyle: {
          fontSize: 25,
        },
        headerTitleAlign: "center",
      }}
    >
      <PriceElectricAndWaterStack.Screen name="PriceElectricAndWater" component={PriceElectricAndWater} options={{title: "Quản lý giá điện nước"}}/>
      <PriceElectricAndWaterStack.Screen name="InfoPrice" component={InfoPrice} options={{title: "Chi tiết giá điện nước"}}/>
    </PriceElectricAndWaterStack.Navigator>
  );
}

export default PriceElectricAndWaterStackScreen