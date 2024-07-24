import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SplashScreen from '../Screens/Auth/Splash/SplashScreen';
import Tabs from '../Routes/Tabs';
import EditProfile from '../Screens/Main/ProfileTab/EditProfile/EditProfile';
import Settings from '../Screens/Main/ProfileTab/Settings/Settings';
import PrivacyPolicy from '../Screens/Main/ProfileTab/PrivacyPolicy/PrivacyPolicy';
import EnventDetails from "../Screens/Main/EventsTab/EnventDetails";
import SportDetails from "../Screens/Main/HomeTab/SportDetails";

const Stack = createNativeStackNavigator();
const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{
                headerShown: false,
            }} >

                <Stack.Screen name="tabs" component={Tabs} options={{ gestureEnabled: false }} />

                {/* ================ Auth Screens ================= */}
                <Stack.Screen name="splash" component={SplashScreen} />

                {/* ==================== Main Screens ================= */}
                <Stack.Screen name="sportDetails" component={SportDetails} />


                {/* ==================== Main Screens ================= */}


                {/* ==================== Events Screens ================= */}
                <Stack.Screen name="enventDetails" component={EnventDetails} />
                {/* ================ Profile Screens ================= */}
                <Stack.Screen name="editProfile" component={EditProfile} />
                <Stack.Screen name="setting" component={Settings} />
                <Stack.Screen name="privacyPolicy" component={PrivacyPolicy} />
            </Stack.Navigator>
        </NavigationContainer >
    );
};

export default () => {
    return <Navigation />;
};
