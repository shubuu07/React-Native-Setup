import { View, useWindowDimensions, TouchableOpacity, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Colors, Hp, Wp } from '../../Constants/Theme';
import FastImage from 'react-native-fast-image';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import Carousel from 'react-native-snap-carousel-new';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-remix-icon';


const Banners = ({ data, loader }) => {
    const { width, height } = useWindowDimensions();
    const navigation = useNavigation()
    return (
        <View className="">
            {
                loader ? <SkeletonPlaceholder speed={1000} borderRadius={Hp(2)}>
                    <View style={{ flexDirection: "row", columnGap: 13, paddingLeft: 18 }} >
                        <View style={{ alignSelf: "center", width: Wp(82), height: Hp(21) }} />
                        <View style={{ alignSelf: "center", width: Wp(93), height: Hp(21) }} />
                    </View>
                </SkeletonPlaceholder > :
                    <Carousel
                        layout='default'
                        data={data}
                        renderItem={RenderItem}
                        sliderWidth={width}
                        itemWidth={width - 50}
                        activeSlideAlignment='center'
                        inactiveSlideShift={0}
                        inactiveSlideScale={1}
                        inactiveSlideOpacity={1}
                        loop
                        autoplay
                        autoplayDelay={4000}
                        autoplayInterval={4000}
                    />
            }

        </View >
    )
}

const RenderItem = ({ item }) => {
    return (
        <TouchableOpacity className="rounded-2xl overflow-hidden mx-1.5 bg-slate-200 "
            activeOpacity={0.9}
            style={{ height: Hp(22) }}
        // onPress={() => {
        //     item?.url_type == 'internal' ?
        //         navigation.navigate(item?.redirect_url) :
        //         Linking.openURL(item?.redirect_url)
        // }}
        >
            <View className='relative' >
                <FastImage priority={FastImage.priority.high} onLoadStart={this.onLoadStart}
                    onLoad={this.onLoad} source={{ uri: item?.slide_url }}
                    className="w-full h-full rounded-2xl bg-slate-200"
                />
                <LinearGradient className="flex-1 absolute top-0 left-0 right-0 bottom-0 rounded-2xl" start={{ x: 0, y: 0.4 }} end={{ x: 0, y: 1 }} colors={['rgba(0, 0, 0, 0.01)', 'rgba(0, 0, 0, 0.4)', 'rgba(0, 0, 0, 0.7)']} >
                    <View className=' absolute bottom-4  self-center left-2 right-2 rounded-lg px-1.5 space-y-0.5 ' >
                        <Text numberOfLines={1} className="text-white  font-intBold  capitalize" style={{ fontSize: Hp(2.5) }}>Volleyball challenge</Text>
                        <View className='flex-row  items-end space-x-0.5' >
                            <Icon name="map-pin-2-fill" size={Hp(1.6)} color={Colors.white} />
                            <Text numberOfLines={1} className="text-white font-intMed" style={{ fontSize: Hp(1.3) }}>Mumbai, India</Text>
                        </View>
                        <View className='pt-2 self-baseline' >
                            <TouchableOpacity onPress={() => console.log("Book Now")} activeOpacity={0.8} className="bg-primary justify-center items-center rounded-lg py-2.5 z-20 px-5" >
                                <Text className="font-MuliBlack capitalize text-white" style={{ fontSize: Hp(1.8) }}>Book Now</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </LinearGradient>
            </View>
        </TouchableOpacity>
    )
}

export default Banners