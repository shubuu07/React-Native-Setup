import { View, Text, StatusBar, Image, TouchableOpacity, ScrollView, Platform, Alert, FlatList } from 'react-native';
import WavyHeader from '../../../Helper/WavyHeader'
import { Colors, Hp, Wp } from '../../../Constants/Theme';
import { SafeAreaView } from 'react-native-safe-area-context'
import { userProfileTabs } from '../../../Utils/api/HelperApi'
import { List } from 'phosphor-react-native';
import BannersCenter from '../../../Components/Sliders/BannersCenter';
import HeadingTitle from '../../../Components/Header/HeadingTitle';
import EventCard from '../../../Components/Cards/EventCard';

const EventsScreen = () => {
    return (
        <SafeAreaView edges={["top", "left", "right"]} className="flex-1 bg-slate1">
            <StatusBar backgroundColor={Colors.slateGray} barStyle={"dark-content"} />
            <View className='flex-1' >
                <Text className="text-black font-MuliBlack px-3 pt-3 pb-1" style={{ fontSize: Hp(3) }}>Events</Text>
                <View className='flex-1' >
                    <FlatList
                        className=''
                        ListHeaderComponent={
                            <>
                                <BannersCenter data={[{ id: 1, slide_url: "https://images.pexels.com/photos/9828008/pexels-photo-9828008.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" }, { id: 2, slide_url: "https://images.pexels.com/photos/274506/pexels-photo-274506.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" }, { id: 3, slide_url: "https://images.pexels.com/photos/863988/pexels-photo-863988.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" }, { id: 4, slide_url: "https://images.pexels.com/photos/209977/pexels-photo-209977.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" }, { id: 5, slide_url: "https://km-landing.s3.ap-south-1.amazonaws.com/Images/km-homePageNew/event-desk-new.png" }]} />
                                <View className='pt-3 pb-3 ios:space-y-2' >
                                    <HeadingTitle title="Nearby Venues" />
                                    <FlatList
                                        data={[{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }]}
                                        keyExtractor={(_, index) => index.toString()}
                                        horizontal
                                        contentContainerStyle={{
                                            columnGap: Hp(1),
                                            paddingHorizontal: Wp(2),
                                        }}
                                        showsHorizontalScrollIndicator={false}
                                        renderItem={({ item, index }) => <View className='px-4 py-[9px] bg-white rounded-full' >
                                            <Text className="font-MuliBold text-slate-600 tracking-wider" style={{ fontSize: Hp(1.8) }}>Football</Text>
                                        </View>}
                                    />
                                </View>
                            </>

                        }
                        data={[{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5, }, { id: 6 }, { id: 7 }, { id: 8 }, { id: 9 }, { id: 6 }, { id: 7 }, { id: 8 }, { id: 9 }]}
                        keyExtractor={(_, index) => index.toString()}
                        showsVerticalScrollIndicator={false}
                        renderItem={({ item, index }) => <EventCard item={item} index={index} />}
                    />
                </View>
            </View>
        </SafeAreaView>
    )
}

export default EventsScreen