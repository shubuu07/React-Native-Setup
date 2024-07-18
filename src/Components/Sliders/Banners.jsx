import { View, useWindowDimensions, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Hp, Wp } from '../../Constants/Theme';
import FastImage from 'react-native-fast-image';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import Carousel from 'react-native-snap-carousel-new';

const Banners = ({ banners, loader }) => {
    const { width, height } = useWindowDimensions();
    const navigation = useNavigation()
    return (
        <View className="pt-2 ">
            {
                loader ? <SkeletonPlaceholder speed={1000} borderRadius={Hp(2)}>
                    <View style={{ flexDirection: "row", columnGap: 13, paddingLeft: 18 }} >
                        <View style={{ alignSelf: "center", width: Wp(82), height: Hp(21) }} />
                        <View style={{ alignSelf: "center", width: Wp(93), height: Hp(21) }} />
                    </View>
                </SkeletonPlaceholder > :
                    <Carousel
                        layout='default'
                        data={banners}
                        renderItem={RenderItem}
                        containerCustomStyle={{ paddingHorizontal: 5 }}
                        sliderWidth={width}
                        itemWidth={width - 50}
                        activeSlideAlignment='start'
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
            style={{ height: Hp(21) }}
        // onPress={() => {
        //     item?.url_type == 'internal' ?
        //         navigation.navigate(item?.redirect_url) :
        //         Linking.openURL(item?.redirect_url)
        // }}
        >
            <FastImage priority={FastImage.priority.high} style={{ width: '100%', height: '100%' }} onLoadStart={this.onLoadStart}
                onLoad={this.onLoad} source={{ uri: item?.slide_url }}
                className="w-full h-full rounded-2xl bg-slate-200" />
        </TouchableOpacity>
    )
}

export default Banners