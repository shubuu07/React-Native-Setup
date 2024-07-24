import { View, Text, StatusBar, Image, TouchableOpacity, ScrollView, Platform, Alert } from 'react-native';
import WavyHeader from '../../../Helper/WavyHeader'
import { Colors, Hp } from '../../../Constants/Theme';
import { SafeAreaView } from 'react-native-safe-area-context'
import { userProfileTabs } from '../../../Utils/api/HelperApi'
import { List } from 'phosphor-react-native';
import { useNavigation } from '@react-navigation/native';

const ProfileScreen = () => {
    const navigation = useNavigation();
    return (
        <View className='flex-1 bg-slate1'>
            <StatusBar translucent backgroundColor={"transparent"} barStyle={"light-content"} />
            <View className='scale-x-[-1] z-10' >
                <WavyHeader
                    customStyles={{ position: "absolute", top: 0, left: 0, right: 0, zIndex: 10 }}
                    customHeight={Hp(18)}
                    customTop={Hp(15)}
                    customBgColor="#f97316"
                    customWavePattern="M0,192L60,176C120,160,240,128,360,112C480,96,600,96,720,128C840,160,960,224,1080,245.3C1200,267,1320,245,1380,234.7L1440,224L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
                />
            </View>
            <SafeAreaView className="flex-1 z-20">
                <View className="flex-row items-center justify-between px-5 pt-2">
                    <View className='ios:space-y-1' >
                        <Text className="font-intBold text-white" style={{ fontSize: Hp(3) }}>Sport Phere</Text>
                        <Text
                            className="text-white font-intMed"
                            style={{ fontSize: Hp(1.7) }}>
                            version 1.0.0
                        </Text>
                    </View>
                    <TouchableOpacity
                        activeOpacity={0.8}
                        onPress={() => {
                            Alert.alert("Settings")
                        }}>
                        <List size={Hp(4)} color={Colors.white} weight='bold' />
                    </TouchableOpacity>
                </View>
                <View className=' z-20' style={{ marginTop: Hp(2) }}>
                    <View className='self-start p-[4.5px]  rounded-full z-50 bg-white ' style={{
                        shadowColor: "#777",
                        shadowOffset: {
                            width: 0,
                            height: 3,
                        },
                        shadowOpacity: 0.34,
                        shadowRadius: 4,
                        elevation: 4,
                        marginLeft: Hp(3)
                    }}>
                        <Image source={{ uri: "https://avatar.iran.liara.run/public/37" }} style={{ width: Hp(13), height: Hp(13) }} className="rounded-full bg-slate1" />
                    </View>
                    <ScrollView className='mt-2 bg-slate1' contentContainerStyle={{ paddingTop: Hp(1), paddingBottom: Platform.OS === 'ios' ? Hp(18) : Hp(24) }} showsVerticalScrollIndicator={false}>
                        <View className='flex-row  px-2 pb-3  mx-3  rounded-2xl items-center justify-between space-x-2' >
                            <View className='space-y-0.5 ios:space-y-1 flex-1' >
                                <Text numberOfLines={1} className="font-MuliBlack text-black capitalize" style={{ fontSize: Hp(2.6) }}>shubham handergule</Text>
                                <Text numberOfLines={1} className="font-intSemi text-slate-500" style={{ fontSize: Hp(1.7) }}> +91 1234567890 </Text>
                            </View>
                        </View>
                        <View >
                            {
                                userProfileTabs?.map((item, index) => {
                                    return (
                                        <View className='my-1 rounded-2xl mx-3 py-4 px-4 space-y-1 bg-white' key={index}>
                                            <Text className='text-black capitalize font-MuliBold' style={{ fontSize: Hp(2.2) }} >{item.header}</Text>
                                            <View className='divide-y divide-slate-200/50' >
                                                {item?.item?.map((items, index) => {
                                                    return (
                                                        <TouchableOpacity key={index} activeOpacity={0.9} className="flex-row items-center  space-x-1 py-2.5"
                                                            // onPress={() => item.onPress == "logout" ? refRBSheet.current.open() : navigation.navigate(item.onPress)}
                                                            onPress={() => navigation.navigate(items?.onPress)}
                                                        >
                                                            <View className='p-2.5  rounded-full justify-center items-center bg-slate1' >
                                                                {items.leftIcon}
                                                            </View>
                                                            <Text className="text-black flex-1 font-intSemi" style={{ fontSize: Hp(1.8) }}> {items.tabTitle}</Text>
                                                            <View className="flex-row space-x-2">
                                                                {items.rightIcon}
                                                            </View>
                                                        </TouchableOpacity>
                                                    )
                                                })}
                                            </View>
                                        </View>
                                    )
                                })
                            }
                            {/* <ConfirmLogoutSheet refRBSheet={refRBSheet} /> */}
                        </View>
                    </ScrollView>
                </View>
            </SafeAreaView>
        </View>
    )
}

export default ProfileScreen