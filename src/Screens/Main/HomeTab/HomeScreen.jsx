import { View, Text, TouchableOpacity, TextInput, Platform, FlatList } from 'react-native';
import { useToast } from 'react-native-toast-notifications';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Colors, Hp, Wp } from '../../../Constants/Theme';
import Icon from 'react-native-remix-icon';
import Banners from '../../../Components/Sliders/Banners';
import { activities } from '../../../Utils/api/HelperApi';
import HeadingTitle from '../../../Components/Header/HeadingTitle';
import FastImage from 'react-native-fast-image';
import { MapPinLine, Star } from 'phosphor-react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icons from '../../../Constants/Icons';
import BottomFooter from '../../../Components/Footer/BottomFooter';
import Promotion from '../../../Components/Sliders/Promotion';
import { Home01Icon } from '@hugeicons/react-native-pro';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
    const toast = useToast();
    return (
        <SafeAreaView edges={["top", "left", "right"]} className='flex-1 bg-white'>
            <View className='flex-1' >
                {/* ================ HEADER SECTION ================= */}
                <HomeHeader />
                <View className='flex-1 bg-white ' >
                    <FlatList
                        className="flex-1"
                        data={[{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }]}
                        renderItem={({ item, index }) => (
                            index == 0 ? <Banners data={[{ id: 1, slide_url: "https://images.pexels.com/photos/9828008/pexels-photo-9828008.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" }, { id: 2, slide_url: "https://images.pexels.com/photos/274506/pexels-photo-274506.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" }, { id: 3, slide_url: "https://images.pexels.com/photos/863988/pexels-photo-863988.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" }, { id: 4, slide_url: "https://images.pexels.com/photos/209977/pexels-photo-209977.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" }, { id: 5, slide_url: "https://km-landing.s3.ap-south-1.amazonaws.com/Images/km-homePageNew/event-desk-new.png" }]} /> : index == 1 ? <MultiSportCard /> : index == 2 ? <UpcomingEvents /> : index == 3 ? <Promotion data={[{ id: 1, slide_url: "https://images.pexels.com/photos/9828008/pexels-photo-9828008.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" }, { id: 2, slide_url: "https://images.pexels.com/photos/274506/pexels-photo-274506.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" }, { id: 3, slide_url: "https://images.pexels.com/photos/863988/pexels-photo-863988.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" }, { id: 4, slide_url: "https://images.pexels.com/photos/209977/pexels-photo-209977.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" }, { id: 5, slide_url: "https://km-landing.s3.ap-south-1.amazonaws.com/Images/km-homePageNew/event-desk-new.png" }]} loop={false} /> : index == 4 && <NearByVanue />
                        )}
                        keyExtractor={(item) => item.id.toString()}
                        showsVerticalScrollIndicator={false}
                        contentContainerStyle={{ rowGap: Hp(1.2), paddingBottom: Hp(3), paddingTop: Hp(2) }}
                        ListFooterComponent={<BottomFooter />}
                    />
                </View>
            </View>
        </SafeAreaView>

    )
}


const HomeHeader = () => {
    return (
        <View className='px-3 space-y-3 bg-white pb-3 android:pt-3 z-10' style={{ shadowColor: '#aaa', shadowOffset: { width: 0, height: Platform.OS === 'ios' ? 5 : 2 }, shadowOpacity: 0.25, shadowRadius: 5, elevation: 10 }} >
            <View className='w-full flex-row justify-between items-center  '>
                <View className='flex-row items-center space-x-1' >
                    <MapPinLine size={Hp(3.5)} color={Colors.primary} weight='fill' />
                    <View className='' >
                        <View className='flex-row  items-center' >
                            <Text numberOfLines={1} className='font-MuliBlack capitalize text-black' style={{ fontSize: Hp(2.3) }}>MUMBAI</Text>
                            <Icon name="arrow-down-s-line" size={Hp(3)} color={Colors.slateGray400} />
                        </View>
                        <Text numberOfLines={1} className='font-intMed text-slate-500' style={{ fontSize: Hp(1.6) }}>Kamathghar, Delhi NCR, India </Text>
                    </View>
                </View>

                <View className='flex-row items-center space-x-3 mr-2' >
                    <TouchableOpacity className="relative" activeOpacity={0.8} >
                        <Icon name="notification-3-line" size={Hp(3.3)} color={Colors.black} />
                        <View className="bg-red-500 rounded-full absolute -top-2 -right-2 justify-center  border-[1.5px] border-white items-center" style={{ width: Hp(2.8), height: Hp(2.8) }}>
                            <Text className="text-white font-intBold text-center" style={{ fontSize: 5 >= 10 ? Hp(1.3) : Hp(1.6) }}>
                                2
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
            <View className='flex-row  items-center space-x-3 bg-slate1 rounded-xl' style={{ paddingLeft: Wp(3), paddingRight: Wp(5), paddingVertical: Platform.OS === 'ios' ? Hp(1.6) : Hp(0) }}>
                <Icon name="search-2-line" size={Hp(3)} color={Colors.slateGray500} />
                <TextInput className="flex-1  text-black font-intMed rounded-xl" placeholder="Find Venue..." placeholderTextColor={Colors.slateGray500} style={{ fontSize: Hp(2) }} />
            </View>
        </View>

    )
}

const MultiSportCard = () => {
    const navigation = useNavigation();

    const renderItem = ({ item }) => {
        return (
            <TouchableOpacity activeOpacity={0.8} onPress={() => navigation.navigate("sportDetails")} className='flex-1  justify-between overflow-hidden rounded-xl space-y-3' style={{ height: Hp(13), backgroundColor: item.backgroundColor }}>
                <View className='' >
                    <View className='p-3.5 self-start bg-white absolute rounded-full -top-2 -left-3'  >
                        <Icon name="search-2-line" size={Hp(3.5)} color={item.color} />
                    </View>
                </View>
                <View className='ios:space-y-0.5 p-2' >
                    <Text numberOfLines={1} className='font-MuliBold text-black' style={{ fontSize: Hp(2) }}>{item.title}</Text>
                    <Text numberOfLines={1} className='font-intMed text-slate-500' style={{ fontSize: Hp(1.4) }}>10 centers</Text>
                </View>
            </TouchableOpacity>
        )
    }
    return (
        <View className='space-y-2 my-1 mt-2' >
            <HeadingTitle title="Activities" />
            <FlatList
                data={activities}
                keyExtractor={(_, index) => index.toString()}
                numColumns={3}
                columnWrapperStyle={{ columnGap: Hp(1), rowGap: Hp(1), paddingHorizontal: Wp(3), paddingVertical: Hp(0.5), }}
                contentContainerStyle={{ rowGap: Hp(1) }}
                showsHorizontalScrollIndicator={false}
                renderItem={({ item, index }) => renderItem({ item, index })}
            />
        </View>
    )
}

const NearByVanue = () => {
    return (
        <View className='space-y-1 my-1' >
            <HeadingTitle title="Nearby Venues" />
            <View className='' >
                <FlatList
                    data={[{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }]}
                    keyExtractor={(_, index) => index.toString()}
                    horizontal
                    contentContainerStyle={{
                        columnGap: Hp(1.5),
                        paddingTop: Hp(1),
                        paddingHorizontal: Hp(1.5),
                    }}
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item, index }) => <NearByVanueCard item={item} index={index} />}
                />
            </View>
        </View>
    )
}

const UpcomingEvents = () => {
    return (
        <View className='space-y-1 my-1' >
            <HeadingTitle title="Upcoming Events" />
            <View className='' >
                <FlatList
                    data={[{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }]}
                    keyExtractor={(_, index) => index.toString()}
                    horizontal
                    contentContainerStyle={{
                        columnGap: Hp(1),
                        paddingTop: Hp(1),
                        paddingHorizontal: Hp(1.5),
                    }}
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item, index }) => <UpcomingEventsCard item={item} index={index} />}
                />
            </View>
        </View>
    )
}

const NearByVanueCard = ({ item, index }) => {
    return (
        <TouchableOpacity activeOpacity={.8}
            className="relative rounded-2xl space-y-1 ios:space-y-2 " style={{ width: Wp(85) }}>
            <View className='relative' >
                <FastImage priority={FastImage.priority.high} source={{ uri: 'https://km-landing.s3.ap-south-1.amazonaws.com/Images/km-homePageNew/mumb-seven.png' }} className="self-center rounded-xl bg-slate-100"
                    style={{ width: Wp(85), height: Hp(28), shadowColor: "#000", shadowOffset: { width: 2, height: 2 }, shadowOpacity: 0.25, shadowRadius: 3.84, elevation: 8 }}
                />
                <View className='ios:space-y-0.5  absolute bottom-2 bg-white self-center left-2.5 right-2.5 rounded-lg p-2 space-y-1.5' >
                    <View className='flex-row  items-center space-x-1' >
                        <Text numberOfLines={1} className="text-black  font-intSemi flex-1  capitalize" style={{ fontSize: Hp(2.2) }}>Runwal Forests</Text>
                        <View className='justify-center items-center px-2 py-1 flex-row rounded-md bg-green-600 space-x-1' >
                            <Text className="text-white font-intBold text-center" style={{ fontSize: Hp(1.7) }}>4.0</Text>
                            <Star size={Hp(1.5)} color="#fff" weight="fill" />
                        </View>
                    </View>
                    <View className='space-y-0.5' >
                        <View className='flex-row  items-center justify-between' >
                            <Text numberOfLines={1} className="text-slate-500 font-intMed" style={{ fontSize: Hp(1.6) }}>Mumbai, India</Text>
                            <Text numberOfLines={1} className="text-slate-500 font-intMed" style={{ fontSize: Hp(1.6) }}>5.0 km</Text>
                        </View>
                        <View className='flex-row  items-center justify-between' >
                            <Text numberOfLines={1} className="text-slate-500 font-intMed" style={{ fontSize: Hp(1.6) }}>Price start from</Text>
                            <Text numberOfLines={1} className="text-slate-500 font-intMed" style={{ fontSize: Hp(1.6) }}>INR 200 Onwords</Text>
                        </View>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    )
}

const UpcomingEventsCard = () => {
    return (
        <View
            className="relative rounded-2xl space-y-1  " style={{ width: Wp(40) }}>
            <View className='relative' >
                <FastImage priority={FastImage.priority.high} source={{ uri: "https://km-landing.s3.ap-south-1.amazonaws.com/Images/km-homePageNew/mumb-seven.png" }} className="self-center rounded-2xl bg-slate-100"
                    style={{ width: Wp(40), height: Hp(24), shadowColor: "#000", shadowOffset: { width: 2, height: 2 }, shadowOpacity: 0.25, shadowRadius: 3.84, elevation: 8 }}
                />
                <LinearGradient className="flex-1 absolute top-0 left-0 right-0 bottom-0 rounded-2xl" start={{ x: 0, y: 0.4 }} end={{ x: 0, y: 1 }} colors={['rgba(0, 0, 0, 0.01)', 'rgba(0, 0, 0, 0.5)', 'rgba(0, 0, 0, 0.7)', 'rgba(0, 0, 0, 0.9)']} >
                    <View className=' absolute bottom-2.5  self-center left-0.5 right-0.5 rounded-lg px-1.5 space-y-1 ' >
                        <Text numberOfLines={2} className="text-white  font-MuliBlack  capitalize" style={{ fontSize: Hp(1.8) }}>Volleyball challenge</Text>
                        <View className='flex-row  items-end space-x-0.5' >
                            <Icon name="map-pin-2-fill" size={Hp(1.6)} color={Colors.white} />
                            <Text numberOfLines={1} className="text-white font-intMed" style={{ fontSize: Hp(1.3) }}>Mumbai, India</Text>
                        </View>

                        <View className='pt-2 ' >
                            <TouchableOpacity onPress={() => console.log("Book Now")} activeOpacity={0.8} className="bg-primary justify-center items-center rounded-lg py-3 z-20" >
                                <Text className="font-MuliBlack capitalize text-white" style={{ fontSize: Hp(1.8) }}>Book Now</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </LinearGradient>
            </View>
        </View>
    )
}
export default HomeScreen