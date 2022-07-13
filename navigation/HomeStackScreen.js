import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from '../Screen';
import { View, Text } from 'react-native'
import {IconHeader,Header} from '../component'

const HomeStack = createNativeStackNavigator();

const HomeStackScreen = ()=> {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="HomeStackScreen" component={HomeScreen} options={{title:"Trang chủ" ,header: ()=> <Header icon={'cart'}/>}} />
    </HomeStack.Navigator>
  );
}

export default HomeStackScreen;