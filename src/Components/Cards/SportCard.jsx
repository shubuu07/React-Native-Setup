import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import FastImage from 'react-native-fast-image'
import { Hp } from '../../Constants/Theme'
import { Star } from 'phosphor-react-native'

const SportCard = () => {
    return (
        <TouchableOpacity activeOpacity={.8}
            className="relative rounded-2xl space-y-1  " style={{ width: Wp(70) }}>
            <View className='relative' >
                <FastImage priority={FastImage.priority.high} source={{ uri: "https://km-landing.s3.ap-south-1.amazonaws.com/Images/km-homePageNew/mumb-seven.png" }} className="self-center rounded-2xl bg-slate-100"
                    style={{ width: Wp(70), height: Hp(20), shadowColor: "#000", shadowOffset: { width: 2, height: 2 }, shadowOpacity: 0.25, shadowRadius: 3.84, elevation: 8 }}
                />
                {/* <LinearGradient className="flex-1 absolute top-0 left-0 right-0 bottom-0 rounded-2xl"  start={{ x: 0, y: 0.4 }} end={{ x: 0, y: 1 }} colors={['rgba(0, 0, 0, 0.01)', 'rgba(0, 0, 0, 0.4)', 'rgba(0, 0, 0, 0.7)']} /> */}
                <View className='absolute bg-white rounded-full top-2 right-2  py-1.5 px-3 z-50 ' >
                    <Text className="text-primary font-intSemi text-center" style={{ fontSize: Hp(1.7) }}>50% OFF</Text>
                </View>
            </View>
            <View className='ios:space-y-0.5 p-1' >
                <Text numberOfLines={1} className="text-black  font-MuliBold  capitalize" style={{ fontSize: Hp(2) }}>Super Sports Park | Radcliffe Kharghar</Text>
                <View className='flex-row  items-center space-x-1' >
                    <View className='w-3.5 h-3.5 bg-green-600 rounded-full justify-center items-center'>
                        <Star size={Hp(1.2)} color="white" weight="fill" />
                    </View>
                    <Text className="text-black font-intSemi text-center" style={{ fontSize: Hp(1.7) }}>4.0</Text>
                    <Text numberOfLines={1} className="text-slate-700 font-intSemi" style={{ fontSize: Hp(1.5) }}><Text className="text-orange-300">•</Text> 10 Km away</Text>
                </View>
                <View className='space-y-1.5 py-1 ' >
                    <Text numberOfLines={2} className="text-slate-500 font-intMed" style={{ fontSize: Hp(1.5) }}>Sector 8, Kharghar</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default SportCard