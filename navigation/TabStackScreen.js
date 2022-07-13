import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MyNavigation from ".";
import { BuyProduct } from "../Screen";

const TabStack = createNativeStackNavigator();

const TabStackScreen = () =>{
    return(
        <TabStack.Navigator>
            <TabStack.Screen name="MyNavigation" component={MyNavigation} options={{headerShown: false}}/>
            <TabStack.Screen name="BuyProduct" component={BuyProduct}/>
        </TabStack.Navigator>
    )
}

export default TabStackScreen;