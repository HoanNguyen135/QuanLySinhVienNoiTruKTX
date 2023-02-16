import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { COLORS } from '../contains';
import { ListApplicationDorm,InfoApplicationScreen,FilterApplicationDorm,ResultFilterApplication } from '../Screen';
import {Text} from 'react-native'
import { HeaderRightFilter } from '../component';

const ApplicationStack = createNativeStackNavigator();

const ApplicationStackScreen  = () => {
  return (
    <ApplicationStack.Navigator
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
      <ApplicationStack.Screen name="ListApplicationDorm" component={ListApplicationDorm} options={{title: 'Danh sách đơn đăng ký',headerRight: ()=>{return <HeaderRightFilter/> }}}/>
      <ApplicationStack.Screen name="InfoApplicationScreen" component={InfoApplicationScreen} options={{title: 'Chi tiết đơn đăng ký'}} />
      <ApplicationStack.Screen name="FilterApplicationDorm" component={FilterApplicationDorm} options={{title: 'Lọc đơn đăng ký'}} />
      <ApplicationStack.Screen name="ResultFilterApplication" component={ResultFilterApplication} options={{title: 'Kết quả lọc'}} />
      {/* <ApplicationStack.Screen name="Profile" component={Profile} />
      <ApplicationStack.Screen name="Settings" component={Settings} /> */}
    </ApplicationStack.Navigator>
  );
}

export default ApplicationStackScreen