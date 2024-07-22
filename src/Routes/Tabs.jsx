import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Platform, Text } from 'react-native';
import { Hp, Wp } from '../Constants/Theme';
import { House, User } from 'phosphor-react-native';
import ProfileScreen from '../Screens/Main/ProfileTab/ProfileScreen';
import HomeScreen from '../Screens/Main/HomeTab/HomeScreen';

const Tab = createBottomTabNavigator();

const Tabs = () => {

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarHideOnKeyboard: true,
        safeAreaInsets: { bottom: 0, top: 0 },
        unmountOnBlur: true,
        tabBarStyle: {
          height: Platform.OS === 'android' ? Hp(8) : Hp(8.5),
          paddingBottom: Platform.OS === 'android' ? Hp(1.5) : Hp(2.5),
          paddingHorizontal: Wp(1),
          backgroundColor: "#fff",
          paddingTop: Hp(1),
          borderTopWidth: 0.3,
          borderTopColor: "#fff",
          shadowColor: "#333",
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          elevation: 15,
        },
        tabBarShowLabel: false,
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View className='items-center justify-center' >
                <House size={Hp(3.4)} className={focused ? "text-orange-500" : "text-[#717b9e]"} variant='Bulk' />
                <Text className={focused ? "font-intSemi text-orange-500" : "font-intSemi  text-[#717b9e]"} style={{ fontSize: Hp(1.5) }}>Home</Text>
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View className='items-center justify-center' >
                <User size={Hp(3.4)} className={focused ? "text-orange-500" : "text-[#717b9e]"} variant='Bulk' />
                <Text className={focused ? "font-intSemi text-orange-500" : "font-intSemi  text-[#717b9e]"} style={{ fontSize: Hp(1.5) }}>Profile</Text>
              </View>
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};
export default Tabs;