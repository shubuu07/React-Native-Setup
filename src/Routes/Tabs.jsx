import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Platform, Text } from 'react-native';
import { Colors, COLORS, Hp, Wp } from '../Constants/Theme';
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
          height: Platform.OS === 'android' ? 60 : 80,
          paddingBottom: Platform.OS === 'android' ? 5 : 22,
          paddingHorizontal: Wp(1),
          backgroundColor: "#fff",
          paddingTop: Hp(1),
          borderTopWidth: 0.3,
          borderTopColor: "#fff",
          shadowColor: "#444",
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
              <View className='items-center justify-center space-y-0.5' >
                <House size={Hp(3.4)} className={focused ? "text-orange-500" : "text-slate-400"} variant='Bulk' />
                <Text className={focused ? "font-intSemi text-orange-500" : "font-intSemi  text-slate-400"} style={{ fontSize: Hp(1.4) }}>Home</Text>
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
              <View className='items-center justify-center space-y-0.5' >
                <User size={Hp(3.4)} className={focused ? "text-orange-500" : "text-slate-400"} variant='Bulk' />
                <Text className={focused ? "font-intSemi text-orange-500" : "font-intSemi  text-slate-400"} style={{ fontSize: Hp(1.4) }}>Profile</Text>
              </View>
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};
export default Tabs;