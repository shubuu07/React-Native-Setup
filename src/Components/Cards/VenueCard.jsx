import { View, Text, TouchableOpacity } from 'react-native'
import FastImage from 'react-native-fast-image'
import { Colors, Hp, Wp } from '../../Constants/Theme'
import { useNavigation } from '@react-navigation/native'
import Swiper from 'react-native-swiper'
import { Hamburger, MapPinLine } from 'phosphor-react-native';

const VenueCard = ({ item, index }) => {
    const navigation = useNavigation();

    const data = [{ id: 1, slide_url: "https://images.pexels.com/photos/9828008/pexels-photo-9828008.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" }, { id: 2, slide_url: "https://images.pexels.com/photos/274506/pexels-photo-274506.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" }, { id: 3, slide_url: "https://images.pexels.com/photos/863988/pexels-photo-863988.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" }, { id: 4, slide_url: "https://images.pexels.com/photos/209977/pexels-photo-209977.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" }, { id: 5, slide_url: "https://km-landing.s3.ap-south-1.amazonaws.com/Images/km-homePageNew/event-desk-new.png" }]
    return (
        <TouchableOpacity activeOpacity={.8}
            onPress={() => navigation.navigate("enventDetails")}
            className="relative rounded-2xl bg-white space-y-1 px-2 mx-3 pt-2 mb-3 " style={{ shadowColor: "#eee", shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.25, shadowRadius: 3.84, elevation: 5 }}>
            <View className='relative rounded-2xl pointer-events-none' >
                <Swiper
                    height={Hp(18)}
                    loop
                    autoplay
                    activeDot={
                        <View
                            style={{
                                backgroundColor: Colors.white,
                                width: Wp(8),
                                height: Hp(0.9),
                                borderRadius: 50,
                                marginHorizontal: Wp(1),
                                marginVertical: Hp(0.5)
                            }}
                        />}
                    paginationStyle={{
                        bottom: Hp(0.5),
                    }}
                >
                    {
                        data?.map((item, i) => (
                            <View key={i} className=" bg-sky-50  self-center rounded-2xl" style={{ width: "100%", height: Hp(18) }}>
                                <FastImage priority={FastImage.priority.high} source={{ uri: item.slide_url }} className="w-full h-full rounded-2xl" />
                            </View>
                        ))
                    }
                </Swiper>
            </View>
            <View className='space-y-[3px] ios:space-y-[5px] p-1 pt-2 pb-3' >
                <Text className="text-primary font-intSemi uppercase" style={{ fontSize: Hp(1.6) }}>Football, Badminton</Text>
                <Text numberOfLines={1} className="text-black  font-MuliBold  capitalize" style={{ fontSize: Hp(2) }}>Super Sports Park | Radcliffe Kharghar</Text>
                <View className='flex-row  items-center justify-between' >
                    <View className='space-y-[3px] ios:space-y-[5px] flex-1' >
                        <View className='flex-row  items-center space-x-1' >
                            <MapPinLine size={Hp(1.8)} color={Colors.red} weight='fill' />
                            <Text numberOfLines={1} className="text-slate-500 font-intMed" style={{ fontSize: Hp(1.5) }}>Sector 8, Kharghar </Text>
                        </View>
                        <View className='flex-row  items-center space-x-1 pr-5' >
                            {/* <CustomIcons name={"map-pin-2-line"} size={Hp(1.8)} color={Colors.slateGray500} /> */}
                            <Hamburger size={Hp(1.8)} color={Colors.blue} weight='fill' />
                            <Text numberOfLines={1} className="text-slate-500 font-intMed" style={{ fontSize: Hp(1.5) }}>Changing room, Drinking Water, Flood lights, Seating Lounge, Washroom</Text>
                        </View>
                    </View>
                </View>


            </View>
        </TouchableOpacity >
    )
}

export default VenueCard