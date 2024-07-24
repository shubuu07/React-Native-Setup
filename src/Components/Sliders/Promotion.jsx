import { View } from 'react-native';
import { Colors, Hp, Wp } from '../../Constants/Theme';
import FastImage from 'react-native-fast-image';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import Swiper from 'react-native-swiper';

const Promotion = ({ data, loader, pagination, loop, size }) => {

    return (
        <View className="py-2">
            {
                loader ? <SkeletonPlaceholder speed={1000} borderRadius={Hp(1)}>
                    <View style={{ alignSelf: "center", width: Wp(94), height: size ? size : Hp(14) }}>
                        <View style={{ width: Wp(94), height: size ? size : Hp(14), borderRadius: Hp(1) }} />
                    </View>
                </SkeletonPlaceholder > :
                    <Swiper
                        height={size ? size : Hp(14)}
                        loop={loop}
                        autoplay={loop}
                        showsPagination={pagination}
                        activeDot={
                            <View
                                style={{
                                    backgroundColor: Colors.primary,
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
                                <View key={i} className=" bg-sky-50  self-center rounded-xl" style={{ width: Wp(94), height: size ? size : Hp(14) }}>
                                    <FastImage priority={FastImage.priority.high} source={{ uri: item.slide_url }} className="w-full h-full rounded-xl" />
                                </View>
                            ))
                        }
                    </Swiper>
            }
        </View>
    )
}

export default Promotion