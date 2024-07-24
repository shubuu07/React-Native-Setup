import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Platform, Text } from 'react-native';
import { Hp, Wp } from '../Constants/Theme';
import { ClockCounterClockwise, DribbbleLogo, House, HouseLine, Ticket, User } from 'phosphor-react-native';
import ProfileScreen from '../Screens/Main/ProfileTab/ProfileScreen';
import HomeScreen from '../Screens/Main/HomeTab/HomeScreen';
import EventsScreen from '../Screens/Main/EventsTab/EventsScreen';
import TournamentScreen from '../Screens/Main/TournamentTab/TournamentScreen';
import BookingScreen from '../Screens/Main/BookingTab/BookingScreen';

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
              <View className='items-center justify-center space-y-[1px]' >
                <HouseLine size={Hp(3.2)} className={focused ? "text-orange-500" : "text-[#94a3b8]"} weight='regular' />
                <Text className={focused ? "font-intMed text-orange-500" : "font-intMed  text-slate-500"} style={{ fontSize: Hp(1.3) }}>Home</Text>
              </View>
            );
          },
        }}
      />

      <Tab.Screen
        name="Booking"
        component={BookingScreen}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View className='items-center justify-center space-y-[1px]' >
                <ClockCounterClockwise size={Hp(3.2)} className={focused ? "text-orange-500" : "text-[#94a3b8]"} weight='regular' />
                <Text className={focused ? "font-intMed text-orange-500" : "font-intMed  text-slate-500"} style={{ fontSize: Hp(1.3) }}>Booking</Text>
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="Tournaments"
        component={TournamentScreen}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View className='items-center justify-center space-y-[1px]' >
                <DribbbleLogo size={Hp(3.2)} className={focused ? "text-orange-500" : "text-[#94a3b8]"} weight='regular' />
                <Text className={focused ? "font-intMed text-orange-500" : "font-intMed  text-slate-500"} style={{ fontSize: Hp(1.3) }}>Tournament</Text>
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="Events"
        component={EventsScreen}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View className='items-center justify-center space-y-[1px]' >
                <Ticket size={Hp(3.2)} className={focused ? "text-orange-500" : "text-[#94a3b8]"} weight='regular' />
                <Text className={focused ? "font-intMed text-orange-500" : "font-intMed  text-slate-500"} style={{ fontSize: Hp(1.3) }}>Events</Text>
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
              <View className='items-center justify-center space-y-[1px]' >
                <User size={Hp(3.2)} className={focused ? "text-orange-500" : "text-[#94a3b8]"} weight='regular' />
                <Text className={focused ? "font-intMed text-orange-500" : "font-intMed  text-slate-500"} style={{ fontSize: Hp(1.3) }}>Profile</Text>
              </View>
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};
export default Tabs;