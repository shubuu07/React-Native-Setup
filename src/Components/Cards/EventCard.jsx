import { View, Text, TouchableOpacity } from 'react-native'
import FastImage from 'react-native-fast-image'
import { Colors, Hp } from '../../Constants/Theme';
import CustomIcons from '../../Helper/CustomIcons'
import PriceFormater from '../../Helper/PriceFormater';
import { useNavigation } from '@react-navigation/native'
import LinearGradient from 'react-native-linear-gradient';

const EventCard = () => {
    const navigation = useNavigation();
    return (
        <TouchableOpacity activeOpacity={.8}
            onPress={() => navigation.navigate("enventDetails")}
            className="relative rounded-2xl space-y-1  mx-3  mb-4 mt-2" >
            <View className='relative' >
                <FastImage priority={FastImage.priority.high} source={{ uri: "https://km-landing.s3.ap-south-1.amazonaws.com/Images/km-homePageNew/mumb-seven.png" }} className="self-center rounded-2xl bg-slate-100"
                    style={{ width: "100%", height: Hp(34), shadowColor: "#000", shadowOffset: { width: 2, height: 2 }, shadowOpacity: 0.25, shadowRadius: 3.84, elevation: 8 }}
                />
                <LinearGradient className="flex-1 absolute top-0 left-0 right-0 bottom-0 rounded-2xl" start={{ x: 0, y: 0.4 }} end={{ x: 0, y: 1 }} colors={['rgba(0, 0, 0, 0.01)', 'rgba(0, 0, 0, 0.8)', 'rgba(0, 0, 0, 0.9)']} />
                <View className='absolute  rounded-xl left-2 right-2 bottom-2   z-50 ' >
                    <View className='' >
                        <LinearGradient className="p-3 rounded-t-2xl" start={{ x: 1, y: 1 }} end={{ x: 0, y: 0 }} colors={['rgba(0,0,0, 0.01)', 'rgba(0 ,0 ,0, 0.01)', 'rgba(37 ,99 ,235, 0.2)', 'rgba(37 ,99 ,235, 0.4)', 'rgba(37 ,99 ,235, 0.6)', 'rgba(37 ,99 ,235, 0.8)', 'rgba(37 ,99 ,235, 0.8)', 'rgba(29 ,78 ,216, 0.9)', 'rgba(29 ,78 ,216, 1)']} >
                            <View className='ios:space-y-1' >
                                <Text className="text-white font-intSemi" style={{ fontSize: Hp(1.5) }}>PRE-BOOK TABLE</Text>
                                <Text className="text-white font-intBold" style={{ fontSize: Hp(2) }}>Flat 50% OFF + 3 more</Text>
                            </View>
                        </LinearGradient>
                    </View>
                    <View className='space-y-[3px] ios:space-y-[5px] p-2.5  bg-white rounded-b-2xl' >
                        <Text className="text-primary font-intSemi uppercase" style={{ fontSize: Hp(1.4) }}>Football, Tennis</Text>
                        <Text numberOfLines={1} className="text-black  font-MuliBold  capitalize" style={{ fontSize: Hp(2) }}>Super Sports Park | Radcliffe Kharghar</Text>
                        <View className='flex-row  items-center justify-between' >
                            <View className='space-y-[3px] ios:space-y-[5px] flex-1' >
                                <View className='space-y-1.5 ' >
                                    <Text numberOfLines={1} className="text-slate-500 font-intMed" style={{ fontSize: Hp(1.5) }}>Sector 8, Kharghar </Text>
                                </View>
                                <View className='flex-row  items-center space-x-1 pb-2' >
                                    <CustomIcons name={"calendar-line"} size={Hp(1.8)} color={Colors.slateGray500} />
                                    <Text numberOfLines={1} className="text-slate-700 font-intSemi" style={{ fontSize: Hp(1.5) }}>20th Feb, 2022</Text>
                                    <Text numberOfLines={1} className="text-slate-700 font-intSemi" style={{ fontSize: Hp(1.5) }}><Text className="text-orange-300">•</Text> 20th Feb, 2022</Text>
                                </View>
                            </View>
                            <Text className="text-primary  font-MuliBold  capitalize pr-2 pb-2" style={{ fontSize: Hp(2.3) }}>
                                <PriceFormater price={500} /> /-
                            </Text>
                        </View>


                    </View>
                </View>

            </View>

        </TouchableOpacity>
    )
}

export default EventCard