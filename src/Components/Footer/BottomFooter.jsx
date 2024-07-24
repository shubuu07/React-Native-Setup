import { View, Text } from 'react-native'
import React from 'react'
import FastImage from 'react-native-fast-image'
import { Hp } from '../../Constants/Theme'
import Icons from '../../Constants/Icons'

const BottomFooter = () => {
    return (
        <View className="w-full px-5 space-y-1">
            <View className="flex-row items-end">
                <FastImage
                    source={Icons.handball}
                    style={{ width: Hp(5), height: Hp(5) }}
                    resizeMode="contain"
                />
                <Text
                    className="text-slate-500 font-intMed mb-1 ml-2"
                    style={{ fontSize: Hp(1.7) }}>
                    v1.0
                </Text>
            </View>
            <Text
                className="text-slate-500 font-intMed"
                style={{ fontSize: Hp(1.7) }}>
                Your Tennis Community App
            </Text>
            <Text
                className="text-black font-intSemi"
                style={{ fontSize: Hp(1.6) }}>
                <Text className="underline">Privacy Policy</Text> | <Text className="underline">Terms of Service</Text> | <Text className="underline">FAQs</Text>
            </Text>
        </View>
    )
}

export default BottomFooter