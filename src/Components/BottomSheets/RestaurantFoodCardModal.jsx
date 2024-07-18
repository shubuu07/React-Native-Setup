import { View, Text, TouchableOpacity, Vibration, Platform } from "react-native";
import RBSheet from "react-native-raw-bottom-sheet";
import { COLORS, Hp, FONTS } from "../../constants/theme";
// import { Minus, Plus, Star, X } from "phosphor-react-native";
import icons from "../../constants/icons";
import { useDispatch, useSelector } from "react-redux";
import { setResAddToCart, setResDeleteFromCart, setResRemoveFromCart } from "../../redux/slice/restaurantCartSlice";
import FastImage from "react-native-fast-image";
import PriceFormater from "../../Helper/PriceFormater";
import AnimatedNumber from "react-native-number-animate";
import Animated, { FadeInDown } from "react-native-reanimated";
import LinearGradient from "react-native-linear-gradient";
const RestaurantFoodCardModal = ({ refRBSheet, item }) => {
    const dispatch = useDispatch();
    const cartData = useSelector(state => state.restaurantCart.resCart)
    const newData = cartData?.filter((items) => items.food_id === item.food_id)
    const resAddToCart = (items) => {
        dispatch(setResAddToCart({ ...items, qty: 1 }))
    }

    const gradientColors =
        item?.food_veg_nonveg === 'Both'
            ? ['rgba(255, 255, 255, 0.01)', 'rgba(254, 215, 170, 0.03)', 'rgba(254, 215, 170, 0.7)']
            : item?.food_veg_nonveg === 'Veg'
                ? ['rgba(255, 255, 255, 0.01)', 'rgba(240, 253, 244, 0.03)', 'rgba(187, 247, 208, 0.7)']
                : ['rgba(255, 255, 255, 0.01)', 'rgba(254, 215, 170, 0.03)', 'rgba(254, 202, 202, 0.7)'];

    const addtocard = () => {
        resAddToCart(item), Vibration.vibrate(100)
    }

    const addButton = () => {
        resAddToCart(item), Vibration.vibrate(100)
    }

    const removetocart = () => {
        if (newData[0]?.qty > 1) {
            dispatch(setResRemoveFromCart(item)),
                Vibration.vibrate(100)
        } else {
            dispatch(setResDeleteFromCart(item)),
                Vibration.vibrate(100)
        }
    }

    return (
        <>
            <RBSheet
                ref={refRBSheet}
                closeOnDragDown={false}
                closeOnPressMask={true}
                animationType="slide"
                openDuration={200}
                closeDuration={200}
                closeOnPressBack={true}
                customStyles={{
                    container: {
                        height: Hp(60),
                        backgroundColor: '#fff',
                        borderTopLeftRadius: 25,
                        borderTopRightRadius: 25
                    },
                    wrapper: {
                        backgroundColor: "rgba(0,0,0,0.5)"
                    },
                    draggableIcon: {
                        backgroundColor: COLORS.primary
                    }
                }}
            >
                <View className='flex-1 bg-white' >
                    <View className='bg-white pb-2 rounded-xl android:shadow-md flex-1' >
                        <View className='relative bg-white' >
                            {
                                item?.food_image_1 ? <FastImage priority={FastImage.priority.high} source={{ uri: item?.food_image_1 }} className="rounded-t-2xl relative w-full bg-slate-100" style={{
                                    height: Hp(28)
                                }} alt='FOOD IMAGE' /> : <FastImage priority={FastImage.priority.high} source={{ uri: 'https://s3.ap-south-1.amazonaws.com/media.pi-play.com/events/1718351196_bannerImage_dish.jpg' }} className="rounded-t-xl relative w-full bg-slate-100" style={{
                                    height: Hp(28)
                                }} alt='FOOD IMAGE' />
                            }
                            <TouchableOpacity onPress={() => refRBSheet.current.close()} activeOpacity={0.9} className='absolute right-4 top-4 bg-white rounded-full p-2 justify-center items-center' style={{ shadowColor: "#000", shadowOffset: { width: 2, height: 2 }, shadowOpacity: 0.25, shadowRadius: 3.84, elevation: 8 }}>
                                <X size={Hp(2.5)} className="text-orange-500" weight="bold" />
                            </TouchableOpacity>
                        </View>

                        <Animated.View entering={FadeInDown.duration(800).delay(100)} className='flex-row items-center p-2 pt-4' >
                            <View className='flex-1 space-y-1 ios:space-y-1.5' >
                                <LinearGradient className="p-1.5 px-2 ios:p-2 rounded-full" pointerEvents="none" start={{ x: 1, y: 0 }} end={{ x: 0, y: 1 }} colors={gradientColors} >
                                    <View className='flex-row items-center ' >
                                        <FastImage priority={FastImage.priority.high} source={item?.food_veg_nonveg == 'Both' ? icons.both : item?.food_veg_nonveg == 'Veg' ? icons.veg : icons.nonveg} style={{ width: Hp(3), height: Hp(3) }} resizeMode='contain' />
                                        <View className="px-1 ios:py-[2px]  capitalize" >
                                            <Text className={`${item?.food_veg_nonveg == 'Both' ? "text-orange-500" : item?.food_veg_nonveg == 'Veg' ? "text-green-500" : "text-red-500"} font-intBold tracking-wide`} style={{ fontSize: Hp(1.8) }}>{item?.menu_type}</Text>
                                        </View>
                                    </View>
                                </LinearGradient>
                                <View className='flex-row items-center space-x-2' >
                                    <Text className="font-intSemi text-black px-1 flex-1 capitalize" numberOfLines={2} style={{ fontSize: Hp(2.2) }}>{item?.food_name}</Text>
                                    <>
                                        {
                                            newData?.length == 0 ?
                                                <TouchableOpacity
                                                    onPress={addButton}
                                                    activeOpacity={1} className=" self-center z-10 shadow-md flex-row items-center bg-white px-10 py-2.5 rounded-full" style={{ shadowColor: "#666", shadowOffset: { width: 2, height: 2 }, shadowOpacity: 0.25, shadowRadius: 3.84, elevation: 10 }}>
                                                    <Text className="font-intBold tracking-wider text-orange-500" style={{ fontSize: Hp(2.2) }}>ADD</Text>
                                                </TouchableOpacity>
                                                :
                                                <View className='self-center z-10 shadow-md flex-row items-center space-x-4 bg-white px-2 py-1.5 rounded-full' style={{ shadowColor: "#666", shadowOffset: { width: 2, height: 2 }, shadowOpacity: 0.25, shadowRadius: 3.84, elevation: 10 }}>
                                                    <TouchableOpacity
                                                        onPress={removetocart}
                                                        activeOpacity={.8} className="bg-red-100 p-2 rounded-full justify-center items-center">
                                                        <Minus size={Hp(2.3)} className="text-red-500" weight='bold' />
                                                    </TouchableOpacity>
                                                    <View className='' >
                                                        <AnimatedNumber
                                                            number={newData?.length == 0 ? 0 : newData[0]?.qty}
                                                            textStyle={{
                                                                fontSize: Hp(2.3),
                                                                color: "#000",
                                                                ...FONTS.intSemi,
                                                                textAlign: 'center',
                                                            }}
                                                            textHeight={Platform.OS == 'ios' ? Hp(2.5) : Hp(3)}
                                                            disableDefaultAnimations={true}
                                                            duration={200}
                                                        />
                                                    </View>
                                                    <TouchableOpacity onPress={addtocard} activeOpacity={.8} className="bg-green-100 p-1.5 rounded-full justify-center items-center">
                                                        <Plus size={Hp(2.3)} className="text-green-500" weight='bold' />
                                                    </TouchableOpacity>
                                                </View>
                                        }
                                    </>
                                </View>

                                <View className='flex-row  items-center space-x-1' >
                                    <View className='w-[16] h-[16] bg-green-600 rounded-full justify-center items-center'>
                                        <Star size={Hp(1.35)} color="white" weight="fill" />
                                    </View>
                                    <Text className="text-slate-500 font-intSemi text-center" style={{ fontSize: Hp(1.8) }}>2.0 (100+ Rating)</Text>
                                </View>
                                <Text className=" text-slate-800 font-intSemi px-1" style={{ fontSize: Hp(2.3) }}><PriceFormater price={item?.final_price} /></Text>
                                <Text numberOfLines={2} className=" text-gray-500 font-intMed px-1 tracking-wide" style={{ fontSize: Hp(1.7) }}>{item?.food_details}</Text>
                            </View>
                        </Animated.View>

                    </View>
                </View>
            </RBSheet>
        </>
    )
}

export default RestaurantFoodCardModal