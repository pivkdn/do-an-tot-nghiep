import * as React from 'react';
import {Button, View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import TrangChuScreen from '../screens/TrangChu';
import CuaHangScreen from '../screens/CuaHang';
import GoiMonScreen from '../screens/GoiMon';
import Places from '../screens/Places';
import KhacScreen from '../screens/Khac';
import LoginScreen from '../screens/Login';
import BagScreen from '../screens/Bag';
import ProductListScreen from '../screens/ProductList';
import ProductDetail from '../screens/ProductDetail';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Bag from '../screens/Bag'
import Login from '../screens/Login';

import { useSelector } from 'react-redux'
import LichSuMuaHang from '../screens/LichSuMuaHang';
const TrangChuStack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const SettingStack = createNativeStackNavigator();

const SettingScreen = () => {
  return(
    <SettingStack.Navigator >
      <SettingStack.Screen name="Setting" component={KhacScreen} options={{headerShown:false}} /> 
      <SettingStack.Screen name="SettingLichSu" options={{title:'Lịch sử mua hàng'}} component={LichSuMuaHang} /> 
    </SettingStack.Navigator>
  )
}

function TrangChuStackScreen() {
  return (
    <TrangChuStack.Navigator initialRouteName="Trang Chủ">
      <TrangChuStack.Screen name="Trang Chủ" component={TrangChuScreen} />
      <TrangChuStack.Screen name="ProductListScreen" component={ProductListScreen}/>
      <TrangChuStack.Screen name="ProductDetail" component={ProductDetail} />
      <TrangChuStack.Screen name="Bag" component={Bag} />
      <TrangChuStack.Screen name="Login" component={LoginScreen}/>
    </TrangChuStack.Navigator>
  );
}
const Stack = createNativeStackNavigator();

const TabScreenHome = () => {
  return(
    <Tab.Navigator
        screenOptions={({route}) => ({
          headerShown:false,
          tabBarIcon: ({focused, color, size}) => {
            let iconName;
            if (route.name === 'TrangChu') {
              iconName = focused ? 'ios-home' : 'ios-home-outline';
            } else if (route.name === 'CuaHang') {
              iconName = focused ? 'basket' : 'basket-outline';
            } else if (route.name === 'GoiMon') {
              iconName = focused ? 'cafe' : 'cafe-outline';
            } else if (route.name === 'Places') {
              iconName = focused ? 'location' : 'location-outline';
            } else if (route.name === 'Khac') {
              iconName = focused
                ? 'ellipsis-horizontal'
                : 'ellipsis-horizontal-outline';
            }
            //  else if (route.name === 'Bag') {
            //   iconName = focused ? 'cart' : 'cart-outline';
            // }  
            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}>
        <Tab.Screen
          name="TrangChu"
          component={TrangChuStackScreen}
          options={{title: 'Trang Chủ'}}
        />
        <Tab.Screen
          name="CuaHang"
          component={CuaHangScreen}
          options={{title: ' Cửa Hàng '}}
        />
        <Tab.Screen
          name="GoiMon"
          component={GoiMonScreen}
          options={{title: ' Gọi Món '}}
        />
        <Tab.Screen
          name="Places"
          component={Places}
          options={{title: ' Địa Chỉ '}}
        />
        <Tab.Screen
          name="Khac"
          component={SettingScreen}
          options={{title: ' Khác '}}
        />
        {/* <Tab.Screen
          name="Bag"
          component={BagScreen}
          options={{title: ' Giỏ Hàng '}}
        /> */}
      </Tab.Navigator>
  )
}
export default function App() {
  const [isLoading , setLoading] = React.useState(false)
  const user = useSelector(state =>  state.loginReducer)
  React.useEffect(() => {
    if(user.success && user.user) {
      setLoading(true)
    } else {
      setLoading(false)
    }
  },[user])
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {
          isLoading ?  <Stack.Screen name="Home" component={TabScreenHome} />
          :
          <Stack.Screen name="Login" component={Login} />
        }
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// export default App;
