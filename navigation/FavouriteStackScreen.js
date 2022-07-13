import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { FavouriteScreen } from '../Screen';
import { IconHeader } from '../component';

const FavouriteStack = createNativeStackNavigator();

const FavouriteStackScreen = ()=> {
  return (
    <FavouriteStack.Navigator>
      <FavouriteStack.Screen name="FavouriteStackScreen" component={FavouriteScreen} options={{title:"Ưu thích" }}/>
    </FavouriteStack.Navigator>
  );
}

export default FavouriteStackScreen;