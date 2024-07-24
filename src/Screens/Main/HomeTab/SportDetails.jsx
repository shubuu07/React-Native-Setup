import { View, Text, StatusBar, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from '../../../Components/Header/Header';
import { Colors, Hp, Wp } from '../../../Constants/Theme';
import Promotion from '../../../Components/Sliders/Promotion';
import HeadingTitle from '../../../Components/Header/HeadingTitle';
import VenueCard from '../../../Components/Cards/VenueCard';

const SportDetails = () => {
    return (
        <SafeAreaView edges={["top", "left", "right"]} className="flex-1 bg-white">
            <StatusBar backgroundColor={Colors.white} barStyle={"dark-content"} />
            <Header name={"Football"} />
            <View className='flex-1 bg-slate1' >
                <FlatList
                    className=''
                    ListHeaderComponent={
                        <View className=' pb-3 ios:space-y-2 mt-3 bg-slate1' >
                            <HeadingTitle title="Available Venues" />
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
                    }
                    data={[{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5, }, { id: 6 }, { id: 7 }, { id: 8 }, { id: 9 }, { id: 6 }, { id: 7 }, { id: 8 }, { id: 9 }]}
                    keyExtractor={(_, index) => index.toString()}
                    showsVerticalScrollIndicator={false}
                    renderItem={({ item, index }) => <VenueCard item={item} index={index} />}
                />
            </View>
        </SafeAreaView>
    )
}

export default SportDetails