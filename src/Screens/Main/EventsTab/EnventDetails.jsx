import { View, Text, StatusBar, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from '../../../Components/Header/Header';
import { Colors, Hp } from '../../../Constants/Theme';
import BannersCenter from '../../../Components/Sliders/BannersCenter';
import FastImage from 'react-native-fast-image';
import CustomIcons from '../../../Helper/CustomIcons';
import PriceFormater from '../../../Helper/PriceFormater';
import { MapPinLine, NavigationArrow } from 'phosphor-react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import ButtonFill from '../../../Components/Button/ButtonFill';

const EnventDetails = () => {
    return (
        <SafeAreaView edges={["top", "left", "right"]} className="flex-1 bg-white">
            <StatusBar backgroundColor={Colors.white} barStyle={"dark-content"} />
            <Header name={"Event Details"} />
            <ScrollView className='flex-1 bg-slate1' contentContainerStyle={{
                paddingTop: Hp(1.5),
                paddingBottom: Hp(2),
            }} showsVerticalScrollIndicator={false}>
                <View className="rounded-2xl overflow-hidden mx-2.5 bg-slate-200 "
                    activeOpacity={0.9}
                    style={{ height: Hp(23) }}
                >
                    <FastImage priority={FastImage.priority.high} style={{ width: '100%', height: '100%' }} onLoadStart={this.onLoadStart}
                        onLoad={this.onLoad} source={{ uri: "https://km-landing.s3.ap-south-1.amazonaws.com/Images/km-homePageNew/event-desk-new.png" }}
                        className="w-full h-full rounded-2xl bg-slate-200" />
                </View>

                <View className='m-3 mx-2.5 space-y-2' >
                    <View className='p-3 px-2 bg-white rounded-xl' >
                        <View className='space-y-0.5 ios:space-y-1.5 p-1' >
                            <Text className="text-primary font-intSemi uppercase" style={{ fontSize: Hp(1.5) }}>Football, Cricket</Text>
                            <Text className="text-black  font-MuliBold  capitalize" style={{ fontSize: Hp(2.1) }}>Super Sports Park | Radcliffe Kharghar</Text>
                            <View className='flex-row  items-center justify-between' >
                                <View className='space-y-2 ios:space-y-3 flex-1' >
                                    <View className='flex-row  items-center space-x-1 ' >
                                        <CustomIcons name={"calendar-line"} size={Hp(2)} color={Colors.slateGray500} />
                                        <Text numberOfLines={1} className="text-slate-700 font-intSemi" style={{ fontSize: Hp(1.7) }}>20th Feb, 2022</Text>
                                        <Text numberOfLines={1} className="text-slate-700 font-intSemi" style={{ fontSize: Hp(1.7) }}><Text className="text-orange-300">•</Text> 20th Feb, 2022</Text>
                                    </View>
                                    <Text className="text-primary  font-MuliBold " style={{ fontSize: Hp(2.6) }}>
                                        <PriceFormater price={500} /> /-
                                    </Text>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View className='p-3 px-2 bg-white rounded-xl' >
                        <View className='space-y-1 ios:space-y-1.5 p-1' >
                            <View className='flex-row items-center justify-between' >
                                <View className='flex-1' >
                                    <Text className="text-primary font-intSemi uppercase" style={{ fontSize: Hp(1.7) }}>Location</Text>
                                    <Text className="text-black  font-MuliBold  capitalize" style={{ fontSize: Hp(2.2) }}>Bombay Badminton League</Text>
                                </View>

                                <TouchableOpacity activeOpacity={0.8} className="rotate-90 p-2 rounded-md bg-slate1">
                                    <NavigationArrow size={Hp(3.5)} color={Colors.primary} weight='fill' />
                                </TouchableOpacity>
                            </View>

                            <View className='flex-row space-x-0.5 ' >
                                <MapPinLine size={Hp(2)} color={Colors.primary} weight='fill' />
                                <Text className="text-slate-700 font-intMed ios:leading-[20px]" style={{ fontSize: Hp(1.6) }}>Mumbai, Maharashtra, Chembur West, TSG Sports Arena,Universal School, Tilak Nagar, PL Lokhande Marg, 400089</Text>
                            </View>
                        </View>
                    </View>
                    <View className='p-3 px-2 bg-white rounded-xl' >
                        <View className='space-y-0.5 ios:space-y-1 p-1' >
                            <Text className="text-primary font-intSemi uppercase" style={{ fontSize: Hp(1.7) }}>About Event</Text>
                            <Text className="text-slate-700 font-intSemi ios:leading-[20px]" style={{ fontSize: Hp(1.6) }}>Mumbai, Maharashtra, Chembur West, TSG Sports Arena,Universal School, Tilak Nagar, PL Lokhande Marg, 400089</Text>
                        </View>
                    </View>
                    <View className='p-3 px-2 bg-white rounded-xl' >
                        <View className='space-y-0.5 ios:space-y-1 p-1' >
                            <Text className="text-primary font-intSemi uppercase" style={{ fontSize: Hp(1.7) }}>Amenities</Text>
                            <View className='flex-row flex-wrap  space-x-2 space-y-1 pt-1' >
                                <View className='px-3 py-[9px] bg-slate1 rounded-full items-center' >
                                    <Text className="font-MuliBold text-slate-600 tracking-wider" style={{ fontSize: Hp(1.8) }}>Football</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View className='p-3 px-2 bg-white rounded-xl' >
                        <View className='space-y-0.5 ios:space-y-1 p-1' >
                            <Text className="text-primary font-intSemi uppercase" style={{ fontSize: Hp(1.7) }}>Organized By</Text>
                            <Text className="text-slate-700 font-intMed ios:leading-[20px]" style={{ fontSize: Hp(1.6) }}>Bombay Badminton League</Text>
                            <Text className="text-slate-700 font-intMed ios:leading-[20px]" style={{ fontSize: Hp(1.6) }}>info@gmail.com</Text>
                            <Text className="text-slate-700 font-intMed ios:leading-[20px]" style={{ fontSize: Hp(1.6) }}>1234567890</Text>
                        </View>
                    </View>
                    <View className='p-3 px-2 bg-white rounded-xl' >
                        <View className='space-y-0.5 ios:space-y-1 p-1' >
                            <Text className="text-primary font-intSemi uppercase" style={{ fontSize: Hp(1.7) }}>Terms & Condition</Text>
                            <Text className="text-slate-700 font-intMed ios:leading-[20px]" style={{ fontSize: Hp(1.6) }}>State or National level Players are not allowed to participate.</Text>
                            <Text className="text-slate-700 font-intMed ios:leading-[20px]" style={{ fontSize: Hp(1.6) }}>State or National level Players are not allowed to participate.</Text>
                            <Text className="text-slate-700 font-intMed ios:leading-[20px]" style={{ fontSize: Hp(1.6) }}>State or National level Players are not allowed to participate.</Text>
                        </View>
                    </View>
                    <View className='p-3 px-2 bg-white rounded-xl' >
                        <View className='space-y-0.5 ios:space-y-1 p-1' >
                            <Text className="text-primary font-intSemi uppercase" style={{ fontSize: Hp(1.7) }}>Cancellation Policy</Text>
                            <Text className="text-slate-700 font-intMed ios:leading-[20px]" style={{ fontSize: Hp(1.6) }}>State or National level Players are not allowed to participate.</Text>
                            <Text className="text-slate-700 font-intMed ios:leading-[20px]" style={{ fontSize: Hp(1.6) }}>State or National level Players are not allowed to participate.</Text>
                        </View>
                    </View>
                </View>

            </ScrollView>
            <View className='w-full p-3' >
                <ButtonFill title="Book Now" onPress={() => navigation.navigate('Register')} />
            </View>
        </SafeAreaView>
    )
}

export default EnventDetails